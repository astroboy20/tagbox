import { Footer } from "@/components/Footer";
import { HeaderFixed } from "@/components/Header";
import { Blog } from "@/container/Blog";
import React from "react";

const blog = () => {
  return (
    <>
      <HeaderFixed />
      <Blog />
      <Footer />
    </>
  );
};

export default blog;
