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
import { Index } from "../views/Index";
import { UpdateInfo } from "../views/update/update_info";

const routes = [
  {
    path: "/",
    element: <Index></Index>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "update_info",
        element: <UpdateInfo />,
      },
    ],
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
  }
];

const router = createBrowserRouter(routes);

export default router;
