import logo from "./logo.svg";
import "./App.css";

function App() {
  let list = ["Hello", "Hello"];

  const addNewHello = () => {
    // alert("Add new Hello logic weill come here....");
    list.push("Hello");

    console.log(list);
  };

  // VIEW
  // React is unware of the changes of local variable
  return (
    <div>
      <h1>Working with Events and List</h1>
      <input type="button" value="Say Hello" onClick={addNewHello} />

      {list.map((item) => {
        return <h3>{item}</h3>;
      })}
    </div>
  );
}

export default App;
