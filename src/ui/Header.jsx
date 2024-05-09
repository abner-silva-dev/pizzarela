import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

import logo from "./../assets/logo/logo_pizzaFast.png";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="font-pizza flex items-center justify-between	bg-red-500 px-5 py-2 uppercase text-stone-50">
      <div className="flex items-end	 gap-4 align-middle lowercase	">
        <Link to="/" className="items-end">
          <img
            src={logo}
            alt="logo pizza fast"
            className="-mb-3 w-12 max-md:w-10"
          />
          <span className="text-sm font-medium italic text-red-100 shadow-lg">
            pizzarela
          </span>
        </Link>
      </div>
      <SearchOrder />
      <Username />
    </header>
  );
}
export default Header;
