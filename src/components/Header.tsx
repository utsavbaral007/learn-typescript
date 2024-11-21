import { CSSProperties, ReactNode } from "react";

interface props {
  children: ReactNode;
  styles: CSSProperties
}

const Header = ({ children, styles }: props) => {
  return <div style={styles}>{children}</div>;
};

export default Header;
