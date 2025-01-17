import Link from "next/link";

const Intro = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-8 text-casa_6 text-center px-5 py-5 lg:px-80">
      <h1 className="text-[32.52px] leading-[40.95px] lg:text-[47.83px] lg:leading-[62.14px]">{`Casa Lalla Takerkoust Restaurant is a unique dining destination located in the scenic area of Barrage Lalla Takerkoust.`}</h1>
      <p className="text-[15px] lg:text-[18px] leading-[22.5px]">
        {`The deep rooted connection to nature in every aspect of the experience, make staying at this luxury restaurant heaven.`}
        <br />
        <br />
        {`The dining spaces enjoy stunning terraces and glamorous pergolas. The indoor areas with sumptuous authentic rustic décor also provide the perfect way to enjoy the taste of the estate. Mediterranean inspired dishes created with ingredients almost locally sourced.`}
        <br />
        <br />
        {
          "With sensational golden light views of the estate and the Lake beyond, the romance of the nature is your backdrop."
        }
        <br />
      </p>
      <Link
        href="/booking"
        className="bg-casa_6 hover:bg-casa_5 text-white px-10 py-5 text-[15px]"
      >
        Book Now
      </Link>
    </div>
  );
};

export default Intro;
