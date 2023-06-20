import Strip from "./strip.component";
import './storage.css'

export default function Storage() {
  const testValue = {
    title: "C:",
    value: 70,
    maxValue: 100,
    unitMeasure: '%',
    id: "storage-strip",
  };

  return (
    <div className="storage-container">
      <p>Storage</p>
      <Strip values={testValue} key="test" />
    </div>
  );
}
