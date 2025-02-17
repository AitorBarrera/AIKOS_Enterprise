import React from "react";
import Boton from "~/componentes/Boton";
import { useState } from "react";
import { motion } from "framer-motion";

function Header() {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <header>
      <nav>
        <div className="flex ">
          <Boton key={1} variant="aikos" text="aiko's" />

          <div
            className="ms-4"
            onMouseEnter={() => setShowNavbar(true)}
            onMouseLeave={() => setShowNavbar(false)}
          >
            <Boton key={2} variant="blanco" imagen="iconos/bars-solid.svg" />
          </div>

          <motion.div
            className="bg-white rounded shadow-lg ms-2"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: showNavbar ? 1 : 0, x: showNavbar ? 0 : -10 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={() => setShowNavbar(true)}
            onMouseLeave={() => setShowNavbar(false)}
          >
            <ul className="flex h-full text-black">
              <a href="">
                <li className="flex items-center h-full px-6 border-0 border-black border-e-2 hover:bg-grey">
                  About Us
                </li>
              </a>
              <a href="">
                <li className="flex items-center h-full px-6 border-0 border-black border-e-2 hover:bg-grey">
                  Contact
                </li>
              </a>
              <a href="">
                <li className="flex items-center h-full px-6 border-0 border-black border-e-2 hover:bg-grey">
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
