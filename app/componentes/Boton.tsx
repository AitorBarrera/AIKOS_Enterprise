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
    blanco: "px-2 text-black bg-white hover:bg-grey h-full self-stretch",
    blanco2: "px-12 text-p_ruby bg-white hover:bg-p_ruby-hover hover:text-white",
    negro: "px-4 text-white bg-black hover:bg-stone-900",
    ruby: "px-4 text-white bg-p_ruby hover:bg-p_ruby-hover",
    aikos: "px-6 text-2xl text-black bg-white hover:text-white hover:bg-black",
  };

  return (
    <button
      className={`self-center font-bold py-2  rounded hover:cursor-pointer ${variants[variant]} flex items-center justify-center`}
      onClick={() => onClick(text || "")}
    >
      {imagen && <img src={imagen} alt={text} className="w-8 h-8" />}
      {text}
    </button>
  );
}

export default Button;
