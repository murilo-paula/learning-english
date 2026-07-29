import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex w-screen h-screen items-center justify-center bg-gray-300">
      <div className="w-100 h-100 bg-blue-900 text-gray-400 rounded-2xl p-6">
        <h1 className="flex font-bold text-3xl text-white justify-center mb-3">
          Pratice English
        </h1>
        <h2 className="flex text-xl justify-center mb-1">
          Log in to your account
        </h2>
        <p className="flex items-center justify-center gap-2">
          <span>or</span>
          <span className="text-emerald-500 cursor-pointer"><Link to="/register">Register</Link></span>
        </p>
        <form action="login" method="POST" className="grid grid-cols-1">
          <label htmlFor="email" className="flex justify-center mb-1">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="your@gmail.com"
            className="h-7 bg-white rounded mb-3"
            required
          />
          <label htmlFor="password" className="flex justify-center mb-1">password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="h-7 bg-white rounded mb-3"
            placeholder="***************"
            required
            minLength={8}
          />
          <Link to="/register">
            <p className="flex text-emerald-500 hover:text-emerald-600 cursor-pointer justify-end pb-3">
              Forgot your password?
            </p>
          </Link>
          <button type="submit" className="h-8 bg-emerald-500 hover:bg-emerald-600 rounded text-white cursor-pointer">
            log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
