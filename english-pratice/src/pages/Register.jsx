import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex w-screen h-screen items-center justify-center bg-gray-300">
      <div className="w-100  bg-blue-900 text-gray-400 rounded-2xl p-6">
        <p className="fixed"> <Link to="/">X</Link> </p>
        <h1 className="flex font-bold text-3xl text-white justify-center mb-3">
          Pratice English
        </h1>

        <form className="grid grid-cols-1">
          <label htmlFor="Email" className="flex justify-center mb-1">Email</label>
          <input
            type="email"
            name="email"
            id="Email"
            className="h-7 bg-white rounded mb-3"
            placeholder="your@gmail.com"
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
          />

          <label htmlFor="repeat-password" className="flex justify-center mb-1">repeat password</label>
          <input
            type="password"
            name="repeat-password"
            id="repeat-password"
            className="h-7 bg-white rounded mb-3"
            placeholder="***************"
            required
          />

          <div className="flex items-start gap-2 mb-4">
            <input
              type="checkbox"
              id="terms"
              className="mt-1 h-4 w-4 rounded border-gray-300 bg-white"
              required
            />
            <label htmlFor="" className="text-sm text-gray-100">
              <span>I have read and accept</span>{" "}
              <span className="text-emerald-500 cursor-pointer">
                the terms of use, software license terms,
              </span>{" "}
              <span>and content of Practice English.</span>
            </label>
          </div>

          <button type="submit" className="h-8 bg-emerald-500 rounded text-white">
            Register
          </button>
        </form>

        <div className="flex justify-center w-full mt-3">
          <h1 className="font-bold text-red-500 text-2xl">Atualmente nao funciona</h1>
        </div>
      </div>
    </div>
  );
};

export default Register;
