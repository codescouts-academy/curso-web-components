import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./index.css";
import "./App.css";

export interface Complex {
  name: string;
  value: string;
}

export type Props = {
  onCountUpdated: (count: number) => void;
  title: string;
  complex: Complex;
};

export const App = ({ onCountUpdated, title, complex }: Props) => {
  const [count, setCount] = useState(0);

  useEffect(() => onCountUpdated(count), [count, onCountUpdated]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <div>
          {title}
          <p>{complex.name}</p>
          <p>{complex.value}</p>
        </div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};
