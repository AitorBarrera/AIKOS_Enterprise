import { motion } from "framer-motion";
import { useState } from "react";

interface CardServicioProps {
    key: number,
    titulo: string,
    descripcion: string,
    servicios: string[],
}

function CardServicio({ titulo, descripcion, servicios}: CardServicioProps) {
  const [showCard, setShowCard] = useState(false);

  return (
    <div className="flex flex-col w-full">
        <div 
        className={`text-white  w-full py-6 px-12 flex justify-between items-center transition-all duration-300 ease-in-out
            ${showCard? "bg-p_ruby-hover": "bg-p_ruby"}
            `}
        >
            <h2 className="text-5xl font-bold">{titulo}</h2>
            <div className="text-white w-12 cursor-pointer " 
            onClick={() => showCard? setShowCard(false): setShowCard(true)}>
                <img src="iconos/plus-solid.svg" alt="" className={`stroke-white stroke-2 transition-all duration-300 ease-in-out
                    ${showCard? "rotate-45": ""}
                    `}/>
            </div>
        </div>

        <div
        className={`
            bg-p_ruby-hover w-full shadow-lg px-12 transition-[height] duration-300 ease-out overflow-hidden 
            ${showCard? "h-[100%] opacity-100": "h-0"}
        `}
        >
            <div 
            className={`text-white w-full grid grid-cols-4 py-8
            `}>
                <p className="col-span-2 flex flex-col justify-center">{descripcion}</p>
                <ul className="col-start-4 col-span-1 flex flex-col justify-center gap-1">
                    {servicios.map((servicio) => (
                        <li className="text-end">{servicio}</li>
                    )) }
                </ul>
                <a href="" className="text-s_yellow my-4">Know more...</a>
            </div>

        </div>
    </div>
  )
}

export default CardServicio