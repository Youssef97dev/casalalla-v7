"use client";
import { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const events = [
  {
    id: 1,
    img_src:
      "https://res.cloudinary.com/dz7wroord/image/upload/c_crop,h_4160,w_2774/CasaLalla-VNor/og9byamwkz7hcphqlxsk",
    title: "Fisrt Event",
    date_: "Wednesday 25th December",
    para_1:
      "Stay tuned for exciting events at Casa Lalla! We will be hosting a variety of vibrant celebrations",
    para_2: "",
    para_3: "800.00dhs per person",
    book: true,
  },
  {
    id: 2,
    img_src:
      "https://res.cloudinary.com/dz7wroord/image/upload/c_crop,h_4160,w_2774/CasaLalla-VNor/jfziloryimjajcbxuj0k",
    title: "Second Event",
    date_: "Saturday 28th December",
    para_1:
      "Stay tuned for exciting events at Casa Lalla! We will be hosting a variety of vibrant celebrations",
    para_2: "",
    book: false,
  },
  {
    id: 3,
    img_src:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/hnwydmpvhljw0eietnnw",
    title: "Third Event",
    date_: "Sunday 29th December",
    para_1:
      "Stay tuned for exciting events at Casa Lalla! We will be hosting a variety of vibrant celebrations",
    para_2: "",
    book: false,
  },
];

const Upcoming = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex flex-col justify-start items-center mt-8 gap-3 text-casa_8 px-2">
      <h1 className="mb-5 text-[34.548px] leading-[42.5631px] lg:text-[60px] lg:leading-[73.92px]">
        {t("events.upcoming")}
      </h1>
      <div className="w-full h-full block lg:hidden">
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          speed={1400}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next-ex1",
            prevEl: ".swiper-button-prev-ex1",
          }}
          className="swiper w-full h-full"
          id="slider1"
        >
          <div className="swiper-wrapper">
            {events.map((event) => (
              <SwiperSlide key={event.id}>
                <div className="w-full flex flex-col justify-center items-start gap-2 px-3">
                  <img
                    src={event.img_src}
                    className="w-full h-full object-cover"
                    alt="itemImage"
                  />
                  <h1 className="text-3xl">{event.title}</h1>
                  <h2 className="text-lg mb-3">{event.date_}</h2>
                  <p>{event.para_1}</p>
                  <p>{event.para_2}</p>
                  <p>{event.para_3}</p>
                  {event.book && (
                    <Link
                      href="#"
                      className="bg-casa_8 text-white px-12 py-5 text-[18px] font-medium mt-3 uppercase"
                    >
                      {t("events.book")}
                    </Link>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
      <div className="w-full h-full hidden lg:block mb-12">
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          slidesPerView={4}
          speed={1400}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next-ex1",
            prevEl: ".swiper-button-prev-ex1",
          }}
          className="swiper w-full h-full"
          id="slider1"
        >
          <div className="swiper-wrapper">
            {events.map((event) => (
              <SwiperSlide key={event.id}>
                <div className="w-full flex flex-col justify-center items-start gap-2 px-3 lg:px-8">
                  <img
                    src={event.img_src}
                    className="w-full h-full object-cover"
                    alt="itemImage"
                  />
                  <h1 className="text-3xl">{event.title}</h1>
                  <h2 className="text-lg mb-3">{event.date_}</h2>
                  <p>{event.para_1}</p>
                  <p>{event.para_2}</p>
                  <p>{event.para_3}</p>
                  {event.book && (
                    <Link
                      href="/booking"
                      className="bg-casa_8 text-white px-12 py-5 text-[18px] font-medium mt-3 uppercase"
                    >
                      {t("events.book")}
                    </Link>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Upcoming;
