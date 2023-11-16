const Directline = () => {
  return (
    <>
      <div className="w-full flex-1 px-2 py-2 sm:px-24 sm:py-4">
        <div className="header w-full my-4">
          <p className="text-lg font-semibold uppercase">
            directline taxi comprehensive covers
          </p>
        </div>
        <div className="opts w-full grid grid-cols-3 gap-16 place-items-center">
          <div className="font-bold">Type of the Vehicle</div>
          <div className="font-bold">Insurance Cost</div>
          <div className="font-bold">Action</div>

          <div>All PSV Taxi</div>
          <div className="">5.9% of the Value of the vehicle</div>
          <div className="bg-[#007A37] text-white px-4 py-2 uppercase">
            add to cart
          </div>
        </div>
      </div>
    </>
  );
};

export default Directline;
