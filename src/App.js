import logo from "./logo.svg";
import "./App.css";

// JSX => JAVSCRIPT XML => JS + HTML
// JSX must be wrapped within () if it is multiline
// JSX can have only one PARENT tag.
function App() {
  let id = 100;
  let name = "Sachin";

  // VIEW => That is getting render in the browser.
  // INSIDE THE HTML you can access the JS VARIABLE.
  // using the {} you can write ANY JAVASCRIPT PROGRAM.
  return (
    <div>
      <h1>
        {name} {id}
      </h1>
      <h1>Multi line Statement. () is important now</h1>
    </div>
  );
}

export default App;
