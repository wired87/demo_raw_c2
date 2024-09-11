"use client";
import React, { useState } from "react";
import Sidebar from "@/components/Dashboard/components/Sidebar";
import Header from "@/components/Dashboard/components/Header";

export default function DefaultLayout({
                                        children,
                                      }: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="flex">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-1 flex-col lg:ml-72.5">
          <Header  setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen}/>
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
