import toggleIcon from "../assets/toggle-icon.svg";
import UseTheme from "../hooks/UseTheme";

const ThemeSelector = () => {
  const { mode, changeMode } = UseTheme();
  const toggleMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };
  return (
    <div>
      <img
        onClick={toggleMode}
        src={toggleIcon}
        alt="dar/light toggle icon"
        style={{ filter: mode === "dark" ? "invert(80%)" : "invert(20%)" }}
      />
    </div>
  );
};

export default ThemeSelector;
