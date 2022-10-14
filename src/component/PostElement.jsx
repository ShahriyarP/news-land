import React from "react";
import TimeAgo from "./TimeAgo";
import "./width.css";
import Reaction from "./reaction/Reaction";

const PostElement = ({ item }) => {
  return (
    <>
      <div className="flex items-center justify-center mx-automin-width-50 ma-auto">
        <div className="max-w-screen-sm px-4 py-6 m-4 border shadow-md side min-width-50 text-end rounded-xl border-neutral-200">
          <h2 className="text-lg font-semibold tracking-wider lg:text-xl xl:text-2xl">
            {item.title}
          </h2>
          <br />
          <p className="py-2">{item.description}</p>
          <div>
            <TimeAgo timestamp={item.pubDate} />
            <a href={item.link} target="_blank" rel="noreferrer">
              {" "}
              بیشتر بخوانید
            </a>
            <span className="pl-3">⏰</span>
          </div>
          <Reaction />
        </div>
      </div>
    </>
  );
};

export default PostElement;
