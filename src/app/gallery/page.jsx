import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import GalleryImage from "./components/GalleryImage";

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
