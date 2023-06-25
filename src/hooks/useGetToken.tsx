import { useState, useEffect } from "react";
import { CallApiGetToken } from "../api/CallApi";

const useGetToken = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const getToken = async () => {
      const response = await CallApiGetToken();
      setToken(response);
    };
    getToken();
  }, []);

  return token;
};

export default useGetToken;