import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Content from "./components/Content";
import FormMessage from "./components/FormMessage";

const page = () => {
  return (
    <div className="bg-casa_2 w-full h-full flex flex-col justify-start items-center">
      <Navbar />
      <Content />
      <FormMessage />
      <Footer />
    </div>
  );
};

export default page;
