import { useContext } from "react";
import CategoryBar from "../components/CategoryBar";
import { FruitContenxt, MovementContext } from "../context";
import pickPerfectApi from "../config";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Toastify from "toastify-js";

const HomePage = () => {
  const navigate = useNavigate();
  const getToken = localStorage.getItem("access_token");
  const getId = localStorage.getItem("user_id");
  const { fruit, setFruit } = useContext(FruitContenxt);
  const { movement, setMovement } = useContext(MovementContext);

  const submitMovement = async (movementid) => {
    // element.preventDefault()
    try {
      const response = await pickPerfectApi.post(
        `/fruitmov/${movementid}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );
      console.log(response, "<<< succcess");

      Toastify({
        text: `Success Add Movement!`,
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

      navigate(`/movement/${getId}`);
    } catch (error) {
      console.log(error);
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
      {/* Section Bawah */}
      {console.log(fruit, "<<<< from homepage")}
      {/* {console.log(movement[0].id, "<<<< from homepage")} */}
      {console.log(movement, "<<<< from homepage")}
      <div className="flex flex-row w-screen h-full justify-center mt-20">
        <div className="flex flex-row w-screen h-[400px] justify-center">
          {/* First Grid Card */}
          <div className="flex justify-center items-center flex-row">
            <div className="absolute">
              <h1 className="text-white text-7xl font-bold font-raleway">
                Small steps, big{" "}
                <span className="font-serif text-pp-100 underline">
                  Strides
                </span>
              </h1>
              <div className="flex justify-center my-8">
                <button className="mx-auto p-3 px-5 bg-white text-gray-400 rounded-md font-roboto hover:bg-pp-100 hover:text-white transition-all hover:scale-105">
                  Explore Your Move
                </button>
              </div>
            </div>
            <div className="flex w-full h-full bg-gradient-to-t from-pp-50">
              <img
                src="./src/assets/photo_6.jpg"
                className="w-screen h-[400px] object-cover -z-10"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <CategoryBar />

      {/* Section Atas */}
      <div className="flex flex-row w-[100dvw] h-full justify-center mt-8">
        <div className="grid grid-cols-3 w-[1250px] h-full gap-x-4 mb-20">
          {/* First Grid Card */}
          <div className="grid row-span-1">
            <div className="grid duration-300 rounded-md w-full h-full bg-clip-content overflow-hidden group transition-all hover:shadow-2xl">
              <div className="group flex h-full w-full bg-gradient-to-t from-pp-50 transition-all duration-500">
                {/* --- Inside Card */}
                <div className="absolute">
                  <div className="flex flex-col justify-between items-start relative w-[200px] h-[650px] px-4 py-6">
                    <div className="flex flex-col w-[350px] gap-y-2">
                      <h1 className="flex text-white text-3xl font-raleway-500">
                        Skin Health
                      </h1>
                      <span className="font-roboto font-extralight text-white text-[15px]">
                        Serving as a protective barrier and reflecting internal
                        balance.
                      </span>
                    </div>
                    <div className="flex flex-row">
                      {/* {console.log(movement[0].name)} */}
                      <button
                        onClick={(id) => submitMovement(movement[0].id)}
                        className="p-1 px-5 mr-2 bg-pp-150 text-white rounded-md font-roboto hover:bg-pp-100 hover:text-white transition-all hover:scale-105"
                      >
                        I'm In
                      </button>

                      <span class="material-symbols-outlined text-white text-4xl">
                        arrow_forward
                      </span>
                    </div>
                  </div>
                </div>
                <img
                  src="./src/assets/photo_1.jpg"
                  className="group-hover:scale-105 object-cover brightness-80 transform transition-transform duration-300 -z-10"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* Second Grid Card */}
          <div className="grid gap-y-4">
            {/* -- In Card */}
            <div className="group flex transition-all duration-300 rounded-md w-full h-full bg-clip-content overflow-hidden group bg-gradient-to-t from-pp-50 items-end hover:shadow-2xl">
              <div className="absolute">
                <div className="flex flex-col justify-between items-start relative w-[200px] h-[320px] px-4 py-6">
                  <div className="flex flex-col w-[350px] gap-y-2">
                    <h1 className="flex text-white text-3xl font-raleway-500">
                      Weight Management
                    </h1>
                    <span className="font-roboto font-extralight text-white text-[15px]">
                      Maintaining a balance between calorie intake, physical
                      activity.
                    </span>
                  </div>
                  <div className="flex flex-row">
                    <button
                      onClick={(id) => submitMovement(movement[1].id)}
                      className="p-1 px-5 mr-2 bg-pp-150 text-white rounded-md font-roboto hover:bg-pp-100 hover:text-white transition-all hover:scale-105"
                    >
                      I'm In
                    </button>

                    <span class="material-symbols-outlined text-white text-4xl">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
              <img
                src="./src/assets/photo_2.jpg"
                className="object-cover h-[320px] rounded-lg brightness-65 group-hover:scale-105 transform transition-transform duration-300 -z-10"
              />
            </div>
            {/* -- In Card */}
            <div className="group grid transition-all duration-300 rounded-md w-full h-full bg-clip-content overflow-hidden group bg-gradient-to-t from-pp-50 items-end hover:shadow-2xl">
              <div className="absolute">
                <div className="flex flex-col justify-between items-start relative w-[200px] h-[320px] px-4 py-6">
                  <div className="flex flex-col w-[350px] gap-y-2">
                    <h1 className="flex text-white text-3xl font-raleway-500">
                      Blood Sugar Control
                    </h1>
                    <span className="font-roboto font-extralight text-white text-[15px]">
                      The regulation of glucose levels in the bloodstream,
                      crucial for overall health.
                    </span>
                  </div>
                  <div className="flex flex-row">
                    <button
                      onClick={(id) => submitMovement(movement[3].id)}
                      className="p-1 px-5 mr-2 bg-pp-150 text-white rounded-md font-roboto hover:bg-pp-100 hover:text-white transition-all hover:scale-105"
                    >
                      I'm In
                    </button>

                    <span class="material-symbols-outlined text-white text-4xl">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
              <img
                src="./src/assets/photo_3.jpg"
                className="object-cover h-[320px] rounded-lg brightness-80 group-hover:scale-105 transform transition-transform duration-300 -z-10"
              />
            </div>
          </div>

          {/* Third Grid Card */}
          <div className="grid gap-y-4">
            {/* -- In Card */}
            <div className="group grid transition-all duration-300 hover:shadow-2xl rounded-md w-full h-full bg-clip-content overflow-hidden group bg-gradient-to-t from-pp-50 items-center justify-center">
              <div className="absolute">
                <div className="flex flex-col justify-between items-start relative w-[200px] h-[320px] px-4 py-6">
                  <div className="flex flex-col w-[350px] gap-y-2">
                    <h1 className="flex text-white text-3xl font-raleway-500">
                      Hydrations
                    </h1>
                    <span className="font-roboto font-extralight text-white text-[15px]">
                      Essential for optimal health, supporting bodily functions,
                      and regulating temperature,
                    </span>
                  </div>
                  <div className="flex flex-row">
                    <button
                      onClick={(id) => submitMovement(movement[2].id)}
                      className="p-1 px-5 mr-2 bg-pp-150 text-white rounded-md font-roboto hover:bg-pp-100 hover:text-white transition-all hover:scale-105"
                    >
                      I'm In
                    </button>

                    <span class="material-symbols-outlined text-white text-4xl">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
              <img
                src="./src/assets/photo_4.jpg"
                className="object-cover rounded-lg brightness-80 group-hover:scale-105 transform transition-transform duration-300 h-[320px] w-[420px] -z-10"
              />
            </div>
            {/* -- In Card */}
            <div className="group grid hover:shadow-2xl rounded-md w-full h-full bg-clip-content overflow-hidden group bg-gradient-to-t from-pp-50 transition-all duration-300">
              <div className="absolute">
                <div className="flex flex-col justify-between items-start relative w-[200px] h-[320px] px-4 py-6">
                  <div className="flex flex-col w-[350px] gap-y-2">
                    <h1 className="flex text-white text-3xl font-raleway-500">
                      FitFlex Routine
                    </h1>
                    <span className="font-roboto font-extralight text-white text-[15px]">
                      Structured regimen of physical activities designed to
                      enhance fitness, health, and well-being.
                    </span>
                  </div>
                  <div className="flex flex-row">
                    <button
                      onClick={(id) => submitMovement(movement[4].id)}
                      className="p-1 px-5 mr-2 bg-pp-150 text-white rounded-md font-roboto hover:bg-pp-100 hover:text-white transition-all hover:scale-105"
                    >
                      I'm In
                    </button>

                    <span class="material-symbols-outlined text-white text-4xl">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
              <img
                src="./src/assets/photo_5.jpg"
                className="object-cover rounded-lg brightness-80 group-hover:scale-105 transform transition-transform duration-300 h-[320px] -z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
