import { ChangeEvent } from "react";

interface inputProps {
  value?: string;
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ value, handleChange }: inputProps) => {
  return (
    <input
      className="border mt-5 rounded-md outline-none px-3 py-1"
      type="text"
      defaultValue={value}
      onChange={handleChange}
    />
  );
};

export default Input;
