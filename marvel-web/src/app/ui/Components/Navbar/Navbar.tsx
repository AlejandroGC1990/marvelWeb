import { FC } from "react";
import "./Navbar.css";
import Link from "next/link";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className="navbar-container">
      <Link href="/" className="navbar-title">Navbar - Marvel Gate</Link>
      <div className="navbar-input">
        <input placeholder="Your super..." />
      </div>
    </div>
  );
};

export default Navbar;
