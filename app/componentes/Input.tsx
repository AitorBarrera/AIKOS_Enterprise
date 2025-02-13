import { useState } from "react";

interface InputProps {
  placeholder?: string;
  type: "text" | "password" | "email" | "datetime-local";
  initialValue?: string;
  onChange?: (value: string) => void;
  isDisabled?: boolean;
  hasError?: boolean;
  errorMessage?: string;
}

function Input({
  placeholder = "",
  initialValue = "",
  onChange = () => console.log(''),
  type,
  isDisabled = false,
  hasError = false,
  errorMessage = "Error en el input",
}: InputProps) {
  const [value, setValue] = useState(initialValue);

  return (
    <div className="flex flex-col w-full font-semibold">
      <input
        className={`border py-2 px-4 rounded placeholder-grey focus:outline-none focus:ring-2 shadow-inner
          ${
            hasError
              ? "border-red-500 focus:ring-red-300"
              : "border-p_ruby-hover focus:ring-s_yellow-old"
          }
          ${isDisabled ? "bg-gray-200" : "bg-p_ruby-disable"} 
          `}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(event) => {
            console.log(event.target.value);
            setValue(event.target.value);
            onChange(event.target.value);
        }}
        disabled={isDisabled}
      />
      {hasError && <p className="text-red-500 text-xs">{errorMessage}</p>}
    </div>
  );
}

export default Input;