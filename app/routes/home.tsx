import Footer from "~/componentes/Footer";
import type { Route } from "./+types/home";
import Logo from "~/componentes/Logo";
import DisplayComponente from "~/componentes/DisplayComponente";
import Boton from "~/componentes/Boton";
import "@fontsource/outfit";
import Header from "~/componentes/Header";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "AIKO's Enterprise" },
    { name: "description", content: "Welcome to aiko's" },
  ];
}

export default function Home() {
  return (
    <>
      <h2 className="mt-16 text-5xl font-extrabold text-center">COMPONENTES</h2>
      <DisplayComponente
        key={1}
        nombre="Logo"
        componentes={[
          <Logo variant="negro" width="40%" />,
          <Logo variant="ruby" width="40%" />,
        ]}
        descripcion="Logo corporativo"
      />

      <DisplayComponente
        key={2}
        nombre="Footer"
        componentes={[<Footer />]}
        descripcion="Footer"
      />

      <DisplayComponente
        key={3}
        nombre="Boton"
        componentes={[
          <Boton key={1} variant="aikos" text="aiko's" />,
          <Boton key={2} variant="blanco" imagen="iconos/bars-solid.svg" />,
          <Boton key={3} variant="ruby" text="boton" />,
          <Boton key={4} variant="blanco2" text="Enviar" />,
          <Boton key={5} variant="negro" text="boton" />,
        ]}
        descripcion="Boton"
      />

      <DisplayComponente
        key={5}
        nombre="Header"
        componentes={[<Header/>]}
        />
    </>
  );
}
