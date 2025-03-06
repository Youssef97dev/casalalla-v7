import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Daypass from "./components/Daypass";
import Gallery from "./components/Gallery";
import SimpleMenu from "./components/SimpleMenu";
import Layout from "@/components/Layout";

const page = () => {
  return (
    <Layout
      title="Casa Lalla Takerkoust | Day Pass"
      description="Exquisite cuisine and amazing panoramic view"
    >
      <div className="bg-casa_1 w-full h-full flex flex-col justify-start items-center">
        <Navbar />
        <Daypass />
        <Gallery />
        <SimpleMenu />
        <Footer />
      </div>
    </Layout>
  );
};

export default page;
