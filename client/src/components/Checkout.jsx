import { useEffect, useState } from "react";

const Checkout = ({ fruitDetail, fetchDetailFruit }) => {
  const getId = localStorage.getItem("user_id");
  const currencyFormatted = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(number);
  };

  console.log(fruitDetail, "<<< this is fruitDetail");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(fruitDetail.price);
  const [total, setTotal] = useState(0);
  const [formPurchase, setFormPurchase] = useState({
    name: fruitDetail.name,
    quantity: 0,
    price: fruitDetail.price,
    total: total,
    UserId: getId,
    status: false,
  });

  const plusQty = () => {
    setQuantity(quantity + 1);
    setTotal(quantity * fruitDetail.price);
    setFormPurchase({
      ...formPurchase,
      quantity,
      total,
    });
  };

  const minusQty = () => {
    setQuantity(quantity - 1);
  };

  useEffect(() => {}, [quantity]);

  console.log(formPurchase, "<<<< form purchase");

  return (
    <>
      {/* {console.log(fruitDetail, "<<< from checkout")} */}
      {/* <!-- Right Component --> */}
      <div className="flex flex-col items-center w-full mx-auto">
        <div className="flex flex-col w-3/4 p-6 space-y-4 divide-y divide-gray-700 bg-white border text-gray-900 sticky top-28 rounded-md shadow-xl">
          <h2 className="text-2xl font-semibold">Nutrions Fact</h2>
          <ul className="flex flex-col pt-4 space-y-2">
            <li className="flex items-start justify-between">
              <h3>Calories</h3>
              <div className="text-right">
                <span className="block">{fruitDetail.calories}</span>
                <span className="text-sm dark:text-gray-400">calories</span>
              </div>
            </li>
            <li className="flex items-start justify-between">
              <h3>Fat</h3>
              <div className="text-right">
                <span className="block">{fruitDetail.fat}</span>
                <span className="text-sm dark:text-gray-400">Kkal</span>
              </div>
            </li>
            <li className="flex items-start justify-between">
              <h3>Sugar</h3>
              <div className="text-right">
                <span className="block">{fruitDetail.sugar}</span>
                <span className="text-sm dark:text-gray-400">gram</span>
              </div>
            </li>
            <li className="flex items-start justify-between">
              <h3>Carbohydrates</h3>
              <div className="text-right">
                <span className="block">{fruitDetail.carbohydrates}</span>
                <span className="text-sm dark:text-gray-400">gram</span>
              </div>
            </li>
            <li className="flex items-start justify-between">
              <h3>Protein</h3>
              <div className="text-right">
                <span className="block">{fruitDetail.protein}</span>
                <span className="text-sm dark:text-gray-400">gram</span>
              </div>
            </li>
          </ul>

          {/* New List */}
          <ul className="flex flex-col pt-4 space-y-2">
            <li className="flex items-start justify-between">
              <h3>Price</h3>
              <div className="text-right">
                <span className="block">
                  {currencyFormatted(fruitDetail.price)}
                </span>
                <span className="text-sm dark:text-gray-400">/kilogram</span>
              </div>
            </li>
            <li className="flex items-start justify-between">
              <h3>Quantity</h3>
              <div className="text-right">
                <div className="flex flex-row space-x-4 items-center justify-center">
                  {quantity > 0 && (
                    <button
                      onClick={() => minusQty()}
                      class="font-bold material-symbols-outlined p-1 text-[10px] outline-none h-[18px] rounded-full outline-pp-50 hover:text-white hover:bg-pp-100 hover:outline-pp-100 transition-all active:scale-75"
                    >
                      remove
                    </button>
                  )}
                  <span className="block">{quantity}</span>
                  <button
                    onClick={() => plusQty()}
                    class="font-bold material-symbols-outlined p-1 text-[10px] outline-none h-[18px] rounded-full outline-pp-50 hover:text-white hover:bg-pp-100 hover:outline-pp-100 transition-all active:scale-75"
                  >
                    add
                  </button>
                </div>
              </div>
            </li>
          </ul>

          <div className="pt-4 space-y-2">
            <div className="space-y-6">
              <div className="flex justify-between">
                <span>Total</span>
                <span className="font-semibold">
                  {currencyFormatted(fruitDetail.price * quantity)}
                </span>
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
