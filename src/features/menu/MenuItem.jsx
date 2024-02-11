import { formatCurrency } from "../../utils/helpers";
import { useDispatch, useSelector } from "react-redux";

import { addItem, getCurrentQuantityById } from "../cart/cartSlice";

import DeleteItem from "../cart/DeleteItem";
import Button from "../../ui/Button";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const currentQuantity = useSelector(getCurrentQuantityById(id));

  const isInCart = currentQuantity > 0;

  function handleAddToCart(e) {
    e.preventDefault();

    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };

    dispatch(addItem(newItem));
  }

  return (
    <li className="font-sans flex overflow-hidden rounded-lg border shadow-stone-800/20 max-lg:flex-col">
      <div className="relative w-48 flex-none max-lg:h-32 max-lg:w-full">
        <img
          src={imageUrl}
          alt=""
          className={`${
            soldOut ? "grayscale backdrop-blur-sm" : ""
          } absolute inset-0 h-full w-full object-cover   `}
          loading="lazy"
        />
      </div>

      <div className="flex-auto p-6">
        <div className="flex flex-wrap">
          <h1 className="flex-auto text-lg font-semibold text-slate-900">
            {name}
          </h1>
          <div className="text-lg font-semibold text-slate-500">
            <p className={`${soldOut ? "line-through" : ""}`}>
              {formatCurrency(unitPrice)}
            </p>
          </div>
          <div className="mt-2 w-full flex-none text-xs font-normal uppercase italic text-slate-700">
            {soldOut ? "Agotado" : "Disponible"}
          </div>
        </div>
        <div className="mb-6 mt-4 flex items-baseline border-b border-slate-200 pb-6">
          <div className="flex flex-wrap justify-start gap-2 align-middle text-sm">
            {ingredients.map((ing, i) => {
              return (
                <p
                  key={ing}
                  className={`${
                    !soldOut
                      ? i % 2 == 0
                        ? "bg-green-600"
                        : "bg-yellow-700"
                      : "bg-stone-400"
                  }   my-1 rounded-full  px-2 font-medium capitalize text-stone-50`}
                >
                  {ing}
                </p>
              );
            })}
          </div>
        </div>

        <div className="mb-6 flex text-sm font-medium">
          <div className="flex flex-auto  justify-between max-md:flex-col max-md:gap-4">
            {!isInCart && !soldOut && (
              <Button type="small" disabled={soldOut} onClick={handleAddToCart}>
                Añadir al Carrito
              </Button>
            )}

            {isInCart && (
              <>
                <UpdateItemQuantity
                  pizzaId={id}
                  currentQuantity={currentQuantity}
                />
                <DeleteItem pizzaId={id} />
              </>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
