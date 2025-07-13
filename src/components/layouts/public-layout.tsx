import React from "react";
import PublicHeader from "./header";
import PublicFooter from "./footer";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <PublicHeader />
    <main className="bg-white flex-1">{children}</main>
    <PublicFooter />
    </>
  );
};

export default PublicLayout;
