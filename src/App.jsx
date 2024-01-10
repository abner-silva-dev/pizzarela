import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// import Home from "./ui/Home";
// import Cart from "./features/cart/Cart";

import { loader as menuLoader } from "./features/menu/Menu";
import { loader as orderLoader } from "./features/order/Order";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";

import { action as updateOrderAction } from "./features/order/UpdateOrder";

import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";

const Home = lazy(() => import("./ui/Home"));
const Menu = lazy(() => import("./features/menu/Menu"));
const Order = lazy(() => import("./features/order/Order"));
const Cart = lazy(() => import("./features/cart/Cart"));

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: "/cart", element: <Cart /> },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
    ],
  },
]);

function App() {
  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
