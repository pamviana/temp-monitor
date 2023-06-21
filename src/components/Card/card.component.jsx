import Circle from "../Circle-Percentage/circle-percentage.component";
import BarData from "../Bar-Data/bar-data.component";
import "./card.css";
import { getPercentage } from "../../utils/helperFunctions";

export default function Card({ title, dataValues }) {

  const percentageValue = getPercentage(dataValues.load.currVal,dataValues.load.total);

  return (
    <div className="card-component-wrapper box-container card-component">
      <div className="card-title-wrapper">
        <p>{title}</p>
        <p id="component-name">{dataValues.componentName}</p>
      </div>

      <div className="circle-strip-wrapper">
        <Circle percentage={percentageValue}/>
        <div className="card-strips-wrapper">
          {dataValues.stripValues.map((val) => {
            return <BarData values={val} key={val.id} />;
          })}
        </div>
      </div>
    </div>
  );
}
