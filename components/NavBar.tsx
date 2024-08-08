import Link from "next/link";
import React from "react";

export const NavBar = () => {
  return (
    <nav>
      <div className="flex flex-wrap items-center justify-between mx-auto p-8">
        <Link className="text-white font-semibold text-5xl" href={"/"}>Logo</Link>
        <div className="menu"></div>
      </div>
    </nav>
  );
};
