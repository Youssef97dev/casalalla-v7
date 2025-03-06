import Navbar from "@/components/Navbar";
import Layout from "@/components/Layout";

import dynamic from "next/dynamic";
const Hero = dynamic(() => import("./components/Hero"), { ssr: false });
const ActivitiesContent = dynamic(
  () => import("./components/ActivitiesContent"),
  { ssr: false }
);
const Gallery = dynamic(() => import("./components/Gallery"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

const page = () => {
  return (
    <Layout
      title="Casa Lalla Takerkoust | Activities"
      description="Exquisite cuisine and amazing panoramic view"
    >
      <div className="bg-casa_1 w-full h-full flex flex-col justify-start items-center">
        <Navbar />
        <Hero />
        <ActivitiesContent />
        <Gallery />
        <Footer />
      </div>
    </Layout>
  );
};

export default page;
