import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";
import { useSelector } from "react-redux";
import { getCart } from "../features/cart/cartSlice";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const isEmpty = useSelector(getCart).length === 0;

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />
      <main className={`${!isEmpty ? "pb-12" : ""}`}>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
