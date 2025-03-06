"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="relative w-full h-full lg:h-screen flex justify-center items-center font-corporate">
      <Image
        src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casa%20Lalla/yvt1ndsjycnr5cmzzhul"
        height={500}
        width={1600}
        className="object-cover w-full h-full hidden lg:block"
      />
      <Image
        src="https://res.cloudinary.com/dz7wroord/image/upload/c_thumb,g_north,h_3024,w_2032/CasaLalla-VNor/hnwydmpvhljw0eietnnw"
        height={3024}
        width={2032}
        className="object-cover w-full h-full lg:hidden block mt-20"
      />
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute w-full h-full flex justify-center top-60 text-white lg:text-[78px] lg:leading-[90px] text-[53.11px] leading-[61.86px] uppercase">
        {t("menu.activities")}
      </div>
    </div>
  );
};

export default Hero;
