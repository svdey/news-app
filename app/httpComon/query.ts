"use client";
import {useQuery} from "react-query";
import {getCuntry, getReq} from "./axiosClint";

export const useNewsApi = (
  q: string = "usa",
  from: Date = new Date(),
  to: Date = new Date(),
  sortBy: string = "popularity"
) => {
  return useQuery({
    queryKey: ["data", q],
    queryFn: () =>
      getReq(
        "https://newsapi.org/v2/everything?" +
          "q=" +
          q +
          "&from=" +
          from +
          "&to=" +
          to +
          "&sortBy=" +
          sortBy
      ),
  });
};
export const useCountries = () => {
  return useQuery({
    queryKey: ["restcountries"],
    queryFn: () =>
      getCuntry("https://restcountries.com/v3.1/all?fields=name,flags"),
  });
};
