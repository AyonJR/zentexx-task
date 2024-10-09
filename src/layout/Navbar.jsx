import React, { useState } from "react";
import { RiApps2AddFill, RiMenu3Line, RiCloseLine } from "react-icons/ri"; // Import hamburger and close icons
import { Link, NavLink } from "react-router-dom"; // Use NavLink instead of Link
import { useAuth } from "../authentication/AuthContext";

const Navbar = () => {
  const { isAdmin, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false); // State to handle menu toggle

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu state
  };

  return (
    <div>
      <header className="p-4 custom-font dark:text-gray-800">
        <div className="container items-center flex justify-between h-16 mx-auto">
          <h2 className="text-2xl font-bold bg-custom-gradient text-transparent bg-clip-text">
            Internship
          </h2>

          {/* Hamburger Icon for small screens */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-white text-3xl">
              {menuOpen ? <RiCloseLine /> : <RiMenu3Line />}
            </button>
          </div>

          {/* Menu for larger screens */}
          <ul className="hidden lg:flex items-center lg:gap-3 text-sm">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center px-4 py-2 -mb-1 bg-custom-gradient text-transparent bg-clip-text"
                    : "flex items-center px-4 py-2 -mb-1 text-white"
                }
              >
                Home
              </NavLink>
            </li>

            {isAdmin ? (
              <li>
                <NavLink
                  to="/updateDelete"
                  className="text-[#007991] font-semibold hover:text-gray-300 px-4 py-2"
                >
                  Admin
                </NavLink>
              </li>
            ) : (
              <li>
                <NavLink
                  to="#"
                  className="text-white hover:text-gray-300 px-4 py-2"
                >
                  About Us
                </NavLink>
              </li>
            )}

            <li>
              <NavLink
                to="#"
                className="text-white hover:text-gray-300 px-4 py-2"
              >
                Products
              </NavLink>
            </li>

            <li>
              <NavLink
                to="#"
                className="text-white hover:text-gray-300 px-4 py-2"
              >
                Payouts
              </NavLink>
            </li>

            <li>
              <NavLink
                to="#"
                className="text-white hover:text-gray-300 px-4 py-2"
              >
                Affiliate
              </NavLink>
            </li>

            <li>
              <NavLink
                to="#"
                className="text-white hover:text-gray-300 px-4 py-2"
              >
                Help Center
              </NavLink>
            </li>
          </ul>

          {/* Mobile Menu */}
          <ul
            className={`${
              menuOpen ? "block" : "hidden"
            } lg:hidden bg-black absolute w-full left-0 top-16 flex flex-col items-center`}
          >
            <li className="text-center w-full">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center justify-center w-full px-4 py-2 bg-custom-gradient text-transparent bg-clip-text"
                    : "flex items-center justify-center w-full px-4 py-2 text-white"
                }
                onClick={() => setMenuOpen(false)} // Close menu on click
              >
                Home
              </NavLink>
            </li>

            {isAdmin ? (
              <li className="text-center w-full">
                <NavLink
                  to="/updateDelete"
                  className="text-[#007991] font-semibold hover:text-gray-300 w-full text-center px-4 py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  Admin
                </NavLink>
              </li>
            ) : (
              <li className="text-center w-full">
                <NavLink
                  to="#"
                  className="text-white hover:text-gray-300 w-full text-center px-4 py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  About Us
                </NavLink>
              </li>
            )}

            <li className="text-center w-full">
              <NavLink
                to="#"
                className="text-white hover:text-gray-300 w-full text-center px-4 py-2"
                onClick={() => setMenuOpen(false)}
              >
                Products
              </NavLink>
            </li>

            <li className="text-center w-full">
              <NavLink
                to="#"
                className="text-white hover:text-gray-300 w-full text-center px-4 py-2"
                onClick={() => setMenuOpen(false)}
              >
                Payouts
              </NavLink>
            </li>

            <li className="text-center w-full">
              <NavLink
                to="#"
                className="text-white hover:text-gray-300 w-full text-center px-4 py-2"
                onClick={() => setMenuOpen(false)}
              >
                Affiliate
              </NavLink>
            </li>

            <li className="text-center w-full">
              <NavLink
                to="#"
                className="text-white hover:text-gray-300 w-full text-center px-4 py-2"
                onClick={() => setMenuOpen(false)}
              >
                Help Center
              </NavLink>
            </li>

            {/* Added Login Page Option for Mobile Devices */}
            <li className="text-center w-full">
              <NavLink
                to="/login" // Link to the login page
                className="text-white hover:text-gray-300 w-full text-center px-4 py-2"
                onClick={() => setMenuOpen(false)} // Close menu on click
              >
                Login
              </NavLink>
            </li>
          </ul>

          {/* Button for Client Area / Logout */}
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
