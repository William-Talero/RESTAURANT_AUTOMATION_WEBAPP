'use client';
import { useState, useEffect } from "react";
import { CallApiGetToken } from "../api/CallAPI";

const useGetToken = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const getToken = async () => {
      const response = await CallApiGetToken();
      setToken(response.token);
    };
    getToken();
  }, []);

  return token;
};

export default useGetToken;
