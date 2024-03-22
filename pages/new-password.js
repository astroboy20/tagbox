import { NewPass } from "@/container/Auth/ForgotPassword";
import React from "react";
import Head from "next/head";

const newPasword = () => {
  return (
    <>
      {" "}
      <Head>
        <title>TagBox |New-Password</title>
        <meta name="description" content="TagBox" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/at.svg" />
      </Head>{" "}
      <>
        <NewPass />
      </>
    </>
  );
};

export default newPasword;
