import React from "react";
import Selectors from "./Selectors";
import "./Navbar.css";
import UseTheme from "../hooks/UseTheme";

export default function Navbar() {
  const { color } = UseTheme();
  return (
    <nav className="navbar">
      <h1 style={{ color: color }}>Context Challenge</h1>
      <Selectors />
    </nav>
  );
}
