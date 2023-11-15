import { useState } from "react";
import Swal from "sweetalert2";
import pickPerfectApi from "../config";
import { motion as m } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/pickperfect_logo.png";

const RegisterPage = () => {
  const variants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  const navigate = useNavigate();

  const [registerForm, setRegisterForm] = useState({
    fullname: "",
    email: "",
    password: "",
    age: null,
    address: "",
    phoneNumber: "",
  });

  const handleChangeRegister = (element) => {
    const { name, value } = element.target;
    setRegisterForm({ ...registerForm, [name]: value });
  };

  const getRegister = async (element) => {
    element.preventDefault();
    try {
      const { data } = await pickPerfectApi.post(
        "/user/register",
        registerForm
      );

      // console.log(data, "<<<< from axios getRegister useEffect");

      Toastify({
        text: `Register Success! Please Login Again`,
        duration: 5000,
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

      navigate("/login");
    } catch (error) {
      // console.log(error, "<<< this is from register");
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
        <div className="w-full max-w-md p-8 space-y-1 rounded-xl text-gray-100 shadow-2xl bg-white">
          <div className="flex flex-col justify-center items-center w-full">
            <img src={logo} className="h-20 object-contain" />
            <p className="text-xs font-normal text-gray-400 text-center mb-6">
              Gain access to personalize immerse Pick Perfect
            </p>
          </div>
          <form action="" className="space-y-6 mb-2" onSubmit={getRegister}>
            <div className="flex flex-row gap-x-3">
              <div className="space-y-1 text-sm">
                <label className="block text-gray-400">Full Name</label>
                <input
                  onChange={handleChangeRegister}
                  value={registerForm.fullname}
                  type="text"
                  name="fullname"
                  placeholder="type your fullname"
                  className="w-full px-4 py-3  text-gray-800 rounded-md border-gray-700 bg-gray-100 focus:outline-none focus:ring focus:ring-pp-100 placeholder-gray-600 placeholder-opacity-40 required"
                />
              </div>

              <div className="space-y-1 text-sm">
                <label className="block text-gray-400">Email</label>
                <input
                  onChange={handleChangeRegister}
                  value={registerForm.email}
                  type="text"
                  name="email"
                  placeholder="type your email"
                  className="w-full px-4 py-3  text-gray-800 rounded-md border-gray-700 bg-gray-100 focus:outline-none focus:ring focus:ring-pp-100 placeholder-gray-600 placeholder-opacity-40 required"
                />
              </div>
            </div>
            <div className="space-y-1 text-sm">
              <label className="block text-gray-400">Password</label>
              <input
                onChange={handleChangeRegister}
                value={registerForm.password}
                type="password"
                name="password"
                placeholder="Minimum 5 characters"
                className="w-full px-4 py-3  text-gray-800 rounded-md border-gray-700 bg-gray-100 focus:outline-none focus:ring focus:ring-pp-100 placeholder-gray-600 placeholder-opacity-40 required"
              />
            </div>
            <div className="flex flex-row gap-x-3">
              <div className="space-y-1 text-sm">
                <label className="block text-gray-400">Age</label>
                <input
                  onChange={handleChangeRegister}
                  value={registerForm.age}
                  placeholder="input your age"
                  type="number"
                  name="age"
                  // placeholder="Your +62 number"
                  className="w-full px-4 py-3  text-gray-800 rounded-md border-gray-700 bg-gray-100 focus:outline-none focus:ring focus:ring-pp-100 placeholder-gray-600 placeholder-opacity-40 required"
                />
              </div>

              <div className="space-y-1 text-sm">
                <label className="block text-gray-400">Phone Number</label>
                <input
                  onChange={handleChangeRegister}
                  value={registerForm.phoneNumber}
                  type="text"
                  name="phoneNumber"
                  placeholder="Your +62 number"
                  className="w-full px-4 py-3  text-gray-800 rounded-md border-gray-700 bg-gray-100 focus:outline-none focus:ring focus:ring-pp-100 placeholder-gray-600 placeholder-opacity-40 required"
                />
              </div>
            </div>
            <div className="space-y-1 text-sm">
              <label className="block text-gray-400">Address</label>
              <input
                onChange={handleChangeRegister}
                value={registerForm.address}
                type="text"
                name="address"
                placeholder="Province, city, or street"
                className="w-full px-4 py-3  text-gray-800 rounded-md border-gray-700 bg-gray-100 focus:outline-none focus:ring focus:ring-pp-100 placeholder-gray-600 placeholder-opacity-40 required"
              />
            </div>
            <button
              type="submit"
              className="block w-full p-3 text-center rounded-md bg-pp-50 text-white font-bold hover:bg-pp-100 transition-all hover:scale-105 active:scale-90 hover:text-gray-100"
            >
              Register Now
            </button>
          </form>
          <div className="flex items-center pt-4">
            <div className="flex-1 h-px sm:w-16 bg-gray-500"></div>
            <p className="text-xs text-center sm:px-6 dark:text-gray-400">
              Already have an account?
              <Link
                to="/login"
                rel="noopener noreferrer"
                className="mx-2 underline text-gray-800 hover:scale-110 hover:text-pp-100 hover:font-bold transition-all"
              >
                Log In
              </Link>
            </p>
            <div className="flex-1 h-px sm:w-16 bg-gray-500"></div>
          </div>
        </div>
      </m.div>
    </>
  );
};

export default RegisterPage;
