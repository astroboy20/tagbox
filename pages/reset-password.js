import { ForgotPass } from "@/container/Auth/ForgotPassword";
import React from "react";
import Head from "next/head";

const email = () => {
  return (
    <>
      {" "}
      <Head>
        <title>TagBox | Reset-Password</title>
        <meta name="description" content="TagBox" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/at.svg" />
      </Head>{" "}
      <>
        <ForgotPass />
      </>
    </>
  );
};

export default email;
