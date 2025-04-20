import "./App.css";
import { useState } from "react";
function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(0);
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("#000");
  //cal bmi
  let calcBmi = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please enter valid weight and height");
      return;
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(2));
      if (bmi < 25) {
        setMessage("You are underweight");
        setColor("red");
      } else if (bmi >= 25 && bmi <= 30) {
        setMessage("You are normal");
        setColor("green");
      } else if (bmi > 30 && bmi <= 35) {
        setMessage("You are overweight");
        setColor("yellow");
      } else {
        setMessage("You are obese");
        setColor("red");
      }
    }
  };
  //reload
  let reload = (e) => {
    window.location.reload();
  };
  return (
    <div className="app">
      <div className="container">
        <h2>Bmi Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight(lbs):</label>
            <input
              type="text"
              name="weight"
              placeholder="Enter Weight Value"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height (inch):</label>
            <input
              type="text"
              name="height"
              placeholder="Enter height Value"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" type="submit" onClick={reload}>
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is: {bmi}</h3>
            <p style={{ color: color }}>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
