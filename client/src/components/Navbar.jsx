import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/pickperfect_logo.png";
import { googleLogout } from "@react-oauth/google";
import Toastify from "toastify-js";
import { useContext } from "react";
import { FruitContenxt } from "../context";

const Navbar = () => {
  const navigate = useNavigate();
  const getToken = localStorage.getItem("access_token");
  const getPhoto = localStorage.getItem("photo");
  const getId = localStorage.getItem("user_id");
  const isLogin = getToken ? getToken : false;
  const getName = localStorage.getItem("fullname");
  const { fetchFruitProvider } = useContext(FruitContenxt);

  const btnLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    googleLogout();
    navigate("/");
    Toastify({
      text: `Your Account has been logout`,
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
  };

  const changeMovement = async () => {
    fetchFruitProvider();
    navigate(`/movement/${getId}`);
  };

  const changeFruit = async () => {
    fetchFruitProvider();
    navigate(`/fruit`);
  };

  return (
    <>
      <div className="w-screen grid grid-cols-3 h-20 border-b-[1px] items-center fixed top-0 bg-white px-14 z-20">
        <div className="pl-15">
          <Link to={"/"}>
            <img src={logo} className="h-16 object-contain" />
          </Link>
        </div>

        <div className="sm:hidden lg:flex w-[480px]">
          <div className="flex items-center justify-between sm:justify-between rounded-full shadow-md h-12 w-full md:w-full border font-roboto">
            <button
              onClick={() => changeMovement()}
              className="w-full border-r-2 text-center border-gray-100 px-2 items-center text-sm font-medium hover:scale-105 hover:text-pp-100 active:scale-90 transition-all hover:font-bold"
            >
              Your Move
            </button>
            <button
              onClick={() => changeFruit()}
              className="w-full border-r-2 text-center border-gray-100 px-2 items-center text-sm font-medium hover:scale-105 hover:text-pp-100 active:scale-90 transition-all hover:font-bold"
            >
              Fruit Nutritions
            </button>
            <Link
              to={"/purchase/1"}
              className="w-full border-r-2 text-center border-gray-100 px-1 items-center font-medium text-sm hover:scale-105 hover:text-pp-100 active:scale-90 transition-all hover:font-bold"
            >
              Purchase
            </Link>
            <button className="w-full border-gray-100 text-center px-4 text-sm items-center text-gray-400 hover:scale-105 hover:text-pp-100 active:scale-90 transition-all hover:font-bold">
              Talk to Us
            </button>
          </div>
        </div>

        {!isLogin && (
          <div className="flex justify-end items-center">
            <Link
              to={"/login"}
              className="flex justify-center items-center rounded-full h-[34px] w-20 font-roboto-600 bg-pp-50 text-white hover:bg-pp-100 hover:scale-105 transition-all"
            >
              Log In
            </Link>
          </div>
        )}

        {isLogin && (
          <>
            <div className="flex justify-end items-center pr-15 gap-">
              {" "}
              <div className="flex justify-evenly items-center py-1.25 pr-1.25 pl-3 gap-2 rounded-full shadow-md h-[55px] w-52 border">
                <p className="text-[15px] font-roboto text-gray-400">
                  {getName}
                </p>
                <div className="avatar">
                  <div className="w-10 mask mask-squircle">
                    <img src={getPhoto} />
                  </div>
                </div>
              </div>
              <button
                onClick={(e) => btnLogout(e)}
                className="material-symbols-outlined ml-4 hover:text-pp-150 transition-all hover:scale-105"
              >
                exit_to_app
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
