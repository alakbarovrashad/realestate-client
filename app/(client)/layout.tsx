import React from "react";
import ClientHeader from "@/components/ClientHeader";
import ClientFooter from "@/components/ClientFooter";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <ClientHeader />
      <main className="flex-1 container mx-auto px-4">{children}</main>
      <ClientFooter />
    </div>
  );
};

export default ClientLayout;
