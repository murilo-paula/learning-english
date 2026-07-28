import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUserStore } from "../../store/useStore.js";

const Sidebar = () => {

  const { user, updateUser } = useUserStore();
  

  const [sideOpen, setSideOpen] = useState(false);

  return (
    <div className="fixed left-0 top-0 z-50 flex">
      <aside
        className={`h-screen overflow-hidden bg-blue-900 transition-all duration-300 ease-in-out md:static ${
          sideOpen ? "w-screen md:w-64" : "w-0"
        }`}
      >
        <div
          className={`flex h-full w-screen flex-col transition-opacity duration-300 md:w-64 ${sideOpen ? "opacity-100" : "opacity-0"}`}
        >
          <div className="flex justify-between">
            <h2 className="mb-3 mt-3 items-center pl-4 text-center text-2xl text-emerald-500">
              🌐 Pratice English
            </h2>

            <div className="flex justify-center items-center mr-4 h-full">
              <button
                type="button"
                className={`h-8 w-8 rounded bg-emerald-500 text-white shadow-lg block md:hidden`}
                onClick={() => setSideOpen(!sideOpen)}
              >
                {sideOpen ? "X" : "☰"}
              </button>
            </div>
          </div>
          <hr className="text-gray-400" />
          <div className="flex flex-1 flex-col justify-between">
            <nav className="flex-1 min-w-64">
              <div>
                <ul className="text-center lg:text-left">
                  <li className="ml-2 mr-2 rounded py-5 lg:mb-3 lg:mt-3 lg:py-1 lg:pl-7 text-gray-400 transition-colors duration-300 hover:bg-blue-700 cursor-pointer">
                    <Link
                      to="Introduction"
                      className="block"
                      onClick={() => setSideOpen(!sideOpen)}
                    >
                      📕 Introduction
                    </Link>
                  </li>
                  <li className="ml-2 mr-2 rounded py-5 lg:mb-3 lg:mt-3 lg:py-1 lg:pl-7 text-gray-400 transition-colors duration-300 hover:bg-blue-700 cursor-pointer">
                    <Link
                      to="ImproveListening"
                      className="block"
                      onClick={() => setSideOpen(!sideOpen)}
                    >
                      👂 ImproveListening
                    </Link>
                  </li>
                  <li className="ml-2 mr-2 rounded py-5 lg:mb-3 lg:mt-3 lg:py-1 lg:pl-7 text-gray-400 transition-colors duration-300 hover:bg-blue-700 cursor-pointer">
                    <Link
                      to="Gamepage"
                      className="block"
                      onClick={() => setSideOpen(!sideOpen)}
                    >
                      📚 Gamepage
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
            <hr className="text-gray-400" />
            <div className="grid h-20 w-full grid-cols-2 lg:w-40">
              <div className="flex w-full justify-end">
                <div className="flex w-full max-w-20 rounded-full overflow-hidden border">
                  <img
                    src={user.avatar}
                    alt="User"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div> 
              <div className="flex h-full flex-col justify-center ml-2">
                <h3>{user.name}</h3>
                <h3 className="text-sm cursor-pointer transition-opacity duration-200 hover:opacity-70">
                  <Link to="editPerfil" onClick={() => setSideOpen(!sideOpen)}>
                    Edit perfil
                  </Link>
                </h3>
                <h3 className="text-sm cursor-pointer text-red-500 transition-opacity duration-200 hover:opacity-70">
                  <Link to="/">Sign out</Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <div
        className={`relative top-3 left-3 block ${sideOpen ? "hidden md:block" : "block"}`}
      >
        <button
          type="button"
          className={`absolute h-8 w-8 rounded bg-emerald-500 text-white shadow-lg cursor-pointer`}
          onClick={() => setSideOpen(!sideOpen)}
        >
          {sideOpen ? "X" : "☰"}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
