import { useContext, useEffect } from "react";
import { FruitMovContext, MovementContext } from "../context";
import { reauthenticateWithRedirect } from "firebase/auth";
import pickPerfectApi from "../config";
import { redirect, useNavigate } from "react-router-dom";

const MovementPage = () => {
  const currencyFormatted = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(number);
  };

  const navigate = useNavigate();
  const getId = localStorage.getItem("user_id");
  const getName = localStorage.getItem("fullname").split(" ")[0];
  const getToken = localStorage.getItem("access_token");
  const { fruitMov, setFruitMov, fetchFruitMov } = useContext(FruitMovContext);
  // const { fetchMovementProvider, movement } = useContext(MovementContext);

  const leaveMovement = async (id) => {
    try {
      const response = await pickPerfectApi.delete(`/fruitmov/${id}`, {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      });

      Toastify({
        text: `Success Leave Movement!`,
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

      fetchFruitMov();
      // navigate(`/movement/${getId}`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("change from fruitMov");
  }, [fruitMov]);

  const goToDetails = async (id) => {
    navigate(`/fruit/${id}`);
  };

  return (
    <>
      {/* Section Atas */}

      <div className="flex flex-row w-screen h-full justify-center mt-20">
        <div className="flex flex-row w-screen h-[400px] justify-center">
          {/* First Grid Card */}
          <div className="flex justify-center items-center flex-row">
            <div className="absolute">
              <h1 className="text-white text-7xl font-bold font-raleway">
                Every Move,{" "}
                <span className="font-serif text-pp-100 underline">
                  Matters
                </span>
              </h1>
              <div className="flex justify-center my-4">
                <p className="text-white font-roboto">
                  This is your chosen move, {getName}
                </p>
              </div>
            </div>
            <div className="flex w-full h-full bg-gradient-to-t from-pp-50">
              <img
                src="../src/assets/photo_7.jpg"
                className="w-screen h-[400px] object-cover -z-10"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section Bawah */}
      <section id="card-movement" className="mt-10 space-y-10 mb-20">
        {fruitMov.length === 0 && (
          <div className="flex justify-center">
            <h1 className="font-robot text-2xl underline">
              You Don't Have any Movement Yet
            </h1>
          </div>
        )}

        {fruitMov.length > 0 && (
          <div className="flex flex-row w-[100dvw] h-[390px] justify-center items-center px-4">
            {/* -- In Card */}
            {fruitMov.map((element) => (
              <div
                key={"fruitMov" + element.id}
                className="flex flex-row w-[1300px] gap-x-5"
              >
                {/* Card Movement */}
                <div className="relative flex row-span-2 transition-all duration-300 rounded-md w-8/12 h-[395px] bg-clip-content overflow-hidden group bg-gradient-to-t from-pp-50 items-end hover:shadow-2xl">
                  <div className="absolute top-0 m-10">
                    <p className="text-white font-bold font-raleway text-5xl mb-2">
                      {element.Movement.name}
                    </p>
                    <span className="font-roboto font-extralight text-white text-[15px]">
                      {element.Movement.description}
                    </span>
                  </div>

                  <div className="absolute bottom-0-0 m-10">
                    <button
                      onClick={(id) => leaveMovement(element.Movement.id)}
                      className="flex items-center gap-x-2 p-2 px-5 mr-2 bg-pp-50 text-white rounded-md font-roboto hover:bg-pp-100 hover:text-white transition-all hover:scale-105"
                    >
                      <span class="material-symbols-outlined">move_item</span>
                      Leave The Movement
                    </button>
                  </div>
                  <img
                    src={element.Movement.imageUrl}
                    className="flex w-full object-cover h-full rounded-lg brightness-65 group-hover:scale-105 transform transition-transform duration-300 -z-10"
                  />
                </div>
                {/* {console.log(element.Movement.Fruits[0]?.name, "<<< this is it")} */}
                {/* Card Fruit */}
                <div className="flex flex-col w-4/12 gap-y-4">
                  <div className="flex flex-row h-[190px] gap-x-4 overflow-hidden bg-clip-content">
                    {/* --- Card Fruit Section 1 */}
                    <div className="group relative flex transition-all hover:bg-pp-100/20 duration-300 rounded-md bg-clip-content overflow-hidden group items-end hover:shadow-2xl">
                      <div className="absolute top-0 right-0">
                        <button
                          onClick={() =>
                            goToDetails(element.Movement.Fruits[0]?.id)
                          }
                        >
                          <span class="material-symbols-outlined rounded-bl-xl p-2 bg-gray-500 text-white hover:bg-pp-100 transition-all">
                            info
                          </span>
                        </button>
                        <span class="material-symbols-outlined p-2 bg-pp-150 text-white hover:bg-pp-100 transition-all">
                          add_shopping_cart
                        </span>
                      </div>

                      <div className="absolute bottom-0 bg-pp-50 w-full p-3 items-center transition-all">
                        <div className="flex flex-row w-full justify-between">
                          <h1 className="text-white font-roboto">
                            {element.Movement.Fruits[0]?.name}
                          </h1>
                          <h1 className="text-white font-roboto">
                            {currencyFormatted(
                              element.Movement.Fruits[0]?.price
                            )}
                          </h1>
                        </div>
                      </div>
                      <img
                        src={element.Movement.Fruits[0]?.imageUrl}
                        className="flex w-full object-cover h-[320px] group-hover:scale-105 rounded-lg brightness-65 transform transition-transform duration-300 -z-10"
                      />
                    </div>

                    {/* --- Card Fruit 1 */}
                    <div className="group relative flex transition-all hover:bg-pp-100/20 duration-300 rounded-md bg-clip-content overflow-hidden group items-end hover:shadow-2xl">
                      <div className="absolute top-0 right-0">
                        <button
                          onClick={() =>
                            goToDetails(element.Movement.Fruits[1]?.id)
                          }
                        >
                          <span class="material-symbols-outlined rounded-bl-xl p-2 bg-gray-500 text-white hover:bg-pp-100 transition-all">
                            info
                          </span>
                        </button>
                        <span class="material-symbols-outlined p-2 bg-pp-150 text-white hover:bg-pp-100 transition-all">
                          add_shopping_cart
                        </span>
                      </div>

                      <div className="absolute bottom-0 bg-pp-50 w-full p-3 items-center transition-all">
                        <div className="flex flex-row w-full justify-between">
                          <h1 className="text-white font-roboto">
                            {element.Movement.Fruits[1]?.name}
                          </h1>
                          <h1 className="text-white font-roboto">
                            {currencyFormatted(
                              element.Movement.Fruits[1]?.price
                            )}
                          </h1>
                        </div>
                      </div>
                      <img
                        src={element.Movement.Fruits[1]?.imageUrl}
                        className="flex w-full object-cover h-[320px] group-hover:scale-105 rounded-lg brightness-65 transform transition-transform duration-300 -z-10"
                      />
                    </div>
                  </div>

                  <div className="flex flex-row h-[190px] gap-x-4">
                    {/* --- Card Fruit 1 */}
                    <div className="group relative flex transition-all hover:bg-pp-100/20 duration-300 rounded-md bg-clip-content overflow-hidden group items-end hover:shadow-2xl">
                      <div className="absolute top-0 right-0">
                        <button
                          onClick={() =>
                            goToDetails(element.Movement.Fruits[2]?.id)
                          }
                        >
                          <span class="material-symbols-outlined rounded-bl-xl p-2 bg-gray-500 text-white hover:bg-pp-100 transition-all">
                            info
                          </span>
                        </button>
                        <span class="material-symbols-outlined p-2 bg-pp-150 text-white hover:bg-pp-100 transition-all">
                          add_shopping_cart
                        </span>
                      </div>

                      <div className="absolute bottom-0 bg-pp-50 w-full p-3 items-center transition-all">
                        <div className="flex flex-row w-full justify-between">
                          <h1 className="text-white font-roboto">
                            {element.Movement.Fruits[2]?.name}
                          </h1>
                          <h1 className="text-white font-roboto">
                            {currencyFormatted(
                              element.Movement.Fruits[2]?.price
                            )}
                          </h1>
                        </div>
                      </div>
                      <img
                        src={element.Movement.Fruits[2]?.imageUrl}
                        className="flex w-full object-cover h-[320px] group-hover:scale-105 rounded-lg brightness-65 transform transition-transform duration-300 -z-10"
                      />
                    </div>
                    <div className="group relative flex transition-all hover:bg-pp-100/20 duration-300 rounded-md bg-clip-content overflow-hidden group items-end hover:shadow-2xl">
                      <div className="absolute top-0 right-0">
                        <button
                          onClick={() =>
                            goToDetails(element.Movement.Fruits[3]?.id)
                          }
                        >
                          <span class="material-symbols-outlined rounded-bl-xl p-2 bg-gray-500 text-white hover:bg-pp-100 transition-all">
                            info
                          </span>
                        </button>
                        <span class="material-symbols-outlined p-2 bg-pp-150 text-white hover:bg-pp-100 transition-all">
                          add_shopping_cart
                        </span>
                      </div>

                      <div className="absolute bottom-0 bg-pp-50 w-full p-3 items-center transition-all">
                        <div className="flex flex-row w-full justify-between">
                          <h1 className="text-white font-roboto">
                            {element.Movement.Fruits[3]?.name}
                          </h1>
                          <h1 className="text-white font-roboto">
                            {currencyFormatted(
                              element.Movement.Fruits[3]?.price
                            )}
                          </h1>
                        </div>
                      </div>
                      <img
                        src={element.Movement.Fruits[3]?.imageUrl}
                        className="flex w-full object-cover h-[320px] group-hover:scale-105 rounded-lg brightness-65 transform transition-transform duration-300 -z-10"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default MovementPage;
