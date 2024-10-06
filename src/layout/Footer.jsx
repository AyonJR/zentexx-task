import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2">
            <div>
              <h2 className="text-2xl font-bold bg-custom-gradient text-transparent bg-clip-text">
                Internship
              </h2>
            </div>
            <h1 className="max-w-xs mt-5 text-sm font-normal tracking-tight text-gray-800  dark:text-gray-400">
              Interns work under the guidance of experienced professionals,
              allowing them to apply theoretical knowledge in real-world
              scenarios.
            </h1>

            {/* social icons */}
            <div className="flex text-white gap-4 mt-6">
              <button className="p-2 bg-gray-900 rounded-lg">
                <FaFacebook size={18} />
              </button>
              <button className="p-2 bg-custom-gradient rounded-lg">
                <FaInstagram size={20} />
              </button>
              <button className="p-2 bg-gray-900 rounded-lg">
                <FaTwitter size={18} />
              </button>
              <button className="p-2 bg-gray-900 rounded-lg">
                <FaLinkedin size={18} />
              </button>
            </div>

            <div className="flex flex-col mt-6 md:flex-row"></div>
          </div>

          {/*All the links  */}

          <div>
            <p className="font-semibold   text-gray-800 dark:text-white">
              Resources
            </p>
            <div className="flex flex-col text-sm mt-5 space-y-2">
              <a
                href="#"
                className="text-gray-600 hover:text-cyanCustom dark:text-gray-400 hover:underline"
              >
                Support Center
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-cyanCustom dark:text-gray-400 hover:underline"
              >
                Community
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-cyanCustom dark:text-gray-400 hover:underline"
              >
                Join Discord
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-cyanCustom dark:text-gray-400 hover:underline"
              >
                Dashboard
              </a>
            </div>
          </div>
          <div>
            <p className="font-semibold text-gray-800 dark:text-white">
              Quick Links
            </p>

            <div className="flex text-sm flex-col mt-5 space-y-2">
              <a
                href="#"
                className="text-gray-600 hover:text-cyanCustom dark:text-gray-400 hover:underline"
              >
                Affiliate Program
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-cyanCustom dark:text-gray-400 hover:underline"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-cyanCustom dark:text-gray-400 hover:underline"
              >
                Latest Post
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-cyanCustom dark:text-gray-400 hover:underline"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div>
            <p className="font-semibold text-gray-800 dark:text-white">
              Services
            </p>

            <div className="flex text-sm flex-col mt-5 space-y-2">
              <a
                href="#"
                className="text-gray-600 hover:text-cyanCustom dark:text-gray-400 hover:underline"
              >
                Email
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-cyanCustom dark:text-gray-400 hover:underline"
              >
                Live Chat
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-cyanCustom dark:text-gray-400 hover:underline"
              >
                Help Centre
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-cyanCustom dark:text-gray-400 hover:underline"
              >
                Join Discord
              </a>
            </div>
          </div>
        </div>

        <hr className="my-4 border-gray-700 md:my-8 dark:border-cyanCustom" />

        <div className="flex items-center justify-between">
          <div>
            <p>@ 2024, All Rights Reserved </p>
          </div>
          <div>
            <div className="flex gap-5">
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
