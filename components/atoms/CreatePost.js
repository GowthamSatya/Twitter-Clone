import React from "react";
import {
  PhotographIcon,
  VideoCameraIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  CalendarIcon,
  LocationMarkerIcon,
} from "@heroicons/react/outline";
import Profile from "../../assets/profile.png";
import Image from "next/image";

const CreatePost = () => {
  return (
    <div className="flex flex-col px-4 border-b border-gray-500">
      <div className="flex my-4 items-center">
        <Image
          src={Profile}
          width={55}
          height={55}
          alt="proflePic"
          className="rounded-full"
        />
        <textarea
          type="textarea"
          className="flex placeholder:pt-4 active:placeholder:pt-0 focus:placeholder:pt-0 text-xl w-full font-400  bg-transparent border-0 outline-none active:border-0 focus:border-0 text-[#bfc0b8] ml-4"
          placeholder={`What's happening?`}
        />
      </div>
      <div className="flex items-center mt-2 mb-4 justify-center ">
        <div className="flex ml-[69px] text-white space-x-4">
          <PhotographIcon className="text-[#31a4f1] w-[26px] stroke-1.5" />
          <VideoCameraIcon className="text-[#31a4f1] w-[26px] stroke-1.5" />
          <ChartBarIcon className="text-[#31a4f1] w-[26px] stroke-1.5" />
          <EmojiHappyIcon className="text-[#31a4f1] w-[26px] stroke-1.5" />
          <CalendarIcon className="text-[#31a4f1] w-[26px] stroke-1.5" />
          <LocationMarkerIcon className="text-[#31a4f1] w-[26px] stroke-1.5" />
        </div>
        <button className="ml-auto bg-[#1b9bf0] text-white rounded-full w-24 h-[44px] text-[18px] font-semibold shadow-md hover:bg-[#1a8cd8]">
          Tweet
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
