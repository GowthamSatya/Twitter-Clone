import { SparklesIcon } from "@heroicons/react/outline";
import CreatePost from "./molecules/CreatePost";
import Post from "./molecules/Post";
import React from "react";

const Feed = () => {
  return (
    <div className="text-white flex-1 border-l border-gray-500 max-w-3xl sm:max-w-2xl border-r sm:mx-[73px] xl:ml-[370px]">
      <div className="flex items-center justify-between sticky px-4 py-3 z-50">
        <span className="text-2xl font-semibold text-gray-300">Home</span>
        <SparklesIcon className="w-7 text-gray-300" />
      </div>
      <CreatePost />
      <Post />
    </div>
  );
};
export default Feed;
