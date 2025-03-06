import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MenuWedding from "./components/MenuWedding";
import Gallery from "./components/Gallery";
import Layout from "@/components/Layout";

const Hero = dynamic(() => import("./components/Hero"), { ssr: false });
const BookWedding = dynamic(() => import("./components/BookWedding"), {
  ssr: false,
});

const page = () => {
  return (
    <Layout
      title="Casa Lalla Takerkoust | Wedding"
      description="Exquisite cuisine and amazing panoramic view"
    >
      <div className="bg-casa_1 w-full h-full flex flex-col justify-start items-center">
        <Navbar />
        <Hero />
        <BookWedding />
        <MenuWedding />
        <Gallery />
        <Footer />
      </div>
    </Layout>
  );
};

export default page;
