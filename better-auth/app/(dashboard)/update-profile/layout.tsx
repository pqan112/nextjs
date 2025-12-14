import SignOutButton from "@/components/sign-out-btn";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-dvh overflow-hidden">
      <nav className="w-full flex justify-end items-center pr-6 h-16  mb-6 overflow-hidden bg-neutral-50">
        <SignOutButton />
      </nav>
      {children}
    </div>
  );
}
