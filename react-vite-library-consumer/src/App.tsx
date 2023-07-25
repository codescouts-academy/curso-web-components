import "./App.css";
import { useScript } from "usehooks-ts";

function App() {
  useScript("http://localhost:3000/index.es.js");

  return (
    <>
      <h2>Consumer</h2>
      <app-component></app-component>
    </>
  );
}

export default App;
