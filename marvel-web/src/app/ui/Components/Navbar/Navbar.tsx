import { FC } from "react";
import "./Navbar.css";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className="navbar-container">
      <div className="navbar-title">Navbar - Marvel Gate</div>
      <div className="navbar-input">
        <input placeholder="Your super..." />
      </div>
    </div>
  );
};

export default Navbar;
