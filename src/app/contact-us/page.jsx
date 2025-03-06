import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Content from "./components/Content";
import FormMessage from "./components/FormMessage";
import Mapbox from "./components/Mapbox";

export const metadata = {
  title: "Casa Lalla Takerkoust | Contact Us",
  description: "Exquisite cuisine and amazing panoramic view",
  favicon: "/favicon.ico",
};

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
