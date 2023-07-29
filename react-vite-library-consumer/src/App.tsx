import { useState } from "react";
import "./App.css";
import "react-vite-library";
import "react-vite-library/style";

function App() {
  const func = (count: number) => {
    console.log(`Hola ${count}`);
    setTitle(count % 2 === 0 ? "Foo" : "Bar");
    setComplex({
      name: `Nombre ${count}`,
      value: `${count}`,
    });
  };
  const [title, setTitle] = useState("");
  const [complex, setComplex] = useState({
    name: "",
    value: "",
  });

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
