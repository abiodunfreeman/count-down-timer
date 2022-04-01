import "./styles.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Timer from "./components/Timer";
import data from "./components/data";
import { useState } from "react";
export default function App() {
  console.log(data);
  const [count, setCount] = useState({
    days: 3,
    hours: 8,
    minuets: 43,
    seconds: 60
  });
  return (
    <div className="App">
      <Header />
      <Timer count={count} />
      <Footer />
    </div>
  );
}
