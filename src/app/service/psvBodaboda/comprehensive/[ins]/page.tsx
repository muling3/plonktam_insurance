"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useRef, useState } from "react";

const providers: { [k: string]: string } = {
  trident: "7, 000",
  directline: "7, 000",
  monarch: "6, 900",
};

const Page = ({ params: { ins } }: { params: { ins: string } }) => {
  const category = "Comprehensive Annual Covers";
  const provider = ins.toUpperCase();
  const cost: string = providers[ins];

  if (!cost) {
    return (
      <div className="w-full flex-1 bg-slate-200 flex justify-center items-center flex-col  px-2 py-2 sm:px-24 sm:py-4">
        <span>Page not found</span>
        <Link
          href={"/service/psvBodaboda/comprehensive"}
          className="my-6 py-4 px-6 text-white bg-[#007A37]"
        >
          Go Back Home
        </Link>
      </div>
    );
  }

  const formRef = useRef<HTMLFormElement | null>(null);
  const [responseText, setResponseText] = useState<String>();
  const [open, setOpen] = useState<boolean>(false);

  const readFileAsBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsArrayBuffer(file);
    });
  };

  const handleSendEmail = async (e: FormEvent<HTMLFormElement>) => {
    // prevent default
    e.preventDefault();

    setOpen(true);

    let data = new FormData(formRef.current!);
    const idCard = (await readFileAsBase64(
      data.get("idcard") as File
    )) as ArrayBuffer;

    const logbook = (await readFileAsBase64(
      data.get("logbook") as File
    )) as ArrayBuffer;

    const kraPin = (await readFileAsBase64(
      data.get("kraPin") as File
    )) as ArrayBuffer;

    const submitObj = {
      name: data.get("fullname"),
      email: data.get("email"),
      phone: data.get("phone"),
      location: data.get("location"),
      service: "PSV BodaBoda",
      category,
      provider,
      idCard: Buffer.from(idCard),
      logbook: Buffer.from(logbook),
      kraPin: Buffer.from(kraPin),
      cost: `Ksh ${cost}`,
    };

    fetch("/api/email", {
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
    <>
      <div className="w-full flex-1 px-2 py-2 sm:px-24 sm:py-4 relative">
        <div className={`bg-slate-300 px-2 py-2 sm:px-32 sm:py-4`}>
          <div className="header w-full py-1 flex justify-between items-center">
            <Link href={"/service/psvBodaboda/comprehensive"}>
              <span className="material-symbols-outlined p-2 rounded-full border-2 border-[#007A37] dark:text-gray-900">
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
                <span className="font-bold text-white">PSV Bodaboda</span>
              </p>
              <p className="font-semibold text-gray-300 grid grid-cols-2 gap-2 my-2">
                Category:
                <span className="font-bold text-white">{category}</span>
              </p>
              <p className="font-semibold text-gray-300 grid grid-cols-2 gap-2 my-2">
                Insurance:
                <span className="font-bold text-white">{provider}</span>
              </p>
              <p className="font-semibold text-gray-300 grid grid-cols-2 gap-2 my-2">
                Cost:
                <span className="font-bold text-white">Ksh. {cost}</span>
              </p>
            </div>
            <div>
              <p>Your personal details</p>
              <div className="user-form">
                <form
                  className="w-full"
                  onSubmit={handleSendEmail}
                  ref={formRef}
                >
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
                          required
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
                          required
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
                          required
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
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2 my-4">
                    <div className="input-group">
                      <label
                        htmlFor="idcard"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        ID Card
                      </label>
                      <div className="mt-2">
                        <input
                          type="file"
                          name="idcard"
                          id="idcard"
                          className="w-full rounded-md border border-[#007A37] pl-4 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-2 focus:border-[#007A37] sm:text-sm sm:leading-6"
                          accept="application/pdf,image/jpeg,image/png"
                        />
                      </div>
                    </div>
                    <div className="input-group">
                      <label
                        htmlFor="logbook"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Logbook
                      </label>
                      <div className="mt-2">
                        <input
                          type="file"
                          name="logbook"
                          id="logbook"
                          className="w-full rounded-md border border-[#007A37] pl-4 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-2 focus:border-[#007A37] sm:text-sm sm:leading-6"
                          accept="application/pdf,image/jpeg,image/png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full grid grid-cols-1 my-4">
                    <div className="input-group">
                      <label
                        htmlFor="kraPin"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        KRA PIN
                      </label>
                      <div className="mt-2">
                        <input
                          type="file"
                          name="kraPin"
                          id="kraPin"
                          className="w-full rounded-md border border-[#007A37] pl-4 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-2 focus:border-[#007A37] sm:text-sm sm:leading-6"
                          accept="application/pdf,image/jpeg,image/png"
                        />
                      </div>
                    </div>
                  </div>
                  <span className="text-red-500 text-xl">{responseText}</span>
                  <div className="w-full flex justify-center items-center mt-4">
                    <input
                      type="submit"
                      value={open ? "Submitting...." : "Confirm Submission"}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
