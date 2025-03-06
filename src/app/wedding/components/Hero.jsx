"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="relative w-full h-full lg:h-[120vh] flex justify-center items-center font-corporate">
      <Image
        src="https://res.cloudinary.com/dz7wroord/image/upload/c_crop,g_center,h_2080,w_4160/casalalla-v2/mzlt2jm7gmdueif3xs9r"
        height={500}
        width={1600}
        className="object-cover w-full hidden lg:block"
      />
      <Image
        src="https://res.cloudinary.com/dz7wroord/image/upload/c_thumb,g_north,h_3024,w_2032/casalalla-v2/pqkkpkipkazmtegsoztm"
        height={3024}
        width={2032}
        className="object-cover w-full h-full lg:hidden block mt-20"
      />
      <div className="absolute inset-0 bg-casa_1 opacity-10"></div>
      <div className="absolute w-full h-full flex justify-center top-60 text-white lg:text-[78px] lg:leading-[90px] text-[53.11px] leading-[61.86px]">
        {t("wedding.title")}
      </div>
    </div>
  );
};

export default Hero;
