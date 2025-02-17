"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Property = () => {
  const { t } = useTranslation();
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
        <h1 className="mb-5 lg:mb-10 text-[34.548px] leading-[42.5631px] lg:text-[60px] lg:leading-[73.92px]">
          {t("home.title_2")}
        </h1>
        <p className="text-[15px] leading-[22.5px] lg:text-xl">
          {t("home.description_4")}
        </p>
        <p className="text-[15px] leading-[22.5px] lg:text-xl">
          {t("home.description_5")}
        </p>
        <p className="text-[15px] leading-[22.5px] lg:text-xl">
          {t("home.description_6")}
        </p>
      </div>
    </div>
  );
};

export default Property;
