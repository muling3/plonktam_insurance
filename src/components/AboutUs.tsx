import React from "react";
import Image from "next/image";

const AboutUs = () => {
  const partners = [
    "amaco",
    "apa",
    "directline",
    "cic",
    "trident",
    "invesco",
    "monarch",
    "orient",
    "heritage",
    "occidental",
    "jubilee",
  ];
  return (
    <div className="px-2 py-2 sm:px-24 my-4">
      <div className="header w-full">
        <p className="text-2xl text-center font-bold">About Us</p>
        <p className="text-center mt-4">
          Welcome to Plonktam Insurance Agency, your trusted online destination
          for comprehensive and third party covers. We understand that insurance
          plays a crucial role in safeguarding your assets, providing financial
          protection, and offering peace of mind. That's why we are committed to
          offering top-notch insurance products and exceptional customer service
          to individuals, families, and businesses alike.
        </p>
      </div>
      <div className="content my-8">
        <div className="cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          <div className="mission flex flex-col justify-center items-center border hover:border-[#007A37] rounded-md p-3 shadow-md transition-all duration-200">
            <div className="title text-[#007A37] font-bold">Our Mission</div>
            <div className="body mt-4">
              At Plonktam Insurance Agency, our mission is to simplify the
              insurance-buying process and make it convenient for our clients to
              secure the coverage they need depending on the company of their
              choice. We strive to deliver tailored insurance solutions that
              match your unique requirements while providing the highest level
              of service and support.
            </div>
          </div>
          <div className="experience flex flex-col justify-center items-center border hover:border-[#007A37] rounded-md p-3 shadow-md transition-all duration-200">
            <div className="title text-[#007A37] font-bold">
              Seamless Online Experience
            </div>
            <div className="body mt-4">
              We believe in harnessing the power of technology to deliver a
              seamless online experience to our clients. Our user-friendly
              website allows you to easily browse and compare insurance options,
              request quotes, and purchase policies with just a few clicks. Our
              online platform is designed to be intuitive, secure, and
              efficient, ensuring a smooth and hassle-free insurance-buying
              process.
            </div>
          </div>
          <div className="experience flex flex-col justify-center items-center border hover:border-[#007A37] rounded-md p-3 shadow-md transition-all duration-200">
            <div className="title text-[#007A37] font-bold">
              Commitment to Customer Satisfaction
            </div>
            <div className="body mt-4">
              We prioritize customer satisfaction above all else. We are
              committed to building long-term relationships with our clients,
              based on trust, transparency, and reliability.
            </div>
          </div>
        </div>
      </div>
      <div className="partners w-full">
        <div className="header w-full my-10">
          <p className="text-lg text-center  text-[#007A37] font-semibold uppercase">
            our insurance partners
          </p>
        </div>
        <div className="partner-images flex flex-wrap justify-center items-start sm:justify-between sm:items-center">
          {partners.map((prt) => (
            <div className="w-[80px] h-[80px] px-1 border-2 rounded flex justify-center items-center">
              <Image
                key={prt}
                src={`/partners/${prt}.png`}
                alt={prt}
                className="object-cover"
                width={100}
                height={100}
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
