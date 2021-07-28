import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  // DECALRING THE VARIBALE USING REACTG :: HOOKS
  const [list, setList] = useState([]);

  const addNewHello = () => {
    const newList = [...list, "Hello"];
    setList(newList);

    console.log(list);
  };

  // VIEW
  // React is unware of the changes of local variable
  return (
    <div>
      <h1>Working with Events and List</h1>
      <input type="button" value="Say Hello" onClick={addNewHello} />

      {list.map((item) => {
        return (
          <h3>
            {item} Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Minus inventore aut debitis officiis magnam expedita ea sequi iste
            ut autem eum mollitia nam libero provident dolore at, obcaecati
            veritatis delectus?
          </h3>
        );
      })}
    </div>
  );
}

export default App;
