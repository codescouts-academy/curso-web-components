import "./App.css";
import "react-vite-library";
import "react-vite-library/style";

function App() {
  const func = (count: number) => console.log(`Holas ${count}`);

  return (
    <>
      <h2>Consumer</h2>
      <app-component onCountUpdated={func}></app-component>
    </>
  );
}

export default App;
