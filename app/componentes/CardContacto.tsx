import React from "react";

interface CardContactoProps {
  icono: string;
  texto: string;
}

function CardContacto({ icono, texto }: CardContactoProps) {
  return (
    <div className="flex flex-col items-center gap-4 px-4 py-4 text-black bg-white border-4">
      <img src={icono} alt="" className="w-[12.5%]" />
      <p className="text-3xl">{texto}</p>
    </div>
  );
}

export default CardContacto;
