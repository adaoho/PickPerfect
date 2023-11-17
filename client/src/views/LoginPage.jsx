import { useState, useEffect } from "react";
import { motion as m } from "framer-motion";
import Swal from "sweetalert2";
import { useNavigate, Link } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { auth } from "../utils/firebase";
import {
  GithubAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import pickPerfectApi from "../config";
import logo from "../assets/pickperfect_logo.png";
import Toastify from "toastify-js";

const LoginPage = () => {
  const navigate = useNavigate();
  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        // console.log(response, "<<<< access token");
        const { data } = await pickPerfectApi.post("/user/google-login", {
          token: response.code,
        });
        // console.log(data, "<<<< data");

        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("fullname", data.fullname);
        localStorage.setItem("email", data.email);
        localStorage.setItem("photo", data.photo);
        localStorage.setItem("user_id", data.user_id);
        navigate("/");

        Swal.fire({
          title: `Hola ${data.fullname}!`,
          timer: 1500,
          showConfirmButton: false,
          color: "#ffffff",
          background: "#14C93E",
        });
      } catch (error) {
        console.log(error);
      }
    },
    onError: (error) => {
      console.log(error);
    },
    flow: "auth-code",
  });

  const githubProvider = new GithubAuthProvider();
  const GithubProviderClick = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);
      const userGithub = result._tokenResponse;

      //   console.log(result, "<<< from github signin");

      const payload = {
        fullname: userGithub.fullName,
        email: userGithub.email,
        password: "github_password",
        imageUrl: userGithub.photoUrl,
      };

      const { data } = await pickPerfectApi.post("/user/github-login", payload);

      //   console.log(data);

      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("fullname", data.fullname);
      localStorage.setItem("email", data.email);
      localStorage.setItem("photo", data.photo);
      localStorage.setItem("user_id", data.user_id);
      navigate("/");

      Swal.fire({
        title: `Hola ${data.fullname}!`,
        timer: 1500,
        showConfirmButton: false,
        color: "#ffffff",
        background: "#14C93E",
      });
    } catch (error) {
      console.log(error);
      if (error.name === "FirebaseError") {
        Toastify({
          text: `Your email account already registered using another social media platform`,
          duration: 5000,
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
      }
    }
  };

  const facebookProvider = new FacebookAuthProvider();
  const FacebookProviderClick = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      const userFacebook = result._tokenResponse;

      const payload = {
        fullname: userFacebook.fullName,
        email: userFacebook.email,
        password: "facebook_password",
        imageUrl: userFacebook.photoUrl,
      };

      const { data } = await pickPerfectApi.post(
        "/user/facebook-login",
        payload
      );

      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("fullname", data.fullname);
      localStorage.setItem("email", data.email);
      localStorage.setItem("photo", data.photo);
      localStorage.setItem("user_id", data.user_id);
      navigate("/");

      Swal.fire({
        title: `Hola ${data.fullname}!`,
        timer: 1500,
        showConfirmButton: false,
        color: "#ffffff",
        background: "#14C93E",
      });
    } catch (error) {
      console.log(error);
      if (error.name === "FirebaseError") {
        Toastify({
          text: `Your email account already registered using another social media platform`,
          duration: 5000,
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
      }
    }
  };

  const variants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const handleChangeLogin = (element) => {
    const { name, value } = element.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const submitLogin = async (element) => {
    element.preventDefault();
    try {
      const { data } = await pickPerfectApi.post("/user/login", loginForm);
      // console.log(data, "<<<< from axios getLogin useEffect");

      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("email", data.email);
      localStorage.setItem("fullname", data.fullname);
      localStorage.setItem("photo", data.photo);
      localStorage.setItem("user_id", data.user_id);
      navigate("/");

      Swal.fire({
        title: `Hola ${data.fullname}!`,
        timer: 1500,
        showConfirmButton: false,
        color: "#ffffff",
        background: "#14C93E",
      });
    } catch (error) {
      console.log(error, "<<<< error handle in client");
      Toastify({
        text: `${error.response.data.message}`,
        duration: 5000,
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
    }
  };

  return (
    <>
      <m.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.5 }}
        className="flex justify-center items-center h-screen bg-white"
      >
        <div className="relative w-full max-w-md p-8 space-y-3 rounded-xl text-gray-100 shadow-2xl bg-white">
          <div className="flex flex-col justify-center items-center mb-4 w-full">
            <img src={logo} className="h-24 object-contain" />
          </div>

          <Link
            to={"/"}
            class="absolute -top-7 -left-4 p-2 bg-pp-50 rounded-full material-symbols-outlined shadow-md text-white transition-all hover:bg-pp-150"
          >
            arrow_back
          </Link>

          <form action="" className="space-y-6" onSubmit={submitLogin}>
            <div className="space-y-1 text-sm">
              <label htmlFor="username" className="block text-gray-400">
                Email
              </label>
              <input
                onChange={handleChangeLogin}
                value={loginForm.email}
                autoComplete="off"
                type="email"
                name="email"
                placeholder="type your email"
                className="w-full px-4 py-3 text-gray-800 rounded-md border-gray-700 bg-gray-100 focus:outline-none focus:ring focus:ring-pp-100 placeholder-gray-600 placeholder-opacity-40 required"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="password" className="block text-gray-400">
                Password
              </label>
              <input
                onChange={handleChangeLogin}
                autoComplete="off"
                value={loginForm.password}
                type="password"
                name="password"
                placeholder="type your password"
                className="w-full px-4 py-3 text-gray-800 rounded-md border-gray-700 bg-gray-100 focus:outline-none focus:ring focus:ring-pp-100 placeholder-gray-600 placeholder-opacity-40 required"
              />
            </div>
            <button
              type="submit"
              className="block w-full p-3 text-center rounded-md bg-pp-50 text-white font-bold hover:bg-pp-100 transition-all hover:scale-105 active:scale-90 hover:text-gray-100"
            >
              Sign in
            </button>
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <p className="px-3 text-sm dark:text-gray-400">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          </div>
          <div className="flex justify-center space-x-4">
            <button
              onClick={login}
              aria-label="Log in with Google"
              className="p-3 text-gray-500 rounded-sm hover:text-red-500 hover:scale-105 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-[24px] h-[24px] fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
            </button>
            <button
              onClick={FacebookProviderClick}
              aria-label="Log in with Twitter"
              className="p-3 text-gray-500 rounded-sm hover:text-blue-500 hover:scale-105 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-[23px] h-[23px] fill-current"
              >
                <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0" />
              </svg>
            </button>
            <button
              onClick={GithubProviderClick}
              aria-label="Log in with GitHub"
              className="p-3 text-gray-500 rounded-sm hover:text-black hover:scale-105 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-[25px] h-[25px] fill-current"
              >
                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
              </svg>
            </button>
          </div>
          <p className="text-xs text-center sm:px-6 dark:text-gray-400">
            Don't have an account?{" "}
            <Link
              to={"/register"}
              rel="noopener noreferrer"
              className="underline text-gray-800 hover:scale-105 hover:text-pp-100 hover:font-bold"
            >
              Sign up
            </Link>
          </p>
        </div>
      </m.div>
    </>
  );
};

export default LoginPage;
