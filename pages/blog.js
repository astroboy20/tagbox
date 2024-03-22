import { Footer } from "@/components/Footer";
import { HeaderFixed } from "@/components/Header";
import { Blog } from "@/container/Blog";
import ProtectedRoute from "@/container/ProtectedRoute/ProtectedRoute";
import React from "react";
import Head from "next/head";

const blog = () => {
  return (
    <>
      <Head>
        <title>TagBox | Blog</title>
        <meta name="description" content="TagBox" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/at.svg" />
      </Head>{" "}
      <>
        <ProtectedRoute>
          <HeaderFixed />
          <Blog />
          <Footer />
        </ProtectedRoute>
      </>
    </>
  );
};

export default blog;
