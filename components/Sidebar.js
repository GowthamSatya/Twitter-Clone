import React from "react";
import Image from "next/image";
import { HomeIcon } from "@heroicons/react/solid";
import SidebarItem from "./atoms/SidebarItem";
import Profile from "../assets/profile.png";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";

const Sidebar = () => {
  return (
    <div className="hidden sm:flex flex-col items-center justify-between xl:items-start xl:w-[340px] p-2 fixed h-full">
      <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24 ">
        <Image
          src="https://rb.gy/ogau5a"
          alt="TwitterLogo"
          width={30}
          height={30}
        />
      </div>
      <div className="space-y-2.5 xl:ml-24">
        <SidebarItem Icon={HomeIcon} name={"Home"} active />
        <SidebarItem Icon={HashtagIcon} name={"Explore"} />
        <SidebarItem Icon={BellIcon} name={"Notifications"} />
        <SidebarItem Icon={InboxIcon} name={"Messages"} />
        <SidebarItem Icon={BookmarkIcon} name={"Bookmarks"} />
        <SidebarItem Icon={ClipboardListIcon} name={"Lists"} />
        <SidebarItem Icon={UserIcon} name={"Profile"} />
        <SidebarItem Icon={DotsCircleHorizontalIcon} name={"More"} />
        <button className="hidden xl:inline ml-auto mt-4 bg-[#1b9bf0] text-white rounded-full w-56 h-[52px] text-large font-bold shadow-md hover:bg-[#1a8cd8]">
          Tweet
        </button>
      </div>

      <div className="flex text-white items-center justify-center mt-2 mb-6 xl:ml-auto xl:-mr-8 hoverAnimation">
        <Image
          className="rounded-full mr-4"
          src={Profile}
          width={40}
          height={40}
          alt="profilePic"
        />
        <div className="hidden text-white xl:flex xl:flex-col ml-4">
          <span className="font-bold">Satya Gowtham</span>
          <span className="text-md text-[#6e767d]">@gowthamsatya5</span>
        </div>
        <DotsHorizontalIcon className="hidden xl:inline text-white border-0 w-[25px] ml-10" />
      </div>
    </div>
  );
};

export default Sidebar;
