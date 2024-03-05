import React from "react";
import { OrgControl } from "./_components/org-control";
import { Sidebar } from "./_components/Sidebar";

export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <OrgControl />
      <div className="flex px-8 py-8 2xl:max-w-screen-2xl justify-center mx-auto relative">
        <div className="flex-[3]">
          <Sidebar />
        </div>
        <div className="flex-[8]">{children}</div>
      </div>
    </>
  );
}
