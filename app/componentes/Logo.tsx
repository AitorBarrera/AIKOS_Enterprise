import { useEffect } from "react";
import type { variantLogo } from "~/types/types";

interface LogoProps {
  variant?: variantLogo;
  width?: string;
}

function Logo({ variant = "negro", width = "20%" }: LogoProps) {
  const variants: Record<variantLogo, string> = {
    ruby: "iconos/iakoslogob.svg",
    negro: "iconos/iakoslogobl.svg",
    transparente: "iconos/iakoslogob.svg",
  };

  // useEffect(() => {
  //   const theme = localStorage.getItem("theme");
  //   if (theme === "dark") {
  //     logoVariant = variants.negro;
  //   } else {
  //     logoVariant = variants.ruby;
  //   }
  // }, []);
  
  // let logoVariant = (localStorage.getItem("theme") == "dark" ? "iconos/iakoslogobl.svg" : "iconos/iakoslogob.svg");

  return (
    <img
      src={variants[variant]}
      alt="logo"
      className="h-auto max-w-full"
      style={{ width }}
    />
  );
}

export default Logo;
