import React from "react";
import Logo from "./Logo";

function Footer() {
  return (
    <div className="flex flex-col w-full gap-8 px-4 py-4 text-black bg-white footer lg:grid lg:grid-cols-6">
      <div className="flex items-center justify-center col-span-1 lg:justify-start">
        <Logo variant="negro" width="3rem" />
        <div>
          <p className="mx-1">Enterprise</p>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-4 md:flex-row">
        <p className="w-[80%] lg:w-[80%] flex flex-col lg:flex-row justify-evenly items-center text-center text-sm lg:text-lg font-semibold gap-4">
          <a
            href=""
            className="relative after:absolute after:left-1/2 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-black after:transition-all 
            after:duration-300 after:translate-x-[-50%] hover:after:w-full"
          >
            Condiciones de uso
          </a>
          <span className="hidden lg:block">|</span>
          <a
            href=""
            className="relative after:absolute after:left-1/2 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-black after:transition-all 
            after:duration-300 after:translate-x-[-50%] hover:after:w-full"
          >
            Cookies
          </a>
          <span className="hidden lg:block">|</span>
          <a
            href=""
            className="relative after:absolute after:left-1/2 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-black after:transition-all 
            after:duration-300 after:translate-x-[-50%] hover:after:w-full"
          >
            Aviso de privacidad
          </a>
        </p>
      </div>
      <div className="flex justify-center w-full col-span-1 gap-8 lg:justify-end">
        <a href="" className="flex align-middle">
          <img src="iconos/RRSS/x.svg" alt="" className="w-8" />
        </a>
        <a href="" className="flex align-middle">
          <img src="iconos/RRSS/youtube.svg" alt="" className="w-8" />
        </a>
        <a href="" className="flex align-middle">
          <img src="iconos/RRSS/instagram.svg" alt="" className="w-8" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
