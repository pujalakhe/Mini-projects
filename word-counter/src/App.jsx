import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./WordCounter.css";

function App() {
  const [text, setText] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);
  const handleChange = (e) => {
    setText(e.target.value);
    // charCount
    setCharCount(e.target.value.replace(/\s+/g, "").length);
    setSentenceCount(
      e.target.value
        .trim()
        .split(/[.!?](\s|$)/)
        .filter((sentence) => sentence.trim().length > 0).length
    );
  };
  const reset = () => {
    setText("");
    setCharCount(0);
    setSentenceCount(0);
  };
  return (
    <>
      <div className="container">
        <div className="container-middle">
          <div className="right">
            <textarea
              name=""
              id=""
              value={text}
              onChange={handleChange}
              className="text-input"
              placeholder="Enter your text here..."
              rows="10"
              cols="30"
            ></textarea>
            <div className="button-div">
              <button className="button-65" onClick={reset}>
                Delete
              </button>
            </div>
          </div>
          <div className="left">
            <div className="container-middle-para">
              <h1>Results</h1>
            </div>
            <div className="flex-container">
              <div>
                <p>
                  <strong>Characters:</strong>
                  {charCount}
                </p>
              </div>
              {/* sentences COunt  */}
              <div>
                <p>
                  <strong>Sentences:</strong>
                  {sentenceCount}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
