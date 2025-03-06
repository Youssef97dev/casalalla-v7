import Loader from "./components/Loader";
import Head from "next/head";

export const metadata = {
  title: "Programming",
  description: "Exquisite cuisine and amazing panoramic view",
  favicon: "/favicon.ico",
};

const page = () => {
  return (
    <>
      <Head>
        <link rel="icon" href={metadata.favicon} />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <Loader />
    </>
  );
};

export default page;
