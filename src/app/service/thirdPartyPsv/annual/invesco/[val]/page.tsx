"use client";

import Image from "next/image";
import Link from "next/link";

const providers: { [k: string]: { cat: string; cost: string } } = {
  "1": {
    cat: "14 Seats",
    cost: "86, 980",
  },
  "2": {
    cat: "18 Seats ",
    cost: "99, 980",
  },
  "3": {
    cat: "26 Seats",
    cost: "121, 420",
  },
  "4": {
    cat: "33 Seats",
    cost: "136, 952",
  },
  "5": {
    cat: "37 Seats",
    cost: "193, 252",
  },
  "6": {
    cat: "41 Seats",
    cost: "209, 738",
  }
};
const Page = ({ params: { val } }: { params: { val: string } }) => {
  const category = "Annual PSV Matatu Rates";
  const insurance = "Invesco";
  const provider = providers[val];

  if (!provider) {
    return (
      <div className="w-full flex-1 bg-slate-200 flex justify-center items-center flex-col  px-2 py-2 sm:px-24 sm:py-4">
        <span>Page not found</span>
        <Link href={"/"} className="my-6 py-4 px-6 text-white bg-[#007A37]">
          Go Back Home
        </Link>
      </div>
    );
  }

  const cost: string = provider.cost;

  return (
    <>
      <div className="w-full flex-1 px-2 py-2 sm:px-24 sm:py-4">
        <div className={`bg-slate-300 px-2 py-2 sm:px-32 sm:py-4`}>
          <div className="header w-full py-1 flex justify-between items-center">
            <Link href={"/service/thirdPartyPsv/annual/invesco"}>
              <span className="material-symbols-outlined p-2 rounded-full border">
                close
              </span>
            </Link>
            <div className="image w-[80px] h-[60px] relative">
              <Image src="/mpesa.png" alt={"Mpesa till"} fill />
            </div>
          </div>
          <div className="body w-full grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
            <div className="service-card py-4 px-4 bg-[#007A37] rounded-lg">
              <p className="text-white underline underline-offset-4">
                Your Selection Details
              </p>
              <p className="font-semibold text-gray-300 grid grid-cols-2 gap-2 my-2">
                Service:
                <span className="font-bold text-white">Third Party Psv Matatu's</span>
              </p>
              <p className="font-semibold text-gray-300 grid grid-cols-2 gap-2 my-2">
                Category:
                <span className="font-bold text-white">{category}</span>
              </p>
              <p className="font-semibold text-gray-300 grid grid-cols-2 gap-2 my-2">
                Seaters:
                <span className="font-bold text-white">{provider.cat}</span>
              </p>
              <p className="font-semibold text-gray-300 grid grid-cols-2 gap-2 my-2">
                Insurance:
                <span className="font-bold text-white">{insurance}</span>
              </p>
              <p className="font-semibold text-gray-300 grid grid-cols-2 gap-2 my-2">
                Cost:
                <span className="font-bold text-white">Ksh. {cost}</span>
              </p>
            </div>
            <div>
              <p>Your personal details</p>
              <div className="user-form">
                <form action="" className="w-full">
                  <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2 my-4">
                    <div className="input-group">
                      <label
                        htmlFor="fullname"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        FullName <span className="text-red-500">*</span>
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
                        className="block text-sm font-medium leading-6 text-gray-700"
                      >
                        Email <span className="text-red-500">*</span>
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
                  <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2 my-4">
                    <div className="input-group">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="mt-2">
                        <input
                          type="numeric"
                          name="phone"
                          id="phone"
                          className="w-full rounded-md border border-[#007A37] pl-4 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-2 focus:border-[#007A37] sm:text-sm sm:leading-6"
                          placeholder="07x xxx xxx"
                        />
                      </div>
                    </div>
                    <div className="input-group">
                      <label
                        htmlFor="location"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Location <span className="text-red-500">*</span>
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="location"
                          id="location"
                          className="w-full rounded-md border border-[#007A37] pl-4 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-2 focus:border-[#007A37] sm:text-sm sm:leading-6"
                          placeholder="Nairobi"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex justify-center items-center">
                    <input
                      type="submit"
                      value={"Confirm Submission"}
                      className="bg-[#007A37] text-white py-3 px-6 rounded-[80px] hover:cursor-pointer"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
