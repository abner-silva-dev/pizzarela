import { useDispatch, useSelector } from "react-redux";

import { getUserName } from "../user/userSlice";
import { getCart, clearCart } from "./cartSlice.js";

import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart.jsx";

function Cart() {
  const cart = useSelector(getCart);
  const userName = useSelector(getUserName);
  const dispatch = useDispatch();

  function handleClear() {
    dispatch(clearCart());
  }

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3 sm:px-10">
      <LinkButton to="/menu">&larr; Volver al Menú</LinkButton>
      <h2 className="mt-7 text-xl font-semibold">Tu carrito, {userName}</h2>
      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>
      <div className="mt-6 space-x-2">
        <Button to="/order/new">Pedir pizzas</Button>
        <Button type="secondary" onClick={handleClear}>
          Vaciar carrito
        </Button>
      </div>
    </div>
  );
}

export default Cart;
