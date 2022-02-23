
import './App.css';
import {useState} from "react"
import WindowTracker from "./WindowTracker"

export default function App() {
  const [show, setShow] = useState(true);

  function toggle() {
    setShow(!show);
  }

  return (
    <div className="container">
      <button onClick={toggle} style={{fontSize:25}}>Toggle</button>
      {show ? <WindowTracker /> : <h2 style={{ color: "white" }}>No Data</h2>}
    </div>
  );
}

