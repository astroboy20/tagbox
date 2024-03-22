import { Footer } from "@/components/Footer";
import { HeaderFixed } from "@/components/Header";
import ProtectedRoute from "@/container/ProtectedRoute/ProtectedRoute";
import { Ticketing } from "@/container/Ticketing";
import React from "react";
import Head from "next/head"

const ticketing = () => {
  return (
    <>
      {" "}
      <Head>
        <title>TagBox | Ticketing</title>
        <meta name="description" content="TagBox" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/at.svg" />
      </Head>{" "}
      <>
        <ProtectedRoute>
          <HeaderFixed />
          <Ticketing />
          <Footer />
        </ProtectedRoute>
      </>
    </>
  );
};

export default ticketing;
