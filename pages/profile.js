import { Footer } from "@/components/Footer";
import { HeaderFixed } from "@/components/Header";
import { Profile } from "@/container/Profile";
import ProtectedRoute from "@/container/ProtectedRoute/ProtectedRoute";
import React from "react";
import Head from "next/head"

const profile = () => {
  return (
    <> {" "}
    <Head>
      <title>TagBox | Profile</title>
      <meta name="description" content="TagBox" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/images/at.svg" />
    </Head>{" "}  <>
      <ProtectedRoute>
        <HeaderFixed />
        <Profile />
        <Footer />
      </ProtectedRoute>
    </></>
  
  );
};

export default profile;
