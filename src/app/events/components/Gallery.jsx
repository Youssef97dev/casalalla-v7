import Image from "next/image";

const images = [
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/hg0ykixiwpvehv9hdm4s",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/og9byamwkz7hcphqlxsk",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/jfdaoehyg6ro3ei6eeqs",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/prpqg6qvbzkgcrqhqlpz",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/rixavtohk5qolpbtghy2",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/ijf7z5lbtwayp94imo8s",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/i69kogh7plg5ejp4i3by",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/eayjwgwvofxlpf3qguso",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/j3micvmlxad8p74qiqmv",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/al4bcdkfinrevudk8zeq",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/cgww8rhzu6tppbuijmei",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/q2nzpahlmh9ptokalfbk",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/isyw8qmpv2eqyliz7jq4",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/gqv9wtwifxewduw2bkxl",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/wchy9aktwnjg2e0kshio",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/cpeheqlzvbffghpvdiu0",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/jfziloryimjajcbxuj0k",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/alq72roudpmfktyfu5k2",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/ud4poelfjicsedkvxc6q",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/mguv84339wzg6mbyeyel",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/qhiocnbz1aqhvzirfzhi",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/k530wqfiey0i2d9fhvow",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/irjsnwijta06o7jrx8yf",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/hnwydmpvhljw0eietnnw",
];

const Gallery = () => {
  return (
    <div className="bg-casa_2 mx-auto py-5 px-4 mt-3">
      <div className="masonry">
        {images.map((src, index) => (
          <div
            key={index}
            className="masonry-item relative shadow-lg hover:scale-105 transition-all ease-linear overflow-hidden"
          >
            <Image
              src={src}
              alt={`Image casa lalla takerkoust ${index}`}
              layout="responsive"
              width={300}
              height={300}
              className="rounded-sm"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
