import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-end text-xl font-bold mx-4">
      <Link
        className="p-4 rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 "
        to="/"
      >
        Home
      </Link>
      <Link
        className="p-4 rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 "
        to="/about"
      >
        About
      </Link>
      <Link
        className="p-4 rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 "
        to="/users"
      >
        users
      </Link>
      <Link
        className="p-4 rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 "
        to="/login"
      >
        login
      </Link>
      <Link
        className="p-4 rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 "
        to="/userredux"
      >
        userredux
      </Link>
    </nav>
  );
}

export default Navbar;
