import Navbar from "@/components/navbar";
import Mosaic from "@/components/mosaic";
import Head from "next/head";

const index = () => {
  return (
    <div>
      <Head>
        <title>Adrian Fabisiewicz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Navbar />
    <Mosaic />
    </div>
  );
};

export default index;