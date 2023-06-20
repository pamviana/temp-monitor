import Circle from "./circle-percentage.component";
import "./ram.css";

export default function RAM() {
  return (
    <div className="ram-container">
      <h1>RAM</h1>
      <div className="ram-wrapper"> 
        <Circle />
        <p style={{fontSize: '16px'}}>14.7GB / 31.7GB</p>
      </div>
    </div>
  );
}
