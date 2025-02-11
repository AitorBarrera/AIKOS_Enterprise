
interface LogoProps{
    variant?: VariantLogo,
}

function Logo({variant = "negro"}: LogoProps) {
const variants: Record<VariantLogo, string> = {
    ruby: "iconos/iakoslogob.svg",
    negro: "iconos/iakoslogobl.svg",
    };

  return (
    <img src={variants[variant]} alt="logo" className="h-auto max-w-[100%]"/>
  )
}

export default Logo