type variant = "blanco" | "negro" | "ruby";

interface ButtonProps {
    key: number,
    text?: string;
    variant?: variant;
    onClick?: (text: string) => void;
}

function Button({ text = "boton", variant = "ruby", onClick = () => console.log('Probando boton')}: ButtonProps) {
    const variants: Record< variant, string> = {
        blanco: "text-black bg-white hover:bg-grey",
        negro: "text-white bg-black hover:bg-stone-900",
        ruby: "text-white bg-p_ruby hover:bg-p_ruby-hover"
    }
  return (
    <button 
    className= {`font-bold py-2 px-4 rounded hover:cursor-pointer ${variants[variant]} `}
    onClick={() => onClick(text)}
    >{text}</button>
  )
}

export default Button