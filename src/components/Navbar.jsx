"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { Transition } from "@headlessui/react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <>
        <nav className="fixed left-0 top-0 z-20 w-full flex flex-row justify-between items-center uppercase px-4 lg:px-10 border-b border-casa_5 bg-casa_2">
          <ul className="w-full lg:flex justify-start items-center gap-7 text-[13.5px] leading-[20.25px] text-casa_6 hidden">
            <li>
              <Link href="/">{t("menu.home")}</Link>
            </li>
            <li>
              <Link href="/">{t("menu.about")}</Link>
            </li>
            {/*<li>
            <Link href="/daypass">Day pass</Link>
  </li>*/}
            <li className="relative group cursor-pointer">
              <span>{t("menu.events")}</span>
              <ul className="absolute top-3 -left-5 hidden group-hover:block bg-casa_2 shadow-lg mt-2">
                <li>
                  <Link
                    href="/events"
                    className="block px-4 py-2 text-casa_6 hover:bg-casa_1"
                  >
                    {t("menu.programming")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/wedding"
                    className="block px-4 py-2 text-casa_6 hover:bg-casa_1"
                  >
                    {t("menu.wedding")}
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/activities">{t("menu.activities")}</Link>
            </li>

            <li>
              <Link href="/contact-us">Contact</Link>
            </li>
          </ul>
          <div className="w-full flex lg:justify-center justify-start items-center">
            <Image
              src="/logo-1.png"
              width={150}
              height={150}
              className="cursor-pointer w-28 h-28 lg:w-36 lg:h-36"
            />
          </div>
          <div className="w-full flex justify-end items-center gap-7">
            <Link
              href="/gallery"
              className="text-[13.5px] leading-[20.25px] text-casa_6 hidden lg:block"
            >
              {t("menu.gallery")}
            </Link>
            <Link
              href="/menu-en.pdf"
              target="_blank"
              className="text-[13.5px] leading-[20.25px] text-casa_6 hidden lg:block"
            >
              Menu
            </Link>
            <Link
              href="/booking"
              className="bg-casa_5 hover:bg-casa_6 text-white px-10 py-5 text-xs hidden lg:block"
            >
              {t("menu.book")}
            </Link>
            <div
              className="text-primary_11 block lg:hidden  transition-transform duration-500"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <AiOutlineClose
                  size={30}
                  className="transform transition-transform duration-500 rotate-180"
                />
              ) : (
                <CiMenuBurger
                  size={30}
                  className="transform transition-transform duration-300 rotate-0"
                />
              )}
            </div>
          </div>
        </nav>

        {/* Full-screen mobile menu */}
        <Transition
          show={isOpen}
          enter="transition ease-out duration-700"
          enterFrom="transform translate-x-full opacity-0"
          enterTo="transform translate-x-0 opacity-100"
          leave="transition ease-in duration-500"
          leaveFrom="transform translate-x-0 opacity-100"
          leaveTo="transform translate-x-full opacity-0"
        >
          <div className="fixed top-10 right-0 z-10 w-full h-screen bg-casa_2 flex flex-col items-center justify-between">
            <ul className="space-y-5 text-center text-casa_6 leading-[27.88px] text-[30px] mt-28 uppercase">
              <li>
                <Link href="/">{t("menu.home")}</Link>
              </li>
              <li>
                <Link href="/">{t("menu.about")}</Link>
              </li>
              {/*<li>
              <Link href="/daypass">DAY PASS</Link>
            </li>*/}
              <li>
                <Link href="/events">{t("menu.programming")}</Link>
              </li>
              <li>
                <Link href="/wedding">{t("menu.wedding")}</Link>
              </li>
              <li>
                <Link href="/activities">{t("menu.activities")}</Link>
              </li>
              <li>
                <Link href="/gallery">{t("menu.gallery")}</Link>
              </li>
              <li>
                <Link href="/menu-en.pdf" target="_blank">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/contact-us">CONTACT</Link>
              </li>
            </ul>
            <Link
              href="/booking"
              className="bg-casa_6 fixed bottom-14 text-white px-7 py-4 text-[18px] font-medium"
            >
              {t("menu.book")}
            </Link>
          </div>
        </Transition>
      </>
    )
  );
};

export default Navbar;
