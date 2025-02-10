import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Content from "./components/Content";
import FormMessage from "./components/FormMessage";
import Mapbox from "./components/Mapbox";

const page = () => {
  return (
    <div className="bg-casa_2 w-full h-full flex flex-col justify-start items-center">
      <Navbar />
      <Content />
      <FormMessage />
      <Mapbox />
      <Footer />
    </div>
  );
};

export default page;
