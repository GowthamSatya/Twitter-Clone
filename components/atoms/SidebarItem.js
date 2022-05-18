import React from "react";
import Image from "next/image";

const SidebarItem = ({ name, Icon, active }) => {
  return (
    <div
      className={`text-[#d9d9d9] flex items-center justify-center xl:justify-start text-xl space-x-3 hoverAnimation`}
    >
      <Icon className="text-white h-7" />
      <span className="hidden xl:inline">{name}</span>
    </div>
  );
};

export default SidebarItem;
