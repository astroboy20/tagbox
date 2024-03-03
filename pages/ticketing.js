import { Footer } from "@/components/Footer";
import { HeaderFixed } from "@/components/Header";
import ProtectedRoute from "@/container/ProtectedRoute/ProtectedRoute";
import { Ticketing } from "@/container/Ticketing";
import React from "react";

const ticketing = () => {
  return (
    <>
      <ProtectedRoute>
        <HeaderFixed />
        <Ticketing />
        <Footer />
      </ProtectedRoute>
    </>
  );
};

export default ticketing;
