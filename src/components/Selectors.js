import UseTheme from "../hooks/UseTheme";
import "./Selectors.css";
const colors = ["blue", "pink", "purple"];
const Selectors = () => {
  const { changeColor } = UseTheme();
  return (
    <div className="selector-buttons">
      {colors.map((color) => (
        <div
          key={color}
          className="selector-btn"
          style={{ background: color }}
          onClick={() => changeColor(color)}
        ></div>
      ))}
    </div>
  );
};

export default Selectors;
