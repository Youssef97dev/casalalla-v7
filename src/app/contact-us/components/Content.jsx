import Link from "next/link";

const Content = () => {
  return (
    <div className="w-full mt-36 lg:mt-52 flex flex-col justify-center items-center gap-3 px-5 text-center text-casa_7">
      <h1 className="text-[30.57px] leading-[33.22px]">Get in Touch</h1>
      <p className="text-[17px] leading-[22.5px]">{`For gatherings, special celebrations, photo-shoots or more information about us please send us a message by using the contact form below`}</p>
      <div className="flex justify-center items-center gap-2">
        <span>To email us :</span>
        <Link href="#">{`reservations@casalallatakekoust.com`}</Link>
      </div>
      <div className="flex justify-center items-center gap-2">
        <span>Tel :</span>
        <Link href="#">{`+212 675-480103`}</Link>
      </div>
    </div>
  );
};

export default Content;
