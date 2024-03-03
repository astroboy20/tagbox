import { Footer } from "@/components/Footer";
import { HeaderFixed } from "@/components/Header";
import { Profile } from "@/container/Profile";
import ProtectedRoute from "@/container/ProtectedRoute/ProtectedRoute";
import React from "react";

const profile = () => {
  return (
    <>
      <ProtectedRoute>
        <HeaderFixed />
        <Profile />
        <Footer />
      </ProtectedRoute>
    </>
  );
};

export default profile;
