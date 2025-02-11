import type { JSX } from "react"

interface DisplayComponenteProps {
  nombre : string,
  componente : JSX.Element,
  descripcion : string,
}

function DisplayComponente({nombre, componente, descripcion}: DisplayComponenteProps) {
  return (
    <div className="w-[80%] mx-auto">
      <h2 className="text-4xl font-bold text-center mt-16 mb-8">{nombre}</h2>
      <div className="flex">
        <div className="container border-2 rounded-lg shadow-lg w-[70%] p-16 max-h-100 flex">
          {componente}
        </div>
        <p className="px-16">{descripcion}</p>
      </div>
    </div>
  )
}

export default DisplayComponente