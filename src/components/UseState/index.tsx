import { useState } from "react";
import "./UseState.css";

const UseState: React.FC = () => {
  const [theme, setTheme] = useState<string>("dark");
  const [count, setCount] = useState<number>(0);

  return (
    <div className={`state ${theme}`}>
      <h1>UseState Component</h1>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Toggle theme
      </button>

      <h2>DISPLAY COUNT HERE</h2>
      <h1 className="count-display">{count}</h1>
      <button onClick={() => setCount((prevCount: number) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount: number) => prevCount - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default UseState;
