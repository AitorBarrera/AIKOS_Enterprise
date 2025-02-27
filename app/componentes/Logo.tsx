import { useEffect, useState } from "react";
import { getTheme, useDarkMode } from "~/hooks/useDarkMode";
import type { Theme, variantLogo } from "~/types/types";

interface LogoProps {
  variant?: variantLogo;
  width?: string;
  theme: Theme;
}

function Logo({ variant = "negro", width = "20%", theme ="light" }: LogoProps) {
  const variants: Record<Theme, string> = {
    light: "iconos/iakoslogob.svg",
    dark: "iconos/iakoslogobl.svg",
    system: "iconos/iakoslogobl.svg",
  };
  
  return (
    <img
      src={variants[theme]}
      alt={theme}
      className="h-auto max-w-full"
      style={{ width }}
    />
  );
}

export default Logo;
