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
import { Menu } from "../views/menu/Menu";
import { MeetingRoomList } from "../views/meeting_room_list/MeetingRoomList";
import { BookingHistory } from "../views/booking_history/BookingHistory";

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
      {
        path: "/",
        element: <Menu />,
        children: [
          {
            path: "/",
            element: <MeetingRoomList />,
          },
          {
            path: "meeting_room_list",
            element: <MeetingRoomList />,
          },
          {
            path: "booking_history",
            element: <BookingHistory />,
          },
        ],
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
  },
];

export const router = createBrowserRouter(routes);
