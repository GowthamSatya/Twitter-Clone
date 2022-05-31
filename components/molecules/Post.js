import React from "react";
import Image from "next/image";
import Profile from "../../assets/profile.png";
import { ChatAlt2Icon } from "@heroicons/react/solid";

const Post = () => {
  return (
    <div className="flex flex-col border-b border-gray-500 p-3">
      <div className="flex ml-6 text-gray-700">
        <ChatAlt2Icon className=" w-5" />
        <span className="font-semibold ml-3">Topics</span>
      </div>
      <div className="flex my-4">
        <div className="w-[200px]">
          <Image
            className="rounded-full"
            src={Profile}
            width={47}
            height={47}
            alt="Profile"
          />
        </div>
        <div className="flex flex-col text-white items-start justify-center">
          <div className="flex items-center">
            <span className="font-semibold">Names</span>
            <span className="text-[#6e6769] ml-2">@iamyourbrain</span>
            <span className="text-[#6e6769] font-bold mb-[5px] mx-1">.</span>
            <span className="text-[#6e6769]">11h</span>
          </div>
          <div className="flex items-center">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, quisquam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptatum, quisquam. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Voluptatum, quisquam. Voluptatum,
              quisquam. Voluptatum, quisquam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
