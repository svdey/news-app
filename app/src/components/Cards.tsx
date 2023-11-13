/* eslint-disable @next/next/no-img-element */
import React from "react";
import {formatDate} from "../functions/functions";
import {FcCalendar, FcBusinessman} from "react-icons/fc";
import {BsFillArrowRightCircleFill} from "react-icons/bs";

interface card {
  title: string;
  description: string;
  image?: string;
  publishedAt: string;
  url: string;
  author: string;
}

const Cards: React.FC<card> = ({
  title,
  description,
  image,
  publishedAt,
  url,
  author,
}) => {
  const newDate: string = formatDate(new Date(publishedAt));
  return (
    <div className="box-border h-auto w-auto rounded-lg bg-gray-300 hover:bg-white mt-5 ml-5 mr-5 p-5 relative hover:z-30">
      {/* <div className="absolute inset-0 bg-black opacity-25 z-10 hover:opacity-0  rounded-lg"></div> */}

      <img
        src={image || "https://source.unsplash.com/random/200x200?sig=1"}
        alt="thumbnel"
        width="100%"
        className="rounded-t-md h-40"
      />
      <div className="pl-5 text-gray-400 flex justify-between pt-2">
        <div className="flex justify-between items-center">
          <FcCalendar /> <span className="pl-2">{newDate}</span>
        </div>
      </div>
      <div className="font-semibold text-sky-500 text-l pl-2 overflow-hidden h-12">
        {title}
      </div>
      <div className="p-2 text-gray-500 text-sm overflow-hidden h-20">
        {description}
      </div>
      <hr />
      <div className=" flex justify-between items-center">
        <div className="p-3 flex justify-between items-center text-sm text-gray-500 w-96">
          <FcBusinessman />{" "}
          <span className="pl-3 overflow-hidden w-40 h-5">{author}</span>
          {/* <div> */}
          <a
            href={url}
            className="bg-sky-500 h-8 w-28 rounded-md items-center flex text-white justify-between pl-2 pr-2"
            target="_blank"
          >
            Read more <BsFillArrowRightCircleFill />
          </a>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Cards;
