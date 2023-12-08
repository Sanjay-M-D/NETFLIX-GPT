import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video absolute  pt-[17%] md:pt-[13%] px-10 md:px-20  text-white bg-gradient-to-r from-black">
      <h1 className=" text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="my-4 md:m-0">
        <button className="py-1 md:py-3  md:px-10 p-3 bg-white text-black uppercase rounded-full  hover:bg-red-400 hover:text-white ">
          Play
        </button>

        <button className="hidden md:inline-block m-3 px-8 p-3  bg-white text-black uppercase rounded-full hover:bg-neutral-700 hover:text-white">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
