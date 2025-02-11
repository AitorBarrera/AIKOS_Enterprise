import Footer from "~/componentes/Footer/Footer";
import type { Route } from "./+types/home";
import Logo from "~/componentes/logo";
import DisplayComponente from "~/componentes/displayComponente";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "AIKO's Enterprise" },
    { name: "description", content: "Welcome to aiko's" },
  ];
}

export default function Home() {
  return (
    <>
    <input type="datetime-local"></input>
      <DisplayComponente nombre="Logo" componente={<Logo/>} descripcion="Logo corporativo"/>
      <DisplayComponente nombre="Footer" componente={<Footer/>} descripcion="Footer"/>
      
    </>
  );
}
