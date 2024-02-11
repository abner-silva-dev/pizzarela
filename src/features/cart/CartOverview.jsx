import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;

  return (
    <footer className="text-md fixed bottom-0 flex  w-full items-center justify-between bg-stone-950 p-7 px-5 py-4 font-semibold uppercase sm:px-6 md:space-x-6">
      <p className="space-x-4 font-semibold text-red-100 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link to="/cart" className="text-red-50">
        Ver carrito &rarr;
      </Link>
    </footer>
  );
}

export default CartOverview;
