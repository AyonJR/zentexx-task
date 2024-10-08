import React from "react";
import { RiApps2AddFill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom"; // Use NavLink instead of Link
import { useAuth } from "../authentication/AuthContext";

const Navbar = () => {
  const { isAdmin, logout } = useAuth();

  return (
    <div>
      <header className="p-4 custom-font dark:text-gray-800">
        <div className="container items-center flex justify-between h-16 mx-auto">
          <h2 className="text-2xl font-bold bg-custom-gradient text-transparent bg-clip-text">
            Internship
          </h2>
          <ul className="flex items-center lg:gap-3 text-sm ">
            <li>
              {/* Use NavLink to conditionally apply styles */}
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center px-4 -mb-1 bg-custom-gradient text-transparent bg-clip-text"
                    : "flex items-center px-4 -mb-1 text-white"
                }
              >
                Home
              </NavLink>
            </li>

            {isAdmin ? (
              <Link to={'/updateDelete'}>
              <li className="flex items-center px-4 -mb-1">
                <a href="#" className=" text-[#007991] font-semibold hover:text-gray-300">
                  Admin 
                </a>
              </li>
              </Link>
            ) : (
              <li className="flex items-center px-4 -mb-1">
                <a href="#" className="text-white hover:text-gray-300">
                   About Us
                </a>
              </li>
            )}

            <li className="flex items-center px-4 -mb-1">
              <a href="#" className="text-white hover:text-gray-300">
                Products
              </a>
            </li>

            <li className="flex items-center px-4 -mb-1">
              <a href="#" className="text-white hover:text-gray-300">
                Payouts
              </a>
            </li>

            <li className="flex items-center px-4 -mb-1">
              <a href="#" className="text-white hover:text-gray-300">
                Affiliate
              </a>
            </li>

            <li className="flex items-center px-4 -mb-1">
              <a href="#" className="text-white hover:text-gray-300">
                Help Center
              </a>
            </li>
          </ul>

          <div className="items-center flex-shrink-0 hidden lg:flex">
            <div className="p-[2px] rounded-3xl bg-gradient-to-r from-[#007991] to-[#77FED6]">
              <NavLink to={isAdmin ? "/" : "/login"}>
                <button
                  className="w-full px-4 py-2 font-semibold rounded-3xl bg-black text-gray-50 flex items-center justify-center gap-2"
                  onClick={isAdmin ? logout : null}
                >
                  {isAdmin ? "" : <RiApps2AddFill className="text-2xl" />}
                  {isAdmin ? "Logout" : "Client Area"}
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
