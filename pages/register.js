import { Footer } from "@/components/Footer";
import { Register } from "@/container/Auth/Register";
import React from "react";
import Head from "next/head";

const register = () => {
  return (
    <>
      {" "}
      <Head>
        <title>TagBox | Register</title>
        <meta name="description" content="TagBox" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/at.svg" />
      </Head>{" "}
      <>
        <Register />
        <Footer />
      </>
    </>
  );
};

export default register;
