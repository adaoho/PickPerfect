import { createBrowserRouter, redirect } from "react-router-dom";
import Toastify from "toastify-js";

import LoginPage from "../views/LoginPage";
import RegisterPage from "../views/RegisterPage";
import MainPage from "../views/MainPage";
import HomePage from "../views/HomePage";
import MovementPage from "../views/MovementPage";
import DetailFruit from "../views/DetailFruit";
import PurchasePage from "../views/PurchasePage";
import HomeFruit from "../views/HomeFruit";

const router = createBrowserRouter([
  {
    path: "*",
    loader: async () => {
      return redirect("/");
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
            y: 50,
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
            y: 50,
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
        element: <HomePage />,
      },
    ],
  },
  {
    element: <MainPage />,
    children: [
      {
        path: "/movement/:id",
        element: <MovementPage />,
      },
      {
        path: "/fruit/:id",
        element: <DetailFruit />,
      },
      {
        path: "/purchase/:id",
        element: <PurchasePage />,
      },
      {
        path: "/fruit",
        element: <HomeFruit />,
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
