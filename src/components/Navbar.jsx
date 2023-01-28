import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-around px-12 h-14 items-center text-white bg-gray-700">
      <NavLink to={"/"}>
        <h1 className="text-xl font-semibold">Navbar</h1>
      </NavLink>
      <NavLink to={"/"} className={"text-xl no-underline"}>
        Home
      </NavLink>
      <NavLink to={'/register'}>Register</NavLink>
    </nav>
  );
}

export default Navbar;
