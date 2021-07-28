import logo from "./logo.svg";
import "./App.css";

function App() {
  let list = ["Hello", "Hello"];

  return (
    <div>
      <h1>Working with Events and List</h1>
      <input type="button" value="Say Hello" />

      {list.map((item) => {
        return <h3>{item}</h3>;
      })}
    </div>
  );
}

export default App;
