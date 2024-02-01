import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-900">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link href={"/"}>
          <h3 className="text-3xl font-bold">NextCRUD</h3>
        </Link>
        <ul className="flex gap-x-2 text-lg font-bold">
          <li>
            <Link href={"/new"} className="text-slate-300 hover:text-slate-200">
              New
            </Link>
          </li>
          <li className="text-slate-300 hover:text-slate-200">
            <Link href={"/about"}>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
