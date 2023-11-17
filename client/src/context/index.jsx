import pickPerfectApi from "../config";
import { createContext, useState, useEffect } from "react";

export const FruitContenxt = createContext();
export const MovementContext = createContext();
export const FruitMovContext = createContext();

const getToken = localStorage.getItem("access_token");

export const FruitProvider = ({ children }) => {
  const [fruit, setFruit] = useState([]);

  useEffect(() => {
    const fetchFruitProvider = async () => {
      try {
        const { data } = await pickPerfectApi.get("/fruit/", {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        });

        // console.log(data, "<<< from fetch");
        setFruit(data.getFruit);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFruitProvider();
  }, []);

  return (
    <>
      <FruitContenxt.Provider value={{ fruit, setFruit }}>
        {children}
      </FruitContenxt.Provider>
    </>
  );
};

export const MovementProvider = ({ children }) => {
  const [movement, setMovement] = useState([]);

  useEffect(() => {
    const fetchMovementProvider = async () => {
      try {
        const { data } = await pickPerfectApi.get("/movement/", {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        });

        // console.log(data, "<<< from fetch");
        setMovement(data.getMovement);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovementProvider();
  }, []);

  useEffect(() => {
    // console.log("hopelywatch");
  }, [movement]);

  return (
    <>
      <MovementContext.Provider value={{ movement, setMovement }}>
        {children}
      </MovementContext.Provider>
    </>
  );
};

export const FruitMovProvider = ({ children }) => {
  const [fruitMov, setFruitMov] = useState([]);

  useEffect(() => {
    const fetchFruitMov = async () => {
      try {
        const { data } = await pickPerfectApi.get(`/fruitmov/`, {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        });

        // console.log(data, "<<< from fetch");
        setFruitMov(data.getFruitMovData);
      } catch (error) {
        console.log(error, "<<< from fetch");
      }
    };
    fetchFruitMov();
  }, []);

  useEffect(() => {
    // console.log("hopelywatch");
  }, [fruitMov]);

  return (
    <>
      <FruitMovContext.Provider value={{ fruitMov, setFruitMov }}>
        {children}
      </FruitMovContext.Provider>
    </>
  );
};
