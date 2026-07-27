import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-900 flex justify-between p-4 text-white">
      <h1 className="font-bold text-lg">Pratice English</h1>
      <nav>
        <ul className="flex gap-5">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
