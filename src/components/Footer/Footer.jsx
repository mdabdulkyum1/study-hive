import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import logo from "../../assets/logo.png"; 

const Footer = () => {
  return (
    <footer className="bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <div className="flex  gap-6">
                <img src={logo} alt="StudyHive Logo" className="w-16 mb-4 rounded-lg" />
                <h1 className="text-primary dark:text-dark-text text-2xl font-bold">StudyHive</h1>
            </div>
            <p className="text-sm">
              StudyHive is your ultimate group study platform, designed to make
              learning collaborative and engaging. Create assignments, grade
              friends{"'"} work, and grow together!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="hover:text-light-accent dark:hover:text-dark-accent transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-light-accent dark:hover:text-dark-accent transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-light-accent dark:hover:text-dark-accent transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 text-xl">
              <Link
                to="#"
                className="hover:text-light-accent dark:hover:text-dark-accent transition"
              >
                <FaFacebookF />
              </Link>
              <Link
                to="#"
                className="hover:text-light-accent dark:hover:text-dark-accent transition"
              >
                <FaTwitter />
              </Link>
              <Link
                to="#"
                className="hover:text-light-accent dark:hover:text-dark-accent transition"
              >
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-light-border dark:border-dark-border pt-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} StudyHive. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
