import Image from "next/image";
import Accordion from "./Accordion";

const MenuWedding = () => {
  return (
    <div className="w-full h-full bg-casa_6 flex flex-col lg:flex-row justify-center items-center lg:p-28 p-9 gap-5 font-corporate">
      <div className="h-full w-full">
        <Image
          src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/s1vrdwmbtl5wjuglo5fl"
          height={2250}
          width={1500}
          className="object-cover w-full h-[60vh] lg:h-screen"
        />
      </div>
      <div className="h-full w-full flex flex-col justify-start items-center gap-4 text-center text-casa_1 px-2 lg:px-28">
        <h1 className="my-2 lg:my-10 text-[21.51px] lg:text-[30px] leading-[28.91px] lg:leading-[40.32px]">
          {`W E D D I N G`} <br />
          <br /> {`S A M P L E  M E N U S`}
        </h1>
        <Accordion />
      </div>
    </div>
  );
};

export default MenuWedding;
