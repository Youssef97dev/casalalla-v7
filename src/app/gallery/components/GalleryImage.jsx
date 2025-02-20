import Image from "next/image";

const media = [
  {
    type: "image",
    url: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/e28ypfnpoadluzx8wtsy",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/ycfub6xp8gjuz3gla8xh",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/r4wuo58bxhpnhufpaeis",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/izirylze8wxm7adeaewb",
  },
  {
    type: "video",
    url: "/video22.mp4",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casa%20Lalla/w3fer4hdvbzc1mcla9c3",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casa%20Lalla/ojybmuxnsftkryhs4ux1",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casa%20Lalla/ebol3p21f6cjzaei9duu",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casa%20Lalla/i7mqgy4ik8mhnsj6iecr",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casa%20Lalla/jb3ab9pc0rc8sopxwnhi",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casa%20Lalla/wi3nmf7jmw4awu1zehtk",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casa%20Lalla/gozcno1zhxhtooewuzhh",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casa%20Lalla/ire8b4lttkaofa5scit3",
  },

  {
    type: "image",
    url: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casa%20Lalla/mqjl5dq6d9binkadxuk7",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casa%20Lalla/L-167_uhoybh",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casa%20Lalla/casa15_zsi2sk",
  },
];

const GalleryImage = () => {
  return (
    <div className="mx-auto py-5 px-4">
      <div className="masonry">
        {media.map((item, index) => (
          <div
            key={index}
            className="masonry-item relative shadow-lg hover:scale-105 transition-all ease-linear overflow-hidden"
          >
            {item.type === "image" ? (
              <Image
                src={item.url}
                alt={`Image casa lalla takerkoust ${index}`}
                layout="responsive"
                width={300}
                height={300}
                className="rounded-sm"
              />
            ) : (
              <video
                src={item.url}
                controls
                className="rounded-sm w-full"
                width="300"
                height="300"
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryImage;
