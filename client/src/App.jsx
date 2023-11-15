import { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import {
  GithubAuthProvider,
  FacebookAuthProvider,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";
import router from "./routers/Index";
import axios from "axios";
import { auth } from "./utils/firebase";
import { RouterProvider, useNavigate } from "react-router-dom";

function App() {
  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        console.log(response, "<<<< access token");

        const { data } = await axios.post(
          "http://localhost:3000/user/google-login",
          {
            token: response.code,
          }
        );

        console.log(data, "<<<< data");
      } catch (error) {
        console.log(error);
      }
    },
    onError: (error) => {
      console.log(error);
    },
    flow: "auth-code",
  });

  // // Sign in With Facebook

  // const fbProvider = newFacebookAuthProvider();
  // const FacebookProvider = async () => {
  //   try {
  //     const result = await signInWithPopup(auth, fbProvider);
  //     console.log(result);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // Sign in With Github

  const githubProvider = new GithubAuthProvider();
  const GithubProviderClick = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <RouterProvider router={router} />
      {/* <div className="flex h-screen w-screen items-center justify-center flex-col gap-2">
        <button
          className="p-2 bg-red-500 text-white rounded-md"
          onClick={login}
        >
          Sign in With Google
        </button>
        <button
          className="p-2 bg-gray-900 text-white rounded-md"
          onClick={() => GithubProviderClick()}
        >
          Sign in With Github
        </button>
      </div> */}
    </>
  );
}

export default App;
