import { useNavigate, useParams } from "react-router-dom";
import Checkout from "../components/Checkout";
import pickPerfectApi from "../config";
import { useEffect, useState } from "react";

const DetailFruit = () => {
  const navigate = useNavigate();
  const getId = localStorage.getItem("user_id");
  const getName = localStorage.getItem("fullname").split(" ")[0];
  const getToken = localStorage.getItem("access_token");
  const [fruitDetail, setFruitDetail] = useState([]);

  const { id } = useParams();

  const fetchDetailFruit = async () => {
    try {
      const { data } = await pickPerfectApi.get(`/fruit/${id}`, {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      });
      setFruitDetail(data.getFruitDetail);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDetailFruit();
  }, []);

  return (
    <>
      {console.log(fruitDetail)}
      <div className="mt-24 flex flex-row w-[100dvw] h-[720px] px-20 justify-center items-start">
        {/* Grid Left */}
        <div className="flex flex-col w-[700px] h-[500px] justify-center items-start">
          <img
            src={fruitDetail.imageUrl}
            className="rounded-xl w-full h-full object-cover"
          />
          <article className="flex space-y-2 text-gray-900 mt-4">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold md:tracki md:text-5xl">
                {fruitDetail.name}
              </h1>
              <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-400">
                <div className="flex items-start md:space-x-3">
                  <span class="material-symbols-outlined">grocery</span>
                  <p className="text-lg w-[600px]">
                    The {fruitDetail.name} is one of the pome (fleshy) fruits.{" "}
                    {fruitDetail.name}s at harvest vary widely in size, shape,
                    colour, and acidity, but most are fairly round and some
                    shade of red or yellow. The thousands of varieties fall into
                    three broad classes: cider, cooking, and dessert varieties.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
        {/* Grid Right */}
        <div className="flex w-[400px] h-full justify-center items-start">
          <Checkout
            fruitDetail={fruitDetail}
            fetchDetailFruit={fetchDetailFruit}
          />
        </div>
      </div>
    </>
  );
};

export default DetailFruit;
