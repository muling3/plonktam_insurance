"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const menuIconRef = useRef<HTMLImageElement | null>(null);

  const openMenuItemsModal = () => {
    setModalVisible((prev) => !prev);
  };

  if (typeof window !== "undefined")
    window.addEventListener("click", (ev) => {
      if (ev.target !== menuIconRef.current) setModalVisible(false);
    });

  return (
    <div className="navbar flex justify-between items-center w-full px-2 py-2 sm:px-24 sm:py-4 fixed top-0 left-0 right-0 z-10 bg-[#007A37]">
      <Link href={"/"}>
        <div className="logo">
          <Image
            src="/logo.svg"
            alt="Plonktam logo"
            className="dark:invert"
            width={200}
            height={400}
            priority
          />
        </div>
      </Link>
      <div className="menu relative">
        <div
          className="menu-icon cursor-pointer w-full"
          onClick={openMenuItemsModal}
        >
          <Image
            ref={menuIconRef}
            src="/menu.svg"
            alt="Plonktam logo"
            width={32}
            height={32}
            priority
          />
        </div>
        <div
          className={`menu-items flex flex-col justify-start items-start bg-white dark:bg-gray-500 p-5 absolute top-10 left-[-200px] right-0 duration-500 transition-all ${
            modalVisible ? "opacity-100 z-20 visible" : "opacity-0 -z-10 hidden"
          }`}
        >
          <Link href={"/"}>
            <div className="item flex justify-start w-full py-1 mb-2 text-black hover:bg-gray-100 hover:scale-105 transition-all duration-300 cursor-pointer">
              <span className="icon pr-4">
                <Image
                  src="/home.svg"
                  alt="Home icon"
                  width={32}
                  height={32}
                  priority
                />
              </span>
              <span>Home</span>
            </div>
          </Link>
          <Link href={"/#contact"}>
            <div className="item flex justify-start w-full py-1 my-2 text-black hover:bg-gray-100 hover:scale-105 transition-all duration-300 cursor-pointer">
              <span className="icon pr-4">
                <Image
                  src="/contact.svg"
                  alt="Contact us icon"
                  width={30}
                  height={30}
                  priority
                />
              </span>
              <span>Contact Us</span>
            </div>
          </Link>

          <Link href={"/#about"} className="w-full">
            <div className="item flex justify-start w-full py-1 my-2 text-black hover:bg-gray-100 hover:scale-105 transition-all duration-300 cursor-pointer">
              <span className="icon pr-4">
                <Image
                  src="/about.svg"
                  alt="About us icon"
                  width={32}
                  height={32}
                  priority
                />
              </span>
              <span>About Us</span>
            </div>
          </Link>
          <div className="item flex justify-start w-full py-1 my-2 text-black hover:bg-gray-100 hover:scale-105 transition-all duration-300 cursor-pointer">
            <span className="icon pr-4">
              <Image
                src="/settings.svg"
                alt="Settings icon"
                width={32}
                height={32}
                priority
              />
            </span>
            <span>Settings</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
