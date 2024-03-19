import { ConfirmOtp } from "@/container/Auth/ForgotPassword";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

const confirmPass = () => {
  return (
    <>
    <ChakraProvider>
    <ConfirmOtp />
    </ChakraProvider>
     
    </>
  );
};

export default confirmPass;
