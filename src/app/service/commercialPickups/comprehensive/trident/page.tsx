const Trident = () => {
  return (
    <>
      <div className="w-full flex-1 px-2 py-2 sm:px-24 sm:py-4">
        <div className="header w-full my-4">
          <p className="text-lg font-semibold uppercase">
            trident comprehensive covers
          </p>
        </div>
        <div className="opts w-full grid grid-cols-3 gap-16 place-items-center">
          <div className="font-bold">Value of the Pickup Insured</div>
          <div className="font-bold">Insurance cost</div>
          <div className="font-bold">Action</div>

          <div>Below Ksh. 1M upto 15 Years </div>
          <div className="">ksh. 38, 000</div>
          <div className="bg-[#007A37] text-white px-4 py-2 uppercase">
            add to cart
          </div>

          <div>Below Ksh. 1M upto 16 - 20 Years </div>
          <div className="">ksh. 38, 000</div>
          <div className="bg-[#007A37] text-white px-4 py-2 uppercase">
            add to cart
          </div>

          <div>Above Ksh. 1M upto 15 Years </div>
          <div className="">ksh. 35, 000</div>
          <div className="bg-[#007A37] text-white px-4 py-2 uppercase">
            add to cart
          </div>

          <div>Above Ksh. 1M upto 16 - 20 Years </div>
          <div className="">ksh. 35, 000</div>
          <div className="bg-[#007A37] text-white px-4 py-2 uppercase">
            add to cart
          </div>
        </div>
      </div>
    </>
  );
};

export default Trident;
