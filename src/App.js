import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

export default function App() {
  // DECALRING THE VARIBALE USING REACTG :: HOOKS
  // Array Destcutring :: React Hooks
  const [list, setList] = useState([]);

  // Arrow Function
  const addNewHello = () => {
    // Array Cloin
    const newList = [...list, "Hello world"];
    setList(newList);

    console.log(list);
  };

  // VIEW
  // React is unware of the changes of local variable
  return (
    <div>
      <h1>Working with Events and List</h1>
      <input type="text" placeholder="Post your thought here..." />
      <input type="button" value="Say Hello" onClick={addNewHello} />

      {list.map((item) => {
        return (
          <h3>
            {item} Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Possimus ducimus id voluptatibus, iusto, nisi modi alias numquam
            doloremque atque provident consequuntur consectetur autem, molestias
            dicta. In voluptatibus possimus necessitatibus reprehenderit.
          </h3>
        );
      })}
    </div>
  );
}
