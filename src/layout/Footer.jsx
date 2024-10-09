import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2">
            <h2 className="text-2xl font-bold bg-custom-gradient text-transparent bg-clip-text">
              Internship
            </h2>
            <h1 className="max-w-xs mt-5 text-sm font-normal tracking-tight text-gray-800 dark:text-gray-400">
              Interns work under the guidance of experienced professionals,
              allowing them to apply theoretical knowledge in real-world
              scenarios.
            </h1>

            {/* Social Icons */}
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
          </div>

          {/* All the Links */}
          <div>
            <p className="font-semibold text-gray-800 dark:text-white">Resources</p>
            <div className="flex flex-col text-sm mt-5 space-y-2">
              {["Support Center", "Community", "Join Discord", "Dashboard"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-600 hover:text-cyanCustom dark:text-gray-400 hover:underline"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <p className="font-semibold text-gray-800 dark:text-white">Quick Links</p>
            <div className="flex flex-col text-sm mt-5 space-y-2">
              {["Affiliate Program", "About Us", "Latest Post", "Contact Us"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-600 hover:text-cyanCustom dark:text-gray-400 hover:underline"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <p className="font-semibold text-gray-800 dark:text-white">Services</p>
            <div className="flex flex-col text-sm mt-5 space-y-2">
              {["Email", "Live Chat", "Help Centre", "Join Discord"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-600 hover:text-cyanCustom dark:text-gray-400 hover:underline"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        <hr className="my-4 border-gray-700 md:my-8 dark:border-cyanCustom" />

        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <p>@ 2024, All Rights Reserved</p>
          </div>
          <div className="flex gap-5 mt-4 md:mt-0">
            <p className="text-gray-600 hover:text-cyanCustom">Privacy Policy</p>
            <p className="text-gray-600 hover:text-cyanCustom">Terms & Conditions</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
