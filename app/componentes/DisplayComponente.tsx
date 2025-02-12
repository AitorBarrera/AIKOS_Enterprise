import type { JSX } from "react"

interface DisplayComponenteProps {
  nombre : string,
  componentes : JSX.Element[],
  descripcion? : string,
}

function DisplayComponente({nombre, componentes, descripcion}: DisplayComponenteProps) {
  return (
    <div className="w-[80%] mx-auto">
      <div className="flex">
        <div className="container ">
          <h2 className="text-4xl font-bold text-center mt-16 mb-8">{nombre}</h2>
          <div className="border-2 rounded-lg shadow-lg w-[100%] p-16 max-h-100 flex justify-center gap-8">
              {componentes}
          </div>
        </div>
        {/* <p className="px-4">{descripcion}</p> */}
      </div>
    </div>
  )
}

export default DisplayComponente