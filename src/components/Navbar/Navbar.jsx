import React from "react";
import { IoMdMenu } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import { motion } from "framer-motion";

const NavbarMenu = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Services", link: "#" },
  { id: 3, title: "About Us", link: "#" },
  { id: 4, title: "Our Team", link: "#" },
  { id: 5, title: "Contact Us", link: "#" },
];
const Navbar = () => {
  return (
    <nav className="relative z-20 ">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container  py-10  flex justify-between items-center "
      >
        {/* Logo Section */}
        <div>
          <h1 className="font-bold text-2xl">The Coding Journey</h1>
        </div>
        {/* Menu Section */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-4 cursor-pointer">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path}
                  className="inline-block py-2 px-3 hover:text-secondary relative group"
                >
                  <div
                    className="w-2 h-2 bg-secondary absolute mt-3  rounded-full left-1/2 -translate-x-1/2 top-1/2
                   bottom-0 group-hover:block hidden"
                  ></div>
                  {menu.title}
                </a>
              </li>
            ))}
            <button className="primary-btn">Sign In</button>
          </ul>
        </div>
        {/* Mobile Hmaerburger Section */}
        <div className="lg:hidden">
          <MdMenu className="text-4xl" />
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
