import { Footer } from "@/components/Footer";
import { Login } from "@/container/Auth/Login";
import React from "react";
import Head from "next/head";

const login = () => {
  return (
    <>
      <Head>
        <title>TagBox - Login</title>
        <meta name="description" content="TagBox" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/at.svg" />
      </Head>

      <>
        <Login />
        <Footer />
      </>
    </>
  );
};

export default login;
