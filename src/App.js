import "./styles.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Timer from "./components/Timer";
import data from "./components/data";
import { useState } from "react";
export default function App() {
  const timersJSX = data.map((event) => {
    return <Timer event={event} key={event.name} />;
  });
  const [timerCount, setTimerCount] = useState(5);
  function handleTimerCount(){
    if (timerCount >= timersJSX.length - 1){
      setTimerCount(0)
    } else {
      setTimerCount(prevTimerCount => prevTimerCount + 1)
    }
    
  }
  return (
    <div className="App">
      <Header />
      {timersJSX[timerCount]}
      <Footer handleTimerCount={handleTimerCount}/>
    </div>
  );
}
