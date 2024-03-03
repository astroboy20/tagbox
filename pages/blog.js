import { Footer } from "@/components/Footer";
import { HeaderFixed } from "@/components/Header";
import { Blog } from "@/container/Blog";
import ProtectedRoute from "@/container/ProtectedRoute/ProtectedRoute";
import React from "react";

const blog = () => {
  return (
    <>
      <ProtectedRoute>
        <HeaderFixed />
        <Blog />
        <Footer />
      </ProtectedRoute>
    </>
  );
};

export default blog;
