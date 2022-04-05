import styled from "styled-components";
import UseTheme from "../hooks/UseTheme";
import ThemeSelector from "./ThemeSelector";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
`;

const H1 = styled.h1`
  color: #e8b4b8;
  &.dark {
    color: #67595e;
  }
`;

export default function Navbar() {
  const { mode } = UseTheme();
  return (
    <Nav className="navbar">
      <H1 className={`${mode}`}>Book ContextAPI</H1>
      <ThemeSelector />
    </Nav>
  );
}
