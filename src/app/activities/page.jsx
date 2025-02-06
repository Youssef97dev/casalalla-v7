import Navbar from "@/components/Navbar";
import Hero from "./components/Hero";
import ActivitiesContent from "./components/ActivitiesContent";
import Gallery from "./components/Gallery";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div className="bg-casa_1 w-full h-full flex flex-col justify-start items-center">
      <Navbar />
      <Hero />
      <ActivitiesContent />
      <Gallery />
      <Footer />
    </div>
  );
};

export default page;
