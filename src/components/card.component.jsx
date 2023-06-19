import Circle from "./circle-percentage.component";
import Strip from "./strip.component";
import "./card.css";

export default function Card({ title }) {
  const stripValues = [
    { title: "Temperature", value: 70, maxValue: 100, id: 'temperature'+'CPU'+'strip'},
    { title: "Clock rate", value: 780, maxValue: 3000, id: 'clockrate'+'CPU'+'strip' },
  ];

  return (
    <div className="card-component-wrapper">
      <p>{title}</p>
      <div className="circle-strip-wrapper">
        <Circle />
        <div className="card-strips-wrapper">
          {
            stripValues.map((val) => {
              return <Strip values={val} key={val.id}/>
            })
          }          
        </div>
      </div>
    </div>
  );
}
