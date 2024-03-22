import { Footer } from "@/components/Footer";
import { Header, HeaderFixed } from "@/components/Header";
import { Manage } from "@/container/Host/ManageEvent";
import ProtectedRoute from "@/container/ProtectedRoute/ProtectedRoute";
import React from "react";
import Head from "next/head"

const manageEvent = () => {
  return (
    <>
      {" "}
      <Head>
        <title>TagBox | Manage-Event</title>
        <meta name="description" content="TagBox" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/at.svg" />
      </Head>{" "}
      <>
        <ProtectedRoute>
          <HeaderFixed />
          <Manage />
          <Footer />
        </ProtectedRoute>
      </>
    </>
  );
};

export default manageEvent;
