import { getPercentage } from "../../utils/helperFunctions";
import Circle from "../Circle-Percentage/circle-percentage.component";
import "./ram.css";

export default function RAM({ data }) {

  const percentageValue = Math.round(getPercentage(data.used, data.total));

  return (
    <div className="ram-container">
      <h1>RAM</h1>
      <div className="ram-wrapper"> 
        <Circle percentage={percentageValue}/>
        <p style={{fontSize: '16px'}}>{data.used}GB / {data.total}GB</p>
      </div>
    </div>
  );
}
