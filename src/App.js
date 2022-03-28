import "./styles.css";

export default function App() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    return year;
  };
  console.log(calculateTimeLeft());
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
