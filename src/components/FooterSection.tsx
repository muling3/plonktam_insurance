import React from "react";
import Image from "next/image";
import Link from "next/link";

const FooterSection = () => {
  const socialMediaLinks = [
    { svg: "facebook", title: "Facebook", link: "#" },
    { svg: "twitter", title: "twitter", link: "#" },
    { svg: "linkedin", title: "linkedin", link: "#" },
  ];

  return (
    <div className="px-24 mt-12 w-full bg-[#007A37] py-4 grid grid-cols-1 sm:grid-cols-5 items-start gap-3">
      <div className="logo h-full flex flex-col justify-center items-center">
        <div>
          <Image
            src="/logo.svg"
            alt="Plonktam logo"
            className="dark:invert"
            width={200}
            height={400}
            priority
          />
        </div>
        <div className="social-links flex justify-center items-center mt-10">
          {socialMediaLinks.map((sl) => (
            <Link href={sl.link} key={sl.svg}>
              <Image
                src={`/${sl.svg}.svg`}
                alt={sl.title}
                className="dark:invert mr-2"
                width={42}
                height={32}
                priority
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full">
        <div className="header w-full my-5">
          <p className="text-lg text-start font-semibold text-white">
            Contact Info
          </p>
        </div>
        <div className="content flex flex-col justify-start items-start">
          <div className="text-white flex justify-start items-center mb-2 cursor-pointer">
            <span className="material-symbols-outlined mr-2">location_on</span>
            Nairobi Kenya.
          </div>
          <div className="text-white flex justify-start items-center mb-2 cursor-pointer text-clip">
            <span className="material-symbols-outlined mr-2">mail</span>
            plonktaminsurance@gmail.com
          </div>
          <div className="text-white flex justify-start items-center mb-2 cursor-pointer">
            <span className="material-symbols-outlined mr-2">call</span>
            0742544580/0786970714
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="header w-full my-5">
          <p className="text-lg text-start font-semibold text-white">
            Information
          </p>
        </div>
        <div className="content flex flex-col justify-start items-start">
          <div className="text-white flex justify-start items-center mb-2">
            <Link href={"#"}>Terms of Service</Link>
          </div>
          <div className="text-white flex justify-start items-center mb-2">
            <Link href={"#"}>Privacy Policy</Link>
          </div>
          <div className="text-white flex justify-start items-center mb-2">
            <Link href={"#"}>FAQ</Link>
          </div>
          <div className="text-white flex justify-start items-center mb-2">
            <Link href={"#"}>Help</Link>
          </div>
          <div className="text-white flex justify-start items-center mb-2">
            <Link href={"#"}>Community Guidelines</Link>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="header w-full my-5">
          <p className="text-lg text-start font-semibold text-white">
            Quick Links
          </p>
        </div>
        <div className="content flex flex-col justify-start items-start">
          <div className="text-white flex justify-start items-center mb-2">
            <Link href={"#"}>About Claims</Link>
          </div>
          <div className="text-white flex justify-start items-center mb-2">
            <Link href={"#"}>About Us</Link>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="header w-full my-5">
          <p className="text-lg text-start font-semibold text-white">
            Working Hours
          </p>
        </div>
        <div className="content flex flex-col justify-start items-start">
          <div className="text-white flex justify-start items-center mb-2 cursor-pointer">
            Sunday - Friday
          </div>
          <div className="text-white flex justify-start items-center mb-2 cursor-pointer">
            Closed Saturday
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
