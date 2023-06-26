import { useState, useEffect } from "react";
import { CallApiGetAllProducts } from "../api/CallAPI";
import useGetToken from "./useGetToken";

const useGetAllProducts = () => {
  const [products, setProducts] = useState([]);
  const token = useGetToken();

  useEffect(() => {
    const getProducts = async () => {
      const response = await CallApiGetAllProducts(token);
      setProducts(response.data);
    };

    token && getProducts();
  }, [token]);

  return products;
};

export default useGetAllProducts;
