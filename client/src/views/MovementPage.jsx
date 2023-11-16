const MovementPage = () => {
  const getName = localStorage.getItem("fullname").split(" ")[0];
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
        <div className="flex flex-row w-[100dvw] h-[390px] justify-center items-center px-4">
          {/* -- In Card */}
          <div className="flex flex-row w-[1300px] gap-x-5">
            {/* Card Movement */}
            <div className="relative flex row-span-2 transition-all duration-300 rounded-md w-8/12 h-[395px] bg-clip-content overflow-hidden group bg-gradient-to-t from-pp-50 items-end hover:shadow-2xl">
              <div className="absolute top-0 m-10">
                <p className="text-white font-bold font-raleway text-5xl mb-2">
                  Skin Health
                </p>
                <span className="font-roboto font-extralight text-white text-[15px]">
                  Maintaining a balance between calorie intake, physical
                  activity.
                </span>
              </div>

              <div className="absolute bottom-0-0 m-10">
                <button className="flex items-center gap-x-2 p-2 px-5 mr-2 bg-pp-50 text-white rounded-md font-roboto hover:bg-pp-100 hover:text-white transition-all hover:scale-105">
                  <span class="material-symbols-outlined">move_item</span>
                  Leave The Movement
                </button>
              </div>
              <img
                src="../src/assets/photo_2.jpg"
                className="flex w-full object-cover h-full rounded-lg brightness-65 group-hover:scale-105 transform transition-transform duration-300 -z-10"
              />
            </div>

            {/* Card Fruit */}
            <div className="flex flex-col w-4/12 gap-y-4">
              <div className="flex flex-row h-[190px] gap-x-4 overflow-hidden bg-clip-content">
                {/* --- Card Fruit Section 1 */}
                <div className="group relative flex transition-all duration-300 rounded-md bg-clip-content overflow-hidden group items-end hover:shadow-2xl">
                  <div className="absolute top-0 right-0">
                    <button>
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
                      <h1 className="text-white font-roboto">Apple</h1>
                      <h1 className="text-white font-roboto">Rp. 10.000</h1>
                    </div>
                  </div>
                  <img
                    src="../src/assets/photo_2.jpg"
                    className="flex w-full object-cover h-[320px] group-hover:scale-105 rounded-lg brightness-65 transform transition-transform duration-300 -z-10"
                  />
                </div>

                {/* --- Card Fruit 1 */}
                <div className="group relative flex transition-all hover:bg-pp-100/20 duration-300 rounded-md bg-clip-content overflow-hidden group items-end hover:shadow-2xl">
                  <div className="absolute top-0 right-0">
                    <button>
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
                      <h1 className="text-white font-roboto">Apple</h1>
                      <h1 className="text-white font-roboto">Rp. 10.000</h1>
                    </div>
                  </div>
                  <img
                    src="../src/assets/photo_2.jpg"
                    className="flex w-full object-cover h-[320px] group-hover:scale-105 rounded-lg brightness-65 transform transition-transform duration-300 -z-10"
                  />
                </div>
              </div>

              <div className="flex flex-row h-[190px] gap-x-4">
                {/* --- Card Fruit 1 */}
                <div className="group relative flex transition-all hover:bg-pp-100/20 duration-300 rounded-md bg-clip-content overflow-hidden group items-end hover:shadow-2xl">
                  <div className="absolute top-0 right-0">
                    <button>
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
                      <h1 className="text-white font-roboto">Apple</h1>
                      <h1 className="text-white font-roboto">Rp. 10.000</h1>
                    </div>
                  </div>
                  <img
                    src="../src/assets/photo_2.jpg"
                    className="flex w-full object-cover h-[320px] group-hover:scale-105 rounded-lg brightness-65 transform transition-transform duration-300 -z-10"
                  />
                </div>
                <div className="group relative flex transition-all hover:bg-pp-100/20 duration-300 rounded-md bg-clip-content overflow-hidden group items-end hover:shadow-2xl">
                  <div className="absolute top-0 right-0">
                    <button>
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
                      <h1 className="text-white font-roboto">Apple</h1>
                      <h1 className="text-white font-roboto">Rp. 10.000</h1>
                    </div>
                  </div>
                  <img
                    src="../src/assets/photo_2.jpg"
                    className="flex w-full object-cover h-[320px] group-hover:scale-105 rounded-lg brightness-65 transform transition-transform duration-300 -z-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Repeat Di Sini */}
        <div className="flex flex-row w-[100dvw] h-[390px] justify-center items-center px-4">
          {/* -- In Card */}
          <div className="flex flex-row w-[1300px] gap-x-5">
            {/* Card Movement */}
            <div className="relative flex row-span-2 transition-all duration-300 rounded-md w-8/12 h-[395px] bg-clip-content overflow-hidden group bg-gradient-to-t from-pp-50 items-end hover:shadow-2xl">
              <div className="absolute top-0 m-10">
                <p className="text-white font-bold font-raleway text-5xl mb-2">
                  Skin Health
                </p>
                <span className="font-roboto font-extralight text-white text-[15px]">
                  Maintaining a balance between calorie intake, physical
                  activity.
                </span>
              </div>

              <div className="absolute bottom-0-0 m-10">
                <button className="flex items-center gap-x-2 p-2 px-5 mr-2 bg-pp-50 text-white rounded-md font-roboto hover:bg-pp-100 hover:text-white transition-all hover:scale-105">
                  <span class="material-symbols-outlined">move_item</span>
                  Leave The Movement
                </button>
              </div>
              <img
                src="../src/assets/photo_2.jpg"
                className="flex w-full object-cover h-full rounded-lg brightness-65 group-hover:scale-105 transform transition-transform duration-300 -z-10"
              />
            </div>

            {/* Card Fruit */}
            <div className="flex flex-col w-4/12 gap-y-4">
              <div className="flex flex-row h-[190px] gap-x-4 overflow-hidden bg-clip-content">
                {/* --- Card Fruit Section 1 */}
                <div className="group relative flex transition-all duration-300 rounded-md bg-clip-content overflow-hidden group items-end hover:shadow-2xl">
                  <div className="absolute top-0 right-0">
                    <button>
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
                      <h1 className="text-white font-roboto">Apple</h1>
                      <h1 className="text-white font-roboto">Rp. 10.000</h1>
                    </div>
                  </div>
                  <img
                    src="../src/assets/photo_2.jpg"
                    className="flex w-full object-cover h-[320px] group-hover:scale-105 rounded-lg brightness-65 transform transition-transform duration-300 -z-10"
                  />
                </div>

                {/* --- Card Fruit 1 */}
                <div className="group relative flex transition-all hover:bg-pp-100/20 duration-300 rounded-md bg-clip-content overflow-hidden group items-end hover:shadow-2xl">
                  <div className="absolute top-0 right-0">
                    <button>
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
                      <h1 className="text-white font-roboto">Apple</h1>
                      <h1 className="text-white font-roboto">Rp. 10.000</h1>
                    </div>
                  </div>
                  <img
                    src="../src/assets/photo_2.jpg"
                    className="flex w-full object-cover h-[320px] group-hover:scale-105 rounded-lg brightness-65 transform transition-transform duration-300 -z-10"
                  />
                </div>
              </div>

              <div className="flex flex-row h-[190px] gap-x-4">
                {/* --- Card Fruit 1 */}
                <div className="group relative flex transition-all hover:bg-pp-100/20 duration-300 rounded-md bg-clip-content overflow-hidden group items-end hover:shadow-2xl">
                  <div className="absolute top-0 right-0">
                    <button>
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
                      <h1 className="text-white font-roboto">Apple</h1>
                      <h1 className="text-white font-roboto">Rp. 10.000</h1>
                    </div>
                  </div>
                  <img
                    src="../src/assets/photo_2.jpg"
                    className="flex w-full object-cover h-[320px] group-hover:scale-105 rounded-lg brightness-65 transform transition-transform duration-300 -z-10"
                  />
                </div>
                <div className="group relative flex transition-all hover:bg-pp-100/20 duration-300 rounded-md bg-clip-content overflow-hidden group items-end hover:shadow-2xl">
                  <div className="absolute top-0 right-0">
                    <button>
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
                      <h1 className="text-white font-roboto">Apple</h1>
                      <h1 className="text-white font-roboto">Rp. 10.000</h1>
                    </div>
                  </div>
                  <img
                    src="../src/assets/photo_2.jpg"
                    className="flex w-full object-cover h-[320px] group-hover:scale-105 rounded-lg brightness-65 transform transition-transform duration-300 -z-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MovementPage;
