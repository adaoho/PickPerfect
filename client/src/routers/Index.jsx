import { createBrowserRouter, redirect } from "react-router-dom";
import Toastify from "toastify-js";

import LoginPage from "../views/LoginPage";
import RegisterPage from "../views/RegisterPage";
import MainPage from "../views/MainPage";
import DashboardPage from "../views/DashboardPage";

const router = createBrowserRouter([
  {
    path: "*",
    loader: async () => {
      if (!localStorage.access_token) {
        Toastify({
          text: `You Need to Login First!`,
          duration: 3000,
          position: "center",
          gravity: "top",
          close: true,
          offset: {
            y: 30,
          },
          style: {
            background: "linear-gradient(to right, #900C3F, #F94C10)",
          },
        }).showToast();
        return redirect("/login");
      }

      if (localStorage.access_token) {
        return redirect("/");
      }

      return null;
    },
  },
  {
    path: "/login",
    element: <LoginPage />,
    loader: async () => {
      if (localStorage.access_token) {
        Toastify({
          text: `You Already Login!`,
          duration: 3000,
          position: "center",
          gravity: "bottom",
          close: true,
          offset: {
            y: 30,
          },
          style: {
            background: "linear-gradient(to right, #14C93E, #041C3B)",
          },
        }).showToast();
        return redirect("/");
      }

      return null;
    },
  },
  {
    path: "/register",
    element: <RegisterPage />,
    loader: async () => {
      if (localStorage.access_token) {
        Toastify({
          text: `You Already Login!`,
          duration: 3000,
          position: "center",
          gravity: "bottom",
          close: true,
          offset: {
            y: 30,
          },
          style: {
            background: "linear-gradient(to right, #14C93E, #041C3B)",
          },
        }).showToast();
        return redirect("/");
      }

      return null;
    },
  },
  {
    element: <MainPage />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
    ],
    loader: async () => {
      if (!localStorage.access_token) {
        Toastify({
          text: `You need to Login First!`,
          duration: 3000,
          position: "center",
          gravity: "top",
          close: true,
          offset: {
            y: 30,
          },
          style: {
            background: "linear-gradient(to right, #900C3F, #F94C10)",
          },
        }).showToast();
        return redirect("/login");
      }

      return null;
    },
  },
]);

export default router;
