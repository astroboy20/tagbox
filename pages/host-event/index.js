import { Footer } from "@/components/Footer";
import { HeaderFixed } from "@/components/Header";
import { Events } from "@/container/Host/Events";
import { Hero } from "@/container/Host/Hero";
import ProtectedRoute from "@/container/ProtectedRoute/ProtectedRoute";
import React from "react";
import Head from "next/head";
const hostEvent = () => {
  return (
    <>
      <Head>
        <title>TagBox | Host-Event</title>
        <meta name="description" content="TagBox" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/at.svg" />
      </Head>{" "}
      <>
        <ProtectedRoute>
          <HeaderFixed />
          <Hero />
          <Events />
          <Footer />
        </ProtectedRoute>
      </>
    </>
  );
};

export default hostEvent;
