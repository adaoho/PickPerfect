import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FruitContenxt } from "../context";

const Card = ({ index, name, price, image }) => {
  const navigate = useNavigate();
  const { currencyFormatted } = useContext(FruitContenxt);
  return (
    <>
      <div className="flex h-[304px] w-[300px] group relative transition-all duration-300 rounded-md bg-clip-content overflow-hidden group items-end hover:shadow-2xl">
        <div className="absolute top-0 right-0">
          <Link to={`/fruit/${index}`}>
            <span class="material-symbols-outlined rounded-bl-xl p-2 bg-gray-500 text-white hover:bg-pp-100 transition-all">
              info
            </span>
          </Link>
          <span class="material-symbols-outlined p-2 bg-pp-150 text-white hover:bg-pp-100 transition-all">
            add_shopping_cart
          </span>
        </div>

        <div className="absolute bottom-0 bg-pp-50 w-full p-3 items-center transition-all">
          <div className="flex flex-row w-full justify-between">
            <h1 className="text-white font-roboto">{name}</h1>
            <h1 className="text-white font-roboto">
              {currencyFormatted(price)}
            </h1>
          </div>
        </div>
        <img
          src={image}
          className="flex w-full object-cover h-[320px] group-hover:scale-105 rounded-lg brightness-65 transform transition-transform duration-300 -z-10"
        />
      </div>
    </>
  );
};

export default Card;
