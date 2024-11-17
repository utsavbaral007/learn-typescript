import { ReactNode } from "react";

interface props {
  children: ReactNode;
}

const Header = ({ children }: props) => {
  return <div>{children}</div>;
};

export default Header;
