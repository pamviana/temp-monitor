import Circle from "./circle-percentage.component";
import Strip from "./strip.component";
import "./card.css";

export default function Card({ title, dataValues }) {
  return (
    <div className="card-component-wrapper box-container">
      <div className="card-title-wrapper">
        <p>{title}</p>
        <p style={{ fontSize: "18px" }}>{dataValues.componentName}</p>
      </div>

      <div className="circle-strip-wrapper">
        <Circle />
        <div className="card-strips-wrapper">
          {dataValues.stripValues.map((val) => {
            return <Strip values={val} key={val.id} />;
          })}
        </div>
      </div>
    </div>
  );
}
