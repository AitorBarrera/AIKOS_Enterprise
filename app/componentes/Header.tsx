import React from "react";
import Boton from "~/componentes/Boton";
import { useState } from "react";
import { motion } from "framer-motion";

function Header() {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <header>
      <nav>
        <div className="flex flex-col md:flex-row">
          <div className="flex"> 
            <Boton key={1} variant="aikos" text="aiko's" />

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
            <ul className="flex flex-col md:flex-row h-full text-black ">
              <a href="">
                <li className="flex items-center h-full px-6 border-black border-b-2 md:border-e-2 hover:bg-grey py-2 md:py-0 text-center">
                  About Us
                </li>
              </a>
              <a href="">
                <li className="flex items-center h-full px-6 border-black border-b-2 md:border-e-2 hover:bg-grey py-2 md:py-0 text-center">
                  Contact
                </li>
              </a>
              <a href="">
                <li className="flex items-center h-full px-6 border-black border-b-2 md:border-e-2 hover:bg-grey py-2 md:py-0 text-center">
                  Services
                </li>
              </a>
            </ul>
          </motion.div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
