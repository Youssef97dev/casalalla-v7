import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import GalleryImage from "./components/GalleryImage";

export const metadata = {
  title: "Casa Lalla Takerkoust | Gallery",
  description: "Exquisite cuisine and amazing panoramic view",
  favicon: "/favicon.ico",
};

const page = () => {
  return (
    <div className="bg-casa_1 w-full h-full flex flex-col justify-start items-center">
      <Navbar />
      <Hero />
      <GalleryImage />
      <Footer />
    </div>
  );
};

export default page;
