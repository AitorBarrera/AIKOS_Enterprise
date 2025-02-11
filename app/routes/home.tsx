import Footer from "~/componentes/Footer/Footer";
import type { Route } from "./+types/home";
import Logo from "~/componentes/Logo";
import DisplayComponente from "~/componentes/DisplayComponente";

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
