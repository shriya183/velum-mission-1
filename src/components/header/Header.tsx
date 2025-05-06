
import React from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "../theme/ThemeToggle";

const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-4 px-6 flex justify-between items-center">
      <Link to="/" className="text-lg font-semibold">
        Journal App
      </Link>
      <ThemeToggle />
    </header>
  );
};

export default Header;
