import Checkout from "../components/Checkout";

const DetailFruit = () => {
  return (
    <>
      <div className="mt-20 grid grid-cols-2 w-[100dvw] h-[700px]">
        <div className="flex bg-red-500 w-full h-full justify-center items-center">
          This is First Grid
        </div>
        <div className="flex bg-blue-500 w-full h-full justify-center items-center">
          This is First Grid
        </div>
      </div>

      {/*  */}
      <div className="flex relative flex-col w-[100dvw] items-center">
        <div className="flex flex-col transition-all mb-8">
          <div className="flex flex-row w-[1200px]">
            <img
              src="https://source.unsplash.com/random/900x700/?Apple"
              className="rounded-xl w-full h-[432px] object-cover"
            />
            <Checkout />
          </div>

          {/* <!-- Left Component --> */}
          <div className="flex flex-col bg-white gap-y-2 text-black w-[600px]">
            <div className="max-w-2xl space-y-12 mb-20">
              <article className="space-y-2 text-gray-900">
                <div className="space-y-6">
                  <h1 className="text-4xl font-bold md:tracki md:text-5xl">
                    File Name
                  </h1>
                  <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-400">
                    <div className="flex items-center md:space-x-2">
                      <p className="text-sm">Leroy Jenkins • July 19th, 2021</p>
                    </div>
                    <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
                      4 min read • 1,570 views
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailFruit;
