"use client";
import AnimateHeight from "react-animate-height";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Accordion = () => {
  const [active, setActive] = useState("1");
  const togglePara = (value) => {
    setActive((oldValue) => {
      return oldValue === value ? "" : value;
    });
  };
  return (
    <div className="w-full">
      <div className=" font-normal text-casa_1">
        <div className="border-t  border-[#d3d3d3] ">
          <button
            type="button"
            className={`py-4 w-full flex items-center text-white-dark text-[15px] uppercase`}
            onClick={() => togglePara("1")}
          >
            {`Transportation`}
            <div className={`ml-auto`}>
              {active === "1" ? (
                <AiOutlineMinus size={28} />
              ) : (
                <AiOutlinePlus size={28} />
              )}
            </div>
          </button>
          <div>
            <AnimateHeight duration={300} height={active === "1" ? "auto" : 0}>
              <div className="space-y-2 p-4 text-white-dark text-[16px] border-t border-[#d3d3d3]">
                <p>Lalla Takerkoust can be reached via taxi or bus.</p>
              </div>
            </AnimateHeight>
          </div>
        </div>

        <div className="border-t  border-[#d3d3d3]">
          <button
            type="button"
            className={`py-4 w-full flex items-center text-white-dark text-[15px] uppercase`}
            onClick={() => togglePara("2")}
          >
            {`Quad / Buggy Tour`}
            <div className={`ml-auto`}>
              {active === "2" ? (
                <AiOutlineMinus size={28} />
              ) : (
                <AiOutlinePlus size={28} />
              )}
            </div>
          </button>
          <div>
            <AnimateHeight duration={300} height={active === "2" ? "auto" : 0}>
              <div className="space-y-2 p-4 text-white-dark text-[16px] border-t border-[#d3d3d3]">
                <p>
                  Satisfy your need for speed and adventure with a quad tour
                  around Lalla Takerkoust and take in breathtaking landscapes.
                  Experienced guides will take you off the beaten path at the
                  foothills of the High Atlas Mountains.
                </p>
                <p>
                  {"Quad Simple 1 Hour 300dh"}
                  <br />
                  {`Quad Double 1 Hour 500dh`}
                  <br />
                  {`Quad Simple 2 Hours 500dh`}
                  <br />
                  {`Quad Double 2 Hours 800dh`}
                  <br />
                  {`Buggy 2 Places 1 Hour 800dh`}
                  <br />
                  {`Buggy 2 Places 2 Hours 1400dh`}
                </p>
              </div>
            </AnimateHeight>
          </div>
        </div>

        <div className="border-t border-[#d3d3d3] ">
          <button
            type="button"
            className={`py-4 w-full flex items-center text-white-dark text-[15px] uppercase`}
            onClick={() => togglePara("3")}
          >
            {`Jetski`}
            <div className={`ml-auto`}>
              {active === "3" ? (
                <AiOutlineMinus size={28} />
              ) : (
                <AiOutlinePlus size={28} />
              )}
            </div>
          </button>
          <div>
            <AnimateHeight duration={300} height={active === "3" ? "auto" : 0}>
              <div className="space-y-2 p-4 text-white-dark text-[16px] border-t border-[#d3d3d3]">
                <p>
                  Get your heart racing with a jet ski adventure as you glide
                  across the scenic Lalla Takerkoust lake and enjoy stunning
                  views of the snow-capped High Atlas Mountains.
                </p>
                <p>400dh for 15 Minutes</p>
              </div>
            </AnimateHeight>
          </div>
        </div>

        <div className="border-t border-[#d3d3d3] ">
          <button
            type="button"
            className={`py-4 w-full flex items-center text-white-dark text-[15px] uppercase`}
            onClick={() => togglePara("4")}
          >
            {`Nature Walk / Hike`}
            <div className={`ml-auto`}>
              {active === "4" ? (
                <AiOutlineMinus size={28} />
              ) : (
                <AiOutlinePlus size={28} />
              )}
            </div>
          </button>
          <div>
            <AnimateHeight duration={300} height={active === "4" ? "auto" : 0}>
              <div className="space-y-2 p-4 text-white-dark text-[16px] border-t border-[#d3d3d3]">
                <p>
                  Explore the serene waters of Lalla Takerkoust by foot with an
                  expert guide and discover the vibrant flora and fauna that is
                  found in this diverse landscape. Choose from a leisurely
                  nature walk or venture into the surrounding hillsides for a
                  more rigorous hike. Perfect for birdwatches and photography
                  enthusiasts, this tranquil environment promises a respite from
                  the hustle and bustle of Marrakech life.
                </p>
              </div>
            </AnimateHeight>
          </div>
        </div>

        <div className="border-t border-[#d3d3d3] ">
          <button
            type="button"
            className={`py-4 w-full flex items-center text-white-dark text-[13.5px] uppercase`}
            onClick={() => togglePara("5")}
          >
            {`Horseback Riding`}
            <div className={`ml-auto`}>
              {active === "5" ? (
                <AiOutlineMinus size={28} />
              ) : (
                <AiOutlinePlus size={28} />
              )}
            </div>
          </button>
          <div>
            <AnimateHeight duration={300} height={active === "5" ? "auto" : 0}>
              <div className="space-y-2 p-4 text-white-dark text-[16px] border-t border-[#d3d3d3]">
                <p>
                  Experience the magic of horseback riding around the sparkling
                  Lalla Takerkoust lake and discover diverse landscapes as you
                  journey off the beaten path around the lake, the foothills of
                  the High Atlas mountains and the neighboring stone desert of
                  Agafay.
                </p>
              </div>
            </AnimateHeight>
          </div>
        </div>

        <div className="border-t border-b border-[#d3d3d3] ">
          <button
            type="button"
            className={`py-4 w-full flex items-center text-white-dark text-[13.5px] uppercase`}
            onClick={() => togglePara("6")}
          >
            {`Agafay Desert`}
            <div className={`ml-auto`}>
              {active === "6" ? (
                <AiOutlineMinus size={28} />
              ) : (
                <AiOutlinePlus size={28} />
              )}
            </div>
          </button>
          <div>
            <AnimateHeight duration={300} height={active === "6" ? "auto" : 0}>
              <div className="space-y-2 p-4 text-white-dark text-[16px] border-t border-[#d3d3d3]">
                <p>
                  Discover the rocky desert of Agafay and find out why it’s one
                  of the Morocco’s favorite playgrounds. Live out your Dune
                  desert dreams and explore by quad, buggy or camel.
                </p>
                <p>
                  There is no shortage of activities to enjoy when visiting the
                  neighboring Agafay Desert, only 5 minutes away from Lalla
                  Takerkoust.
                </p>
              </div>
            </AnimateHeight>
          </div>
        </div>

        <div className="border-b border-[#d3d3d3] ">
          <button
            type="button"
            className={`py-4 w-full flex items-center text-white-dark text-[13.5px] uppercase`}
            onClick={() => togglePara("7")}
          >
            {`Bike Tour`}
            <div className={`ml-auto`}>
              {active === "7" ? (
                <AiOutlineMinus size={28} />
              ) : (
                <AiOutlinePlus size={28} />
              )}
            </div>
          </button>
          <div>
            <AnimateHeight duration={300} height={active === "7" ? "auto" : 0}>
              <div className="space-y-2 p-4 text-white-dark text-[16px] border-t border-[#d3d3d3]">
                <p>
                  Explore Lalla Takerkoust on an invigorating bike ride through
                  the Agafay Desert and then arrive at the oasis that is the
                  crystal-clear waters of Lalla Takerkoust lake and the
                  surrounding snow-capped High Atlas Mountains. Get ready for a
                  timeless ride that is sure to provide unforgettable memories!
                </p>
              </div>
            </AnimateHeight>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
