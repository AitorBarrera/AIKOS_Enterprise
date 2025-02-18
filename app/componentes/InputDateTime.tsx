import React from "react";

function InputDateTime() {
  return (
    <div className="flex flex-col justify-between w-full p-2 text-white md:flex-row bg-p_ruby rounded-2xl">
      <input type="date" />
      <input type="time" />
    </div>
  );
}

export default InputDateTime;
