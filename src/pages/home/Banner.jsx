import React from "react";
import Container from "../../components/Container";
import img from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="bg-indigo-700 w-full h-[450px] text-white py-16">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-8 sm:space-y-0 sm:space-x-8">
          <div className="flex flex-col space-y-4 max-w-xl">
            <h3 className="text-xl font-semibold">Our latest course:</h3>
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
              Video Editing and Storytelling
            </h1>
            <p className="text-lg sm:text-xl text-gray-300">
              Learn the art of visual storytelling with our expert-led video
              editing course.
            </p>
            <button className="bg-rose-500 w-2/4  p-1 hover:bg-rose-600 text-white font-semibold  rounded-md mt-6 transition duration-300">
              Enroll Now
            </button>
          </div>
          <div className="flex-shrink-0">
            <img
              src={img}
              alt="Video Editing and Storytelling"
              className="w-full h-auto rounded-lg  transform transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
