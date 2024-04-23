import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";

import { formatCurrency } from "./../../utils/helpers";

import { createOrder } from "../../services/apiRestaurant";
import { useScreen } from "./../../hooks/useScreen";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getTotalCartPrice } from "./../cart/cartSlice";

import Button from "../../ui/Button";
import EmptyCart from "./../cart/EmptyCart";
import store from "./../../store";
import { fetchAddress } from "../user/userSlice";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const dispatch = useDispatch();
  const [withPriority, setWithPriority] = useState(false);
  const {
    userName,
    status: addressStatus,
    position,
    address,
    error: errorAddress,
  } = useSelector((state) => state.user);

  const isLoadingAddress = addressStatus === "loading";

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const { screenWidth } = useScreen();

  const formErrors = useActionData();

  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  if (!cart.length) return <EmptyCart />;

  return (
    <div
      className="h-full bg-cover bg-[50%_90%] px-4 py-10 text-stone-50 md:bg-[50%_75%] md:px-7"
      style={{
        backgroundImage: `${
          screenWidth <= 768
            ? "linear-gradient(105deg,rgba(0, 0, 0, 0.5) 0%,rgba(0, 0, 0, 0.5)  100%, transparent 0%),url('/delivery-pizza.jpg')"
            : "linear-gradient(105deg,rgba(0, 0, 0, 0.8) 0%,rgba(0, 0, 0, 0.8)  60%, transparent 0%),url('/delivery-pizza.jpg')"
        }`,
      }}
    >
      <h2 className="mb-10 text-xl font-bold md:mb-16 md:text-3xl">
        ¿Listo para ordenar? ¡Vamos!
      </h2>

      <Form method="POST" className="text-lg md:text-xl">
        <div className="mb-7 flex flex-col gap-2  sm:flex-row sm:items-center  md:mb-10 md:w-[61%]">
          <label className="sm:basis-40">Nombre</label>
          <div className="grow">
            <input
              className="input w-full text-stone-900"
              type="text"
              name="customer"
              defaultValue={userName}
              required
            />
          </div>
        </div>

        <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-center md:mb-10 md:w-[59%]">
          <label className="sm:basis-40">Número de Teléfono</label>
          <div className="grow">
            <input
              className="input w-full text-stone-900"
              type="tel"
              name="phone"
              required
            />
            {formErrors?.phone && (
              <p className="mt-2 rounded-full p-2 text-base text-red-300 md:text-red-600">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="relative mb-10 flex flex-col gap-2 sm:flex-row sm:items-center md:mb-10 md:w-[57%]">
          <label className="sm:basis-40">Dirección</label>
          <div className="grow text-lg">
            <input
              className="input w-full text-stone-900"
              type="text"
              name="address"
              disabled={isLoadingAddress}
              defaultValue={address}
              required
            />
            {addressStatus === "error" && (
              <p className="mt-2 rounded-full p-2 text-base text-red-300 md:text-red-600">
                {errorAddress}
              </p>
            )}

            {!position.latitude && !position.longitude && (
              <span className="absolute right-[-1px] top-[0] z-50 max-md:top-[-7%] max-sm:top-[45%]">
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(fetchAddress());
                  }}
                  disabled={isLoadingAddress}
                >
                  Conseguir posición
                </Button>
              </span>
            )}
          </div>
        </div>

        <div className="mb-11 flex  gap-2  sm:flex-row  sm:items-center md:w-[60%]">
          <input
            className="h-6 w-6 accent-red-500 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">¿Quieres darle prioridad a tu pedido?</label> <p> El costo de la prioridad seria de: {formatCurrency(priorityPrice)}</p>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input
            type="hidden"
            name="position"
            value={
              position.longitude && position.latitude
                ? `${position.latitude},${position.longitude}`
                : ""
            }
          />
          <Button disabled={isSubmitting || isLoadingAddress}>
            {isSubmitting
              ? "Placing order..."
              : `Ordene ahora por ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formDate = await request.formData();
  const data = Object.fromEntries(formDate);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };

  const errors = {};

  if (!isValidPhone(order.phone))
    errors.phone =
      "Por favor danos tu número de teléfono correcto. Es posible que lo necesitemos para comunicarnos con usted.";

  if (Object.keys(errors).length > 0) return errors;

  // If everything is okay, create new order and redirect
  const newOrder = await createOrder(order);

  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
