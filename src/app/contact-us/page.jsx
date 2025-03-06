import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Content from "./components/Content";
import FormMessage from "./components/FormMessage";
import Mapbox from "./components/Mapbox";
import Layout from "@/components/Layout";

const page = () => {
  return (
    <Layout
      title="Casa Lalla Takerkoust | Contact Us"
      description="Exquisite cuisine and amazing panoramic view"
    >
      <div className="bg-casa_2 w-full h-full flex flex-col justify-start items-center">
        <Navbar />
        <Content />
        <FormMessage />
        <Mapbox />
        <Footer />
      </div>
    </Layout>
  );
};

export default page;
