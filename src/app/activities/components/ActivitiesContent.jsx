"use client";
import Image from "next/image";
import Accordion from "./Accordion";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const ActivitiesContent = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full h-full bg-casa_6 flex flex-col lg:flex-row justify-center items-center lg:p-28 p-9 gap-5">
      <div className="h-full w-full">
        <Image
          src="https://res.cloudinary.com/dz7wroord/image/upload/c_crop,g_south_west,h_683,w_500/CasaLalla-VNor/mguv84339wzg6mbyeyel"
          height={683}
          width={500}
          className="object-cover w-full h-[60vh] lg:h-screen"
        />
      </div>
      <div className="h-full w-full flex flex-col justify-start items-center gap-4 text-center text-casa_1 px-1 lg:px-28 font-corporate">
        <h1 className="my-2 lg:my-10 text-[23.51px] lg:text-[30px] leading-[28.91px] lg:leading-[40.32px] font-light">
          {t("activities.title")} <br /> {`CASA LALLA TAKERKOUST`}
        </h1>
        <Accordion />
        <Link
          href="/contact-us"
          className="bg-casa_4 hover:bg-casa_3 text-white px-10 py-5 mt-5"
        >
          {t("activities.book_experience")}
        </Link>
      </div>
    </div>
  );
};

export default ActivitiesContent;
