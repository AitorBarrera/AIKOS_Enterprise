import React from "react";
import Boton from "~/componentes/Boton";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router";

function Header() {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <header>
      <nav>
        <div className="flex flex-col md:flex-row">
          <div className="flex">
            <NavLink to={"/"} className={({ isActive, isPending }) =>
                  isPending ? "" : isActive ? "pointer-events-none" : ""
                }>
              <Boton key={1} variant="aikos" text="aiko's" />
            </NavLink>

            <div
              className="ms-2"
              onMouseEnter={() => setShowNavbar(true)}
              onMouseLeave={() => setShowNavbar(false)}
            >
              <Boton key={2} variant="blanco" imagen="iconos/bars-solid.svg" />
            </div>
          </div>

          <motion.div
            className="bg-white shadow-lg ms-0 md:ms-2 mt-1 md:mt-0 translate-x-[72%] md:translate-x-0"
            initial={{ opacity: 0}}
            animate={{ opacity: showNavbar ? 1 : 0}}
            transition={{ duration: 0.2 }}
            onMouseEnter={() => setShowNavbar(true)}
            onMouseLeave={() => setShowNavbar(false)}
          >
            <ul className="flex flex-col h-full text-black md:flex-row ">
                <NavLink to={"about"} className={({ isActive, isPending }) =>
                  isPending ? "bg-amber-400" : isActive ? "bg-black text-white pointer-events-none" : ""
                }>
                <li className="flex items-center h-full px-6 py-2 text-center border-b-2 border-black md:border-b-0 md:border-e-2 hover:bg-grey md:py-0">
                  About Us
                </li>
                </NavLink>

              <NavLink to={"contact"} className={({ isActive, isPending }) =>
                  isPending ? "bg-amber-400" : isActive ? "bg-black text-white pointer-events-none" : ""
                }>
                <li className="flex items-center h-full px-6 py-2 text-center border-b-2 border-black md:border-b-0 md:border-e-2 hover:bg-grey md:py-0">
                  Contact
                </li>
              </NavLink>
              
              <NavLink to={"services"} className={({ isActive, isPending }) =>
                  isPending ? "bg-amber-400" : isActive ? "bg-black text-white pointer-events-none" : ""
                }>
                <li className="flex items-center h-full px-6 py-2 text-center border-b-2 border-black md:border-b-0 md:border-e-2 hover:bg-grey md:py-0">
                  Services
                </li>
              </NavLink>
            </ul>
          </motion.div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
