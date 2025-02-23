import { motion } from "framer-motion";
import { useState } from "react";

interface CardServicioProps {
  titulo: string;
  descripcion: string;
  servicios: string[];
}

function CardServicio({ titulo, descripcion, servicios }: CardServicioProps) {
  const [showCard, setShowCard] = useState(false);

  return (
    <div className="flex flex-col w-full cursor-pointer"
          onClick={() => setShowCard(!showCard)}>
      <div
        className={`text-white w-full py-6 lg:px-12 px-4 flex justify-between items-center transition-all duration-300 ease-in-out
            ${showCard ? "bg-yellow-600" : "bg-yellow-300"}
            `}
      >
        <h2 className="text-2xl font-bold lg:text-5xl">{titulo}</h2>
        <div
          className="w-12 text-white "
        >
          <img
            src="iconos/plusb-solid.svg"
            alt=""
            className={`stroke-white stroke-2 transition-all duration-300 ease-in-out lg:w-12 lg:h-12 w-full h-8
                    ${showCard ? "rotate-45" : ""}
                    `}
          />
        </div>
      </div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: showCard ? "auto" : 0, opacity: showCard ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-full px-4 overflow-hidden shadow-lg md:px-12 bg-yellow-600"
      >
        <div className="flex flex-col w-full gap-4 py-8 text-white md:grid md:grid-cols-4 ">
          <p className="flex flex-col justify-center col-span-2">
            {descripcion}
          </p>
          <ul className="flex flex-col justify-center col-span-1 col-start-4 gap-1">
            {servicios.map((servicio, index) => (
              <li key={index} className="text-center md:text-end">
                {servicio}
              </li>
            ))}
          </ul>
          <a href="" className=" text-s_yellow">
            Know more...
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default CardServicio;
