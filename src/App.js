import logo from "./logo.svg";
import "./App.css";

function App() {
  let title = "Hello React;";
  let list = ["Delhi", "Calcutta", "Mumbai", "Chennai", "Pune", "Lonavala"];

  return (
    <div>
      <h1>{title}</h1>

      {list.map((item) => {
        return <h1>{item}</h1>;
      })}
    </div>
  );
}

export default App;
