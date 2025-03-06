import Loader from "./components/Loader";
import Layout from "@/components/Layout";

const page = () => {
  return (
    <Layout
      title="Casa Lalla Takerkoust | Booking"
      description="Exquisite cuisine and amazing panoramic view"
    >
      <Loader />
    </Layout>
  );
};

export default page;
