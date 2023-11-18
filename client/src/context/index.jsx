import pickPerfectApi from "../config";
import { createContext, useState, useEffect } from "react";

export const FruitContenxt = createContext();
export const MovementContext = createContext();
export const FruitMovContext = createContext();

export const FruitProvider = ({ children }) => {
  const [fruit, setFruit] = useState([]);
  const getToken = localStorage.getItem("access_token");

  const currencyFormatted = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(number);
  };

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

  useEffect(() => {
    fetchFruitProvider();
  }, []);

  return (
    <>
      <FruitContenxt.Provider
        value={{ fruit, setFruit, fetchFruitProvider, currencyFormatted }}
      >
        {children}
      </FruitContenxt.Provider>
    </>
  );
};

export const MovementProvider = ({ children }) => {
  const [movement, setMovement] = useState([]);
  const getToken = localStorage.getItem("access_token");

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

  useEffect(() => {
    fetchMovementProvider();
  }, []);

  useEffect(() => {
    // console.log("hopelywatch");
  }, [movement]);

  return (
    <>
      <MovementContext.Provider
        value={{ movement, setMovement, fetchMovementProvider }}
      >
        {children}
      </MovementContext.Provider>
    </>
  );
};

export const FruitMovProvider = ({ children }) => {
  const [fruitMov, setFruitMov] = useState([]);
  const getToken = localStorage.getItem("access_token");

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

  useEffect(() => {
    fetchFruitMov();
  }, []);

  useEffect(() => {
    // console.log("hopelywatch");
  }, [fruitMov]);

  return (
    <>
      <FruitMovContext.Provider
        value={{ fruitMov, setFruitMov, fetchFruitMov }}
      >
        {children}
      </FruitMovContext.Provider>
    </>
  );
};
