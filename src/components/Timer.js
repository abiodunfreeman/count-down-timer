import "./timer.css";
export default function Timer(props) {
  const { days, hours, minuets, seconds } = props.count;
  return (
    <div id="timer-container">
      <div className="card">
        <div className="card-time">
          <h1>{days}</h1>
        </div>
        <h2>Days</h2>
      </div>
      <div className="card">
        <div className="card-time">
          <h1>{hours}</h1>
        </div>
        <h2>Hours</h2>
      </div>
      <div className="card">
        <div className="card-time">
          <h1>{minuets}</h1>
        </div>
        <h2>Minuets</h2>
      </div>
      <div className="card">
        <div className="card-time">
          <h1>{seconds}</h1>
        </div>
        <h2>Seconds</h2>
      </div>
    </div>
  );
}
