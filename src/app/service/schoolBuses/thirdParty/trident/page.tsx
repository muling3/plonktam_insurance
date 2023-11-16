const Amaco = () => {
  return (
    <>
      <div className="w-full flex-1 px-2 py-2 sm:px-24 sm:py-4">
        <div className="header w-full my-4">
          <p className="text-lg font-semibold uppercase">
            trident school buses covers
          </p>
        </div>
        <div className="opts w-full grid grid-cols-3 gap-16 place-items-center">
          <div className="font-bold">No. of Passengers</div>
          <div className="font-bold">Insurance Cost</div>
          <div className="font-bold">Action</div>

          <div>All School buses and Vans</div>
          <div className="">ksh. 8, 500 + (400 each pupil)</div>
          <div className="bg-[#007A37] text-white px-4 py-2 uppercase">
            add to cart
          </div>
        </div>
      </div>
    </>
  );
};

export default Amaco;
