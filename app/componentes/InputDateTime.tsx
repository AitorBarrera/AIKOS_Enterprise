import React from "react";

function InputDateTime() {
  return (
    <div className="flex justify-between w-full p-2 text-white bg-p_ruby rounded-2xl">
      <input type="date" />
      <input type="time" />
    </div>
  );
}

export default InputDateTime;
