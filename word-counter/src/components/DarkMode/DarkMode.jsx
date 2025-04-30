import sun from "./sun.png"; // adjust the path if needed
import moon from "./moon.png";
import "./DarkMode.css";
function DarkMode() {
  return (
    <div className="dark_mode">
      <input
        type="checkbox"
        id="darkmode-toggle"
        className="dark_mode_input"
        onChange={toggleTheme}
        defaultChecked={selectedTheme === "dark"}
      />
      <label htmlFor="darkmode-toggle" className="dark_mode_label">
        <img src={sun} alt="Sun Icon" />
        <img src={moon} alt="Moon Icon" />
      </label>
    </div>
  );
}
export default DarkMode;
