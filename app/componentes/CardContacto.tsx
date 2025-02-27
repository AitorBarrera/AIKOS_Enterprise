import React from "react";
import type { cardContactoVariant, Theme } from "~/types/types";

interface CardContactoProps {
  icono: string;
  texto: string;
  theme?: Theme;
}

function CardContacto({ icono, texto, theme}: CardContactoProps) {
console.log("thme contacto: " + theme);

  return (
    <div className={`flex flex-col items-center gap-4 p-4 border-4 rounded-2xl dark:bg-white dark:text-black`}>
      <img src={`${icono}${theme=="light"? "2": ""}`} alt="" className="w-10" />
      <p className="text-regular">{texto}</p>
    </div>
  );
}

export default CardContacto;
