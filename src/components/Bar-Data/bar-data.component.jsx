import "./bar-data.css";

export default function BarData({ values }) {
  let barWidth =
    Math.round((values.value / values.maxValue) * 100).toString() + "%";

  return (
    <div className="bar-data-container">
      <div className="bar-container">
        <div
          className="bar-data-variable-bar"
          style={{ width: barWidth }}
        ></div>
        <div className="bar-data-fixed"></div>
      </div>
      <div className="bar-data-text-wrapper">
        <p>{values.title}</p>
        {values.isStorage ? (
          <p>{barWidth}</p>
        ) : (
          <p>{values.value + values.unitMeasure}</p>
        )}
      </div>
    </div>
  );
}
