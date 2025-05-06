
import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-4 px-6 flex justify-between items-center">
      {/* Removed the Journal App text that was here */}
      <div></div>
      {/* Removed the ThemeToggle component that was here */}
    </header>
  );
};

export default Header;
