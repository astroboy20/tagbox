import { Design } from "@/container/Design";
import { Footer } from "@/components/Footer";
import { HeaderFixed } from "@/components/Header";
import React from "react";

const designs = () => {
  return (
    <>
      <HeaderFixed />
      <Design/>
      <Footer />
    </>
  );
};

export default designs;
