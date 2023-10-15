import React from "react";

const ContactSection = () => {
  return (
    <div className="px-2 py-2 sm:px-24 mt-12 w-full mb-16">
      <div className="header w-full my-10">
        <p className="text-2xl text-center font-bold">Contact Us</p>
        <p className="text-center mt-2">
          Say hello, Send us gifts or ask us anything using this contact form
          and we’ll respond within 24 hours (usually)
        </p>
      </div>
      <div className="content w-full">
        <form action="" className="w-full">
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
                ></textarea>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <input
              type="submit"
              value={"Send Message"}
              className="w-1/2 sm:w-1/4 bg-[#007A37] text-white py-3 rounded-[80px] hover:cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
