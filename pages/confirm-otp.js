import { ConfirmOtp } from "@/container/Auth/ForgotPassword";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
const confirmPass = () => {
  return (
    <>
      {" "}
      <Head>
        <title>TagBox | Confirm-OTP</title>
        <meta name="description" content="TagBox" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/at.svg" />
      </Head>{" "}
      <>
        <ChakraProvider>
          <ConfirmOtp />
        </ChakraProvider>
      </>
    </>
  );
};

export default confirmPass;
