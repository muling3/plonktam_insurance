import Link from "next/link";

const PrivateVehicles = () => {
  return (
    <>
      <div className="w-full flex-1 px-2 py-2 sm:px-24 sm:py-4">
        <div className="header w-full my-4">
          <p className="text-lg font-semibold uppercase">Private Vehicles</p>
        </div>
        <div className="opts w-full text-white">
          <Link href={"/service/privateVehicles/thirdParty"}>
            <div className="header bg-[#007A37] flex items-center justify-start w-full py-2 rounded-lg my-3">
              <div className="text-center">
                <span
                  className={`material-symbols-outlined mr-2 transition-all duration-500`}
                >
                  chevron_right
                </span>
              </div>
              <div className="uppercase">
                private third party motor rates and pricing(annual)
              </div>
            </div>
          </Link>
          <Link href={"/service/privateVehicles/comprehensive"}>
            <div className="header bg-[#007A37] flex items-center justify-start w-full py-2 rounded-lg my-3">
              <div className="text-center">
                <span
                  className={`material-symbols-outlined mr-2 transition-all duration-500`}
                >
                  chevron_right
                </span>
              </div>
              <div className="uppercase">
                private comprehensive motor rates and pricing(annual)
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PrivateVehicles;
