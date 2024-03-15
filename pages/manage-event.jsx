import { Footer } from "@/components/Footer";
import { Header, HeaderFixed } from "@/components/Header";
import { Manage } from "@/container/Host/ManageEvent";
import ProtectedRoute from "@/container/ProtectedRoute/ProtectedRoute";
import React from "react";

const manageEvent = () => {
  return (
    <div>
      <ProtectedRoute>
        <HeaderFixed />
        <Manage />
        <Footer />
      </ProtectedRoute>
    </div>
  );
};

export default manageEvent;
