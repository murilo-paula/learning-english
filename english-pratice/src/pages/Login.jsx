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
        <form action="" className="grid grid-cols-1">
          <label className="flex justify-center mb-1">Email</label>
          <input
            type="email"
            name="put your email"
            id=""
            placeholder="your@gmail.com"
            className="h-7 bg-white rounded mb-3"
          />
          <label className="flex justify-center mb-1">password</label>
          <input
            type="password"
            name="put your password"
            id=""
            className="h-7 bg-white rounded mb-3"
            placeholder="***************"
          />
          <p className="flex text-emerald-500 cursor-pointer justify-end pb-3">
            Forgot your password?
          </p>
          <button className="h-8 bg-emerald-500 rounded text-black">
            log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
