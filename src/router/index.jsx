import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  Link,
  Outlet,
} from "react-router-dom";
import { Register } from "../components/Register";
import { Login } from "../components/Login";
import { ErrorPage } from "../components/ErrorPage";
import { UpdatePassword } from "../components/UpdatePassword";

const routes = [
  {
    path: "/",
    element: <div>index</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "update_password",
    element: <UpdatePassword />,
  },
];

const router = createBrowserRouter(routes);

export default router;
