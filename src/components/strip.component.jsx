import "./strip.css";

export default function Strip({ values }) {
  let barWidth = ((values.value/values.maxValue)*100).toString() + '%';

  return (
    <div className="strip-container">
      <div className="stripbar-container">
        <div className="strip-variable-bar" style={{ width: barWidth }}></div>
        <div className="strip-bar-fixed"></div>
      </div>
      <div className="strip-text-wrapper">
        <p>{values.title}</p>
        <p>{values.value}</p>
      </div>
    </div>
  );
}
