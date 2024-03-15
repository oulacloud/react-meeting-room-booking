import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  Link,
  Outlet,
} from "react-router-dom";
import  {router}  from "./router/index";



ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
