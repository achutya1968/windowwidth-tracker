import {useState,useEffect} from "react"

export default function WindowTracker() {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    console.log("Event");
    function watchWidth() {
      setwindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", watchWidth);
    return () => {
      console.log("Cleaning up");
      window.removeEventListener("resize", watchWidth);
    };
  }, []);

  return (
    <div>
      <h1>Size: {windowWidth} px</h1>
    </div>
  );
}
