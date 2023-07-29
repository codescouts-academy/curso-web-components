import { useEffect, useState } from "react";
import "./App.css";
import "react-vite-library";
import "react-vite-library/style";

function App() {
  const [count, setCount] = useState(0);
  const func = (count: number) => {
    setCount(count);
  };
  const [title, setTitle] = useState("");
  const [complex, setComplex] = useState({
    name: "",
    value: "",
  });

  useEffect(() => {
    setTitle(count % 2 === 0 ? "Foo" : "Bar");
    setComplex({
      name: `Name: ${count}`,
      value: `Value: ${count}`,
    });
  }, [count]);

  return (
    <>
      <h2>Consumer</h2>
      <app-component
        onCountUpdated={func}
        title={title}
        complex={complex}
      ></app-component>
    </>
  );
}

export default App;
