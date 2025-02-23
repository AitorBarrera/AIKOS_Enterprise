import React from "react";
import type { cardContactoVariant } from "~/types/types";

interface CardContactoProps {
  icono: string;
  texto: string;
  cardContactoVariant?: cardContactoVariant;
}

function CardContacto({ icono, texto, cardContactoVariant = "blanco" }: CardContactoProps) {
  const variants: Record<cardContactoVariant, string> = {
    blanco: " text-negro bg-white",
    negro: " text-blanco bg-transparent"
  };

  return (
    <div className={`flex flex-col items-center gap-4 p-4 border-4 rounded-2xl ${variants[cardContactoVariant]}`}>
      <img src={icono} alt="" className="w-[12.5%]" />
      <p className="text-3xl">{texto}</p>
    </div>
  );
}

export default CardContacto;
