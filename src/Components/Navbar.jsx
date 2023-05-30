import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto text-white">
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">
          Otofast Project
        </h1>
      </div>
      <nav className="">
        <ul className="hidden md:flex">
          <li className="p-4">
            <Link to="/home">Home</Link>
          </li>
          <li className="p-4">
            <Link to="/resources">Resources</Link>
          </li>
          <li className="p-4">
            <Link to="/company">Company</Link>
          </li>
          <li className="p-4">
            <Link to="/about">About</Link>
          </li>
          <li className="p-4">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
//Demo