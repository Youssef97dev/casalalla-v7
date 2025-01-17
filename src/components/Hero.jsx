import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full h-full lg:h-[120vh]">
      <Image
        src="https://res.cloudinary.com/dz7wroord/image/upload/c_crop,g_center,h_3000,w_6000/casa%20Lalla/zs3zyshy5jjcrkuf7p7r"
        height={3000}
        width={6000}
        className="object-cover hidden lg:block"
      />
      <Image
        src="https://res.cloudinary.com/dz7wroord/image/upload/casalalla-v2/ycfub6xp8gjuz3gla8xh"
        height={4160}
        width={2774}
        className="object-cover block lg:hidden"
      />
    </div>
  );
};

export default Hero;
