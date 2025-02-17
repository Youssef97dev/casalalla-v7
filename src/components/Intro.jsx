"use client";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Intro = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex flex-col justify-center items-center gap-8 text-casa_6 text-center px-5 py-5 lg:px-80">
      <h1 className="text-[32.52px] leading-[40.95px] lg:text-[47.83px] lg:leading-[62.14px]">
        {t("home.title")}
      </h1>
      <p className="text-[15px] lg:text-[18px] leading-[22.5px]">
        {t("home.description_1")}
        <br />
        <br />
        {t("home.description_2")}
        <br />
        <br />
        {t("home.description_3")}
        <br />
      </p>
      <Link
        href="/booking"
        className="bg-casa_6 hover:bg-casa_5 text-white px-10 py-5 text-[15px]"
      >
        {t("menu.book")}
      </Link>
    </div>
  );
};

export default Intro;
