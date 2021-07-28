import logo from "./logo.svg";
import "./App.css";

function App() {
  let title = "Hello React;";
  let list = ["Delhi", "Calcutta", "Mumbai", "Chennai", "Pune", "Lonavala"];

  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {list.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
