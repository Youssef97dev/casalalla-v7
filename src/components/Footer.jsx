import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="p-4 w-full flex flex-col justify-center items-center">
      <div className="border-t border-primary_11 py-8 px-2 w-full flex flex-col lg:flex-row justify-between items-center text-casa_8 font-medium gap-8 lg:gap-0">
        <div className="w-full flex flex-col lg:flex-row justify-center items-start gap-5 lg:gap-0 order-2 lg:order-1">
          <ul className="w-full flex flex-col justify-start items-center underline gap-4">
            <li>
              <Link href="https://casalallatakerkoust.com/">Home</Link>
            </li>
            <li>
              <Link href="https://casalallatakerkoust.com/about/">About</Link>
            </li>
            <li>
              <Link href="#">Day pass</Link>
            </li>
            <li>
              <Link href="/booking">Reservation</Link>
            </li>
          </ul>
          <Link
            target="_blank"
            href="https://www.google.com/maps/dir//casa+lalla+takerkoust/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0xdafef4fcbd919cb:0x89922e232011bf59?sa=X&ved=1t:3061&ictx=111"
            className="w-full flex flex-col justify-center items-center text-center underline"
          >
            <span>{`Lalla Takerkoust,`}</span>
            <span>{`Marrakech 40000`}</span>
            <span>Morocco</span>
          </Link>
        </div>
        <div className="w-full flex justify-center items-start order-1 lg:order-2">
          <Image
            src="/logo-1.png"
            width={170}
            height={170}
            className="cursor-pointer w-36 h-36 lg:w-56 lg:h-56"
          />
        </div>
        <div className="w-full flex flex-col justify-center items-center order-3">
          <div className="w-full flex justify-center items-center">
            <span>{`Tel :`}</span>
            <Link
              href="http://wa.me/212675480018"
              target="_blank"
              className="underline"
            >{`+212 675-480103`}</Link>
          </div>
          <div className="w-full flex justify-center items-center">
            <span>{`Email :`}</span>
            <Link
              href="mailto:reservations@casalallatakerkoust.com"
              target="_blank"
              className="underline"
            >
              {`reservations@casalallatakerkoust.com`}
            </Link>
          </div>
          <div className="w-full flex justify-center items-center">
            <span>{`Instagram :`}</span>
            <Link
              href="https://www.instagram.com/casa.lalla.takerkoust"
              target="_blank"
              className="underline"
            >{`@casa.lalla.takerkoust`}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
