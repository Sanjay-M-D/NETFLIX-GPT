import React from "react";

const VedioTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video absolute pt-[15%] px-20  text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className=" px-10 p-3 bg-white text-black uppercase rounded-full  hover:bg-red-400 hover:text-white ">
          Play
        </button>

        <button className=" m-3 px-8 p-3  bg-white text-black uppercase rounded-full hover:bg-neutral-700 hover:text-white">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VedioTitle;
