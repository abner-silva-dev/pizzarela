// Test ID: IIDSAT
import { useFetcher, useLoaderData } from "react-router-dom";

import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";

import OrderItem from "./OrderItem.jsx";
import UpdateOrder from "./UpdateOrder.jsx";

import { getOrder } from "./../../services/apiRestaurant.js";
import { useEffect } from "react";

function Order() {
  const order = useLoaderData();

  const fetcher = useFetcher();

  useEffect(() => {
    if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu");
  }, [fetcher]);

  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="mt-7 space-y-8 px-4 py-3 sm:px-10">
      <div className="flex flex-wrap items-center justify-between gap-2 font-semibold">
        <h2 className="text-lg font-bold md:text-3xl">Orden # {id} estatus</h2>

        <div className="space-x-2">
          {priority && (
            <span className="rounded-full bg-yellow-600 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-stone-200">
              Prioridad
            </span>
          )}
          <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-stone-200">
            {status} Orden
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-6 py-5">
        <p className="font-medium">
          {deliveryIn > 0
            ? `Solo quedan ${calcMinutesLeft(estimatedDelivery)} minutos 😃`
            : "El pedido debería haber llegado"}
        </p>
        <p className="text-xs text-stone-500">
          (Entrega estimada: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="divide-y divide-stone-200 border-b border-t">
        {cart.map((item) => (
          <OrderItem
            item={item}
            isLoadingIngredients={fetcher.state === "loading"}
            key={item.pizzaId}
            ingredients={
              fetcher?.data?.find((el) => el.id === item.pizzaId)
                ?.ingredients ?? []
            }
          />
        ))}
      </ul>

      <div className="space-y-23 bg-stone-200 px-6 py-5">
        <p className="text-sm font-medium text-stone-600">
          Costo Pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-sm font-medium text-stone-600">
            Costo de envio prioritario: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-bold">
        Total a pagar contra entrega: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
      {!priority && <UpdateOrder />}
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
