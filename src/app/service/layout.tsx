import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import React, { FC, ReactNode } from "react";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-slate-800 transition-all duration-1000 flex flex-col justify-start items-start overflow-x-hidden overflow-y-auto">
      <Navbar />
      <div className="mt-24"></div>
      {children}
      <section className="w-full" id="footer">
        <FooterSection />
      </section>
    </div>
  );
};

export default Layout;
