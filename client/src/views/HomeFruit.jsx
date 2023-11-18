import { useContext, useEffect } from "react";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import { FruitContenxt } from "../context";

const HomeFruit = () => {
  const getName = localStorage.getItem("fullname").split(" ")[0];

  const { fruit, setFruit, fetchFruitProvider } = useContext(FruitContenxt);

  useEffect(() => {
    fetchFruitProvider();
  }, []);

  return (
    <>
      {/* Section Atas */}
      <div className="flex flex-row w-screen h-[200px] justify-center mt-20">
        <div className="flex flex-row w-screen justify-center">
          {/* First Grid Card */}
          <div className="flex justify-center items-center flex-row">
            <div className="absolute">
              <h1 className="text-white text-7xl font-bold font-raleway">
                All Fresh,{" "}
                <span className="font-serif text-pp-100 underline">
                  For You
                </span>
              </h1>
              <div className="flex justify-center my-4">
                <p className="text-white font-roboto">
                  Our fruits catalogue for you, {getName}
                </p>
              </div>
            </div>
            <div className="flex w-full h-full bg-gradient-to-t from-pp-50">
              <img
                src="../src/assets/photo_8.jpg"
                className="w-screen h-full object-cover -z-10"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <SearchBar />

      <div className="flex h-full w-[100dvw] justify-center items-center mt-8 mb-20">
        <div className="grid grid-cols-4 gap-x-6 gap-y-8 justify-center">
          {/* Card 1 Row */}
          {fruit.map((fruit, index) => (
            <Card
              key={fruit.id}
              index={index + 1}
              name={fruit.name}
              price={fruit.price}
              image={fruit.imageUrl}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeFruit;
