"use client";
import axios from "axios";
// https://newsapi.org/v2/everything?q=india&from=2023-09-18&to=2023-09-18&sortBy=popularity
const axiosClint = axios.create({
  headers: {
    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
  },
});

export const getPrm = () => {
  return {
    params: {
      apiKey: "728bba572bfe4795885286b5f1d45b85",
    },
  };
};

export const getReq = async (URL: string) => {
  const res = await axiosClint.get(URL, getPrm());
  return await res?.data?.articles;
};

export const getCuntry = async (URL: string) => {
  const res = await axiosClint.get(URL);
  return res?.data;
};
