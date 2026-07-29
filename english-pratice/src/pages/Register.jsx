import React from "react";

const Register = () => {
  return (
    <div className="flex w-screen h-screen items-center justify-center bg-gray-300">
      <div className="w-100 h-100 bg-blue-900 text-gray-400 rounded-2xl p-6">
        <h1 className="flex font-bold text-3xl text-white justify-center mb-3">
          Pratice English
        </h1>

        <form action="" className="grid grid-cols-1">
          <label className="flex justify-center mb-1">Email</label>
          <input
            type="email"
            name="put your email"
            id=""
            className="h-7 bg-white rounded mb-3"
            placeholder="your@gmail.com"
          />

          <label className="flex justify-center mb-1">password</label>
          <input
            type="password"
            name="put your password"
            id=""
            className="h-7 bg-white rounded mb-3"
            placeholder="***************"
          />

          <label className="flex justify-center mb-1">repeat password</label>
          <input
            type="password"
            name="put your password again"
            id=""
            className="h-7 bg-white rounded mb-3"
            placeholder="***************"
          />

          <div className="flex items-start gap-2 mb-4">
            <input
              type="checkbox"
              id="terms"
              className="mt-1 h-4 w-4 rounded border-gray-300 bg-white"
            />
            <label htmlFor="" className="text-sm text-gray-100">
              <span>I have read and accept</span>{" "}
              <span className="text-emerald-500 cursor-pointer">
                the terms of use, software license terms,
              </span>{" "}
              <span>and content of Practice English.</span>
            </label>
          </div>

          <button className="h-8 bg-emerald-500 rounded text-black">
            log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
