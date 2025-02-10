import Footer from "~/componentes/Footer/Footer";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "AIKO's Enterprise" },
    { name: "description", content: "Welcome to aiko's" },
  ];
}

export default function Home() {
  return <Footer/>;
}
