import logo from "./logo.svg";
import "./App.css";

function App() {
  // data member
  let title = "Event Demo";

  // member functison
  let myfun = () => {
    alert("I am click handler");
  };

  // binding the memebrs inside the JSX. {}
  return (
    <div>
      <h1>{title}</h1>
      <input type="button" value="Click Me" onClick={myfun} />
    </div>
  );
}

export default App;
