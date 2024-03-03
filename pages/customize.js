import { Design } from "@/container/Design";
import { Footer } from "@/components/Footer";
import { HeaderFixed } from "@/components/Header";
import React from "react";
import ProtectedRoute from "@/container/ProtectedRoute/ProtectedRoute";

const designs = () => {
  return (
    <>
      <ProtectedRoute>
        <HeaderFixed />
        <Design />
        <Footer />
      </ProtectedRoute>
    </>
  );
};

export default designs;
