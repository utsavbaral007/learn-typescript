import { MouseEvent } from "react";

interface buttonPros {
  handleClick: (event: MouseEvent, id:number) => void;
}

const Button = ({ handleClick }: buttonPros) => {
  return (
    <button
      className="bg-blue-500 py-2 px-4 rounded-md text-white/80"
      onClick={e => handleClick(e, 32)}
    >
      Button
    </button>
  );
};

export default Button;
