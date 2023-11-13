/* eslint-disable @next/next/no-img-element */
"use client";
import {useCountries, useNewsApi} from "./httpComon/query";
import Cards from "./src/components/Cards";
import {QueryClient, QueryClientProvider} from "react-query";
import React from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import {DateRangePicker} from "react-date-range";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <Temp />
    </QueryClientProvider>
  );
}

interface card {
  title: string;
  description: string;
  urlToImage?: string;
  publishedAt: string;
  url: string;
  author: string;
}

interface name {
  flags: {
    svg: string;
  };
  name: {
    common: string;
  };
}

interface selection {
  selection: {
    startDate: Date;
    endDate: Date;
    key: string;
  };
}
const Temp: React.FC = () => {
  const [cuntry, setCuntry] = React.useState("India");
  const [dateRangePicker, setDateRangePicker] = React.useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const {data: temp} = useNewsApi(
    cuntry,
    dateRangePicker.startDate,
    dateRangePicker.endDate
  );
  const {data: restcountries} = useCountries();

  return (
    <main className="relative p-1 overflow-hidden h-screen w-screen bg-[url('./assets/back-ground.jpg')] bg-cover flex-col">
      <div className=" absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20  ">
        <div>
          <select
            id="countries"
            value={cuntry}
            className="bg-gray-50 border h-10  custom-scrollbar border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => setCuntry(e.target.value)}
          >
            {restcountries?.map((ele: name, i: number) => (
              <option value={ele?.name?.common} key={i}>
                {ele?.name?.common}
              </option>
            ))}
          </select>
          {/* <DateRangePicker
            onChange={(ele: selection) => setDateRangePicker(ele?.selection)}
            ranges={[dateRangePicker]}
          /> */}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 custom-scrollbar  gap-2 overflow-auto  h-screen w-screen scroll-smooth">
          {temp?.map((data: card, index: number) => (
            <Cards
              key={index}
              title={data.title}
              description={data.description}
              image={data.urlToImage}
              publishedAt={data.publishedAt}
              url={data.url}
              author={data.author}
            />
          ))}
        </div>
      </div>
    </main>
  );
};
