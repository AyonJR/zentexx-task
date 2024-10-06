import { RiApps2AddFill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <div>
      <header className="p-4 custom-font dark:text-gray-800">
        <div className="container items-center flex justify-between h-16 mx-auto">
          <h2 className="text-2xl font-bold bg-custom-gradient text-transparent bg-clip-text">
            Internship
          </h2>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <Link to="/">
                <a
                  rel="noopener noreferrer"
                  className={`flex items-center px-4 -mb-1 ${
                    location.pathname === "/" 
                      ? "bg-custom-gradient text-transparent bg-clip-text" 
                      : "text-white"
                  }`}
                >
                  Home
                </a>
              </Link>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 text-white"
              >
                About us
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 text-white"
              >
                Products
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 text-white"
              >
                Payouts
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 text-white"
              >
                Affiliate
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 text-white"
              >
                Help Center
              </a>
            </li>
          </ul>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <div className="p-[2px] rounded-3xl bg-gradient-to-r from-[#007991] to-[#77FED6]">
              <button className="w-full px-4 py-2 font-semibold rounded-3xl bg-black text-gray-50 flex items-center justify-center gap-2">
                <RiApps2AddFill className="text-2xl" />
                Client Area
              </button>
            </div>
          </div>
          <button className="p-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 dark:text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
