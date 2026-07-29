import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-900 flex justify-between p-4 text-white">
      <h1 className="font-bold text-lg">Pratice English</h1>
      <nav>
        <ul className="flex gap-5">
          <li className="hover:text-emerald-500">
            <Link to="About">About</Link>
          </li>
          <li className="hover:text-emerald-500">
            <Link to="login">Login</Link>
          </li>
          <li className="hover:text-emerald-500">
            <Link to="register">Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
