import Footer from "~/componentes/Footer/Footer";
import type { Route } from "./+types/home";
import Logo from "~/componentes/Logo";
import DisplayComponente from "~/componentes/DisplayComponente";
import Boton from "~/componentes/Boton";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "AIKO's Enterprise" },
    { name: "description", content: "Welcome to aiko's" },
  ];
}

export default function Home() {
  return (
    <>
    <h2 className="text-center text-5xl mt-16 font-extrabold">COMPONENTES</h2>
      <DisplayComponente 
        nombre="Logo" 
        componentes={[
          <Logo variant="negro" width="40%"/>,
          <Logo variant="ruby" width="40%"/>
        ]} 
        descripcion="Logo corporativo"
      />

      <DisplayComponente 
        nombre="Footer" 
        componentes={[<Footer/>]} 
        descripcion="Footer"
      />

      <DisplayComponente 
        nombre="Boton" 
        componentes={[
          <Boton key={1} variant="negro"/>, 
          <Boton key={2} variant="blanco"/>,
          <Boton key={3} variant="ruby"/>
        ]} 
        descripcion="Boton"
      />
      
    </>
  );
}
