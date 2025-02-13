type variant = "blanco" | "blanco2" | "negro" | "ruby" | "aikos";

interface ButtonProps {
  text?: string;
  variant?: variant;
  imagen?: string;
  onClick?: (text: string) => void;
}

function Button({
  text,
  variant = "ruby",
  onClick = () => console.log("Probando boton"),
  imagen,
}: ButtonProps) {
  const variants: Record<variant, string> = {
    blanco: "text-black bg-white hover:bg-grey",
    blanco2: "text-p_ruby bg-white hover:bg-p_ruby-hover hover:text-white",
    negro: "text-white bg-black hover:bg-stone-900",
    ruby: "text-white bg-p_ruby hover:bg-p_ruby-hover",
    aikos: "text-black bg-white hover:text-white hover:bg-black",
  };

  return (
    <button
      className={`font-bold py-2 px-4 rounded hover:cursor-pointer ${variants[variant]} flex items-center justify-center`}
      onClick={() => onClick(text || "")}
    >
      {imagen && <img src={imagen} alt={text} className="w-6 h-6" />}
      {text}
    </button>
  );
}

export default Button;
