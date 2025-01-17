import Image from "next/image";

const Property = () => {
  return (
    <div
      id="about"
      className="w-full flex flex-col lg:flex-row-reverse justify-start lg:justify-between items-center gap-8 lg:gap-24 text-casa_6 px-5 lg:px-32 py-5 "
    >
      <Image
        src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/dsbquilbyrciyvbfz9uk"
        height={1000}
        width={500}
        className="object-cover mt-32"
      />
      <div className="w-full flex flex-col justify-center items-start pb-3 px-3 lg:px-24">
        <h1 className="mb-5 lg:mb-10 text-[34.548px] leading-[42.5631px] lg:text-[60px] lg:leading-[73.92px]">{`The Property`}</h1>
        <p className="text-[15px] leading-[22.5px] lg:text-xl">
          {`The restaurant Casa Lalla Takerkoust  is a destination in itself. The menus fuse global gastronomy with local, organic ingredients. Holidaymakers alike are invited to take a seat on the bright, airy terrace for lunch, soaking up the magical Mediterranean ambience and those spectacular Takerkoust Lake.
            Lunchs relax to a soundtrack of live artists and DJs playing chillout music with a world influence twist while sipping on cocktails served from the  bar.`}
        </p>
        <p className="text-[15px] leading-[22.5px] lg:text-xl">
          {`Casa Lalla Takerkoust is the most prestigious rural restaurant in Marrakech, Lake Lalla Takerkoust region.`}
        </p>
        <p className="text-[15px] leading-[22.5px] lg:text-xl">
          {`The estate with sprawling beautiful manicured restaurant & terrace is like a slow meandering village.`}
        </p>
      </div>
    </div>
  );
};

export default Property;
