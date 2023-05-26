import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "@/components/navbar";
import Head from "next/head";

const index = () => {
  return (
    <div>
      <Head>
        <title>Adrian Fabisiewicz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Navbar />
    {/* <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router> */}
    </div>
  );
};

export default index;