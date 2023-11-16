const Checkout = () => {
  return (
    <>
      {/* <!-- Right Component --> */}
      <div className="flex flex-col items-center w-[700px] mx-auto">
        <div className="flex flex-col w-3/4 p-6 space-y-4 divide-y divide-gray-700 bg-white border text-gray-900 sticky top-28 rounded-md shadow-xl">
          <h2 className="text-2xl font-semibold">Nutrions Fact</h2>
          <ul className="flex flex-col pt-4 space-y-2">
            <li className="flex items-start justify-between">
              <h3>Calories</h3>
              <div className="text-right">
                <span className="block">29</span>
                <span className="text-sm dark:text-gray-400">calories</span>
              </div>
            </li>
            <li className="flex items-start justify-between">
              <h3>Fat</h3>
              <div className="text-right">
                <span className="block">0.4</span>
                <span className="text-sm dark:text-gray-400">Kkal</span>
              </div>
            </li>
            <li className="flex items-start justify-between">
              <h3>Sugar</h3>
              <div className="text-right">
                <span className="block">5.4</span>
                <span className="text-sm dark:text-gray-400">gram</span>
              </div>
            </li>
            <li className="flex items-start justify-between">
              <h3>Carbohydrates</h3>
              <div className="text-right">
                <span className="block">5.5</span>
                <span className="text-sm dark:text-gray-400">gram</span>
              </div>
            </li>
            <li className="flex items-start justify-between">
              <h3>Protein</h3>
              <div className="text-right">
                <span className="block">0.8</span>
                <span className="text-sm dark:text-gray-400">gram</span>
              </div>
            </li>
          </ul>

          {/* New List */}
          <ul className="flex flex-col pt-4 space-y-2">
            <li className="flex items-start justify-between">
              <h3>Price</h3>
              <div className="text-right">
                <span className="block">Rp 10.000</span>
                <span className="text-sm dark:text-gray-400">/kilogram</span>
              </div>
            </li>
            <li className="flex items-start justify-between">
              <h3>Quantity</h3>
              <div className="text-right">
                <div className="flex flex-row space-x-4 items-center justify-center">
                  <span class="font-bold material-symbols-outlined p-1 text-[10px] outline-none h-[18px] rounded-full outline-pp-50 hover:text-white hover:bg-pp-100 hover:outline-pp-100 transition-all active:scale-75">
                    remove
                  </span>
                  <span className="block">0</span>
                  <span class="font-bold material-symbols-outlined p-1 text-[10px] outline-none h-[18px] rounded-full outline-pp-50 hover:text-white hover:bg-pp-100 hover:outline-pp-100 transition-all active:scale-75">
                    add
                  </span>
                </div>
                <span className="text-sm dark:text-gray-400">Rp 2.75</span>
              </div>
            </li>
          </ul>

          <div className="pt-4 space-y-2">
            <div className="space-y-6">
              <div className="flex justify-between">
                <span>Total</span>
                <span className="font-semibold">Rp. 25.000</span>
              </div>
              <button
                type="button"
                className="block w-full p-3 text-center rounded-md bg-pp-50 text-white font-bold hover:bg-pp-100 transition-all hover:scale-105 active:scale-90 hover:text-gray-100"
              >
                Go to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
