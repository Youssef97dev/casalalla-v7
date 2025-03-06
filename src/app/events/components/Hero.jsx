"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full bg-[url('https://res.cloudinary.com/dz7wroord/image/upload/ar_9:16,c_crop/casalalla-v2/faynmvyht1juvuvkasun')] bg-cover bg-center bg-no-repeat flex flex-col lg:flex-row-reverse justify-start lg:justify-between items-center gap-8 lg:gap-24 px-5 lg:px-32 py-5 lg:py-28">
      <Image
        src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/rixavtohk5qolpbtghy2"
        height={1000}
        width={500}
        className="object-cover mt-32"
      />
      <div className="w-full flex flex-col justify-center items-start text-casa_1 pb-3">
        <h1 className="mb-5 lg:mb-10 text-[34.548px] leading-[42.5631px] lg:text-[60px] lg:leading-[73.92px]">
          {t("events.title")}
        </h1>
        <p className="text-[15px] leading-[22.5px] lg:text-xl">
          {t("events.subtitle_1")}
        </p>
        <p className="text-[15px] leading-[22.5px] lg:text-xl">
          {t("events.subtitle_2")}
        </p>
        <p className="text-[15px] leading-[22.5px] lg:text-xl">
          {t("events.subtitle_3")}
        </p>
      </div>
    </div>
  );
};

export default Hero;
