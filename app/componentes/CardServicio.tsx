import { motion } from "framer-motion";
import { useState } from "react";

interface CardServicioProps {
  key: number;
  titulo: string;
  descripcion: string;
  servicios: string[];
}

function CardServicio({ titulo, descripcion, servicios }: CardServicioProps) {
  const [showCard, setShowCard] = useState(false);

  return (
    <div className="flex flex-col w-full">
      <div
        className={`text-white  w-full py-6 px-12 flex justify-between items-center transition-all duration-300 ease-in-out
            ${showCard ? "bg-p_ruby-hover" : "bg-p_ruby"}
            `}
      >
        <h2 className="text-5xl font-bold">{titulo}</h2>
        <div
          className="w-12 text-white cursor-pointer "
          onClick={() => (showCard ? setShowCard(false) : setShowCard(true))}
        >
          <img
            src="iconos/plusb-solid.svg"
            alt=""
            className={`stroke-white stroke-2 transition-all duration-300 ease-in-out
                    ${showCard ? "rotate-45" : ""}
                    `}
          />
        </div>
      </div>

      <div
        className={`
            bg-p_ruby-hover w-full shadow-lg px-12 transition-[height] duration-300 ease-out overflow-hidden 
            ${showCard ? "h-[100%] opacity-100" : "h-0"}
        `}
      >
        <div
          className={`text-white w-full grid grid-cols-4 py-8
            `}
        >
          <p className="flex flex-col justify-center col-span-2">
            {descripcion}
          </p>
          <ul className="flex flex-col justify-center col-span-1 col-start-4 gap-1">
            {servicios.map((servicio) => (
              <li className="text-end">{servicio}</li>
            ))}
          </ul>
          <a href="" className="my-4 text-s_yellow">
            Know more...
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardServicio;
