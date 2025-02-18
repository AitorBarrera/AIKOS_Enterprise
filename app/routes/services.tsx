import React from 'react'
import "@fontsource/outfit";
import ContenedorCardServicios from '~/componentes/contenedorCardServicios/ContenedorCardServicios';

const serviciosList = [
  {
    titulo: "Servicio 1",
    descripcion: "Descripcion del servicio 1",
    servicios: ["1", "2", "3"]
  },
  {
    titulo: "Servicio 2",
    descripcion: "Descripcion del servicio 2", 
    servicios: ["1", "2", "3"]
  },
  {
    titulo: "Servicio 3",
    descripcion: "Descripcion del servicio 3",
    servicios: ["1", "2", "3"]
  }];

function services() {
  return (
  <>
  <div>Services</div>
  <ContenedorCardServicios CardServicios={serviciosList
    // <CardServicio titulo="Servicio 1" descripcion="Descripcion del servicio 1" servicios={["1", "2", "3"]}/>,
    // <CardServicio titulo="Servicio 2" descripcion="Descripcion del servicio 2" servicios={["1", "2", "3"]}/>, 
    // <CardServicio titulo="Servicio 3" descripcion="Descripcion del servicio 2" servicios={["1", "2", "3"]}/>
    }/>
  </>
  )
}

export default services