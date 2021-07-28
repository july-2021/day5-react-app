import logo from "./logo.svg";
import "./App.css";

function App() {
  let title = "Hello React;";
  let list = ["Delhi", "Calcutta", "Mumbai", "Chennai"];

  return (
    <div>
      <h1>{title}</h1>
      <h1>{list}</h1>
    </div>
  );
}

export default App;
