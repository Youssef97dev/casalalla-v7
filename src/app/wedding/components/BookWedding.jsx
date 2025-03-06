"use client";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const BookWedding = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full h-full text-center flex flex-col justify-center items-center gap-4 px-3 lg:px-[27rem] py-5 text-casa_8 font-corporate">
      <p className="text-[15px] leading-[22.5px]">{t("wedding.intro")}</p>
      <Link
        href="/contact-us"
        className="z-10 bg-casa_8 uppercase hover:bg-casa_7 text-casa_1 text-[15px] px-12 py-4 lg:py-7 my-5 lg:mt-20 cursor-pointer transition-all duration-100"
      >
        {t("wedding.button")}
      </Link>
    </div>
  );
};

export default BookWedding;
