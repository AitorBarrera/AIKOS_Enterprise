
interface LogoProps{
    variant?: VariantLogo,
    width?: string,
}

function Logo({variant = "negro", width = "20%"}: LogoProps) {
const variants: Record<VariantLogo, string> = {
    ruby: "iconos/iakoslogob.svg",
    negro: "iconos/iakoslogobl.svg",
    };

  return (
    <img 
      src={variants[variant]} 
      alt="logo" 
      className={`h-auto w-[${width}] max-w-[100%]`}/>
  )
}

export default Logo