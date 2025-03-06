import Image from "next/image";

const Gallery = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-3 px-5 lg:px-32 py-5">
      <div className="w-full">
        <Image
          src="https://res.cloudinary.com/dz7wroord/image/upload/c_thumb,h_740,w_600/CasaLalla-VNor/f66rpshuoroemocbpbeg"
          height={740}
          width={600}
          className="object-cover"
        />
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-3">
        <Image
          src="https://res.cloudinary.com/dz7wroord/image/upload/c_thumb,h_600,w_1000/casalalla-v2/b2ungbcdzn3ogn0q9wph"
          height={600}
          width={1000}
          className="object-cover"
        />
        <Image
          src="https://res.cloudinary.com/dz7wroord/image/upload/c_thumb,h_600,w_1000/CasaLalla-VNor/kgr2b6b6i6llhc3o6rtb"
          height={600}
          width={1000}
          className="object-cover "
        />
      </div>
      <div className="w-full">
        <Image
          src="https://res.cloudinary.com/dz7wroord/image/upload/c_thumb,h_740,w_600/CasaLalla-VNor/cpeheqlzvbffghpvdiu0"
          height={740}
          width={600}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Gallery;
