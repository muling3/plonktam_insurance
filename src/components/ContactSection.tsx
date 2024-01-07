"use client";

import React, { FormEvent, useRef, useState } from "react";
import Image from "next/image";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [responseText, setResponseText] = useState<String>();
  const [open, setOpen] = useState<boolean>(false);

  const handleSendEmail = async (e: FormEvent<HTMLFormElement>) => {
    console.log("i was invocked");
    // prevent default
    e.preventDefault();

    setOpen(true);

    let data = new FormData(formRef.current!);

    const submitObj = {
      name: data.get("fullname"),
      email: data.get("email"),
      msg: data.get("message"),
    };

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(submitObj),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setResponseText(response.message);

        formRef.current?.reset(); // reset form

        setTimeout(() => {
          setOpen(false);
        }, 200);
      })
      .catch((err) => {
        setOpen(false);
        setResponseText(err.message);
      });
  };

  return (
    <div className="px-2 py-2 sm:px-24 mt-12 w-full mb-16">
      <div className="header w-full">
        <p className="text-2xl text-center font-bold">Contact Us</p>
        <p className="text-center mt-2">
          Say hello, Send us gifts or ask us anything using this contact form
          and we’ll respond within 24 hours (usually)
        </p>
      </div>
      <div className="content w-full">
        <form className="w-full" onSubmit={handleSendEmail} ref={formRef}>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2 my-4">
            <div className="input-group">
              <label
                htmlFor="fullname"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                FullName
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  className="w-full rounded-md border border-[#007A37] pl-4 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-2 focus:border-[#007A37] sm:text-sm sm:leading-6"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>
            <div className="input-group">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full rounded-md border border-[#007A37] pl-4 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-2 focus:border-[#007A37] sm:text-sm sm:leading-6"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>
          </div>
          <div className="w-full grid grid-cols-1 gap-2 my-3">
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Enter your Message
              </label>
              <div className="mt-2">
                <textarea
                  rows={4}
                  name="message"
                  id="message"
                  className="w-full rounded-md border border-[#007A37] pl-4 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-2 focus:border-[#007A37] sm:text-sm sm:leading-6"
                  required
                ></textarea>
              </div>
            </div>
          </div>
          <span className="text-red-500 text-xl">{responseText}</span>
          <div className="w-full flex justify-center items-center">
            <input
              type="submit"
              value={open ? "Sending...." : "Send Message"}
              className="bg-[#007A37] text-white py-3 px-6 rounded-[80px] hover:cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-500"
              disabled={open}
            />
            {open && (
              <div className="image w-[80px] h-[45px] relative bg-slate-300 ml-3">
                <Image src="/spinner.svg" alt={"Spinner"} fill />
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
