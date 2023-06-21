import BarData from "../Bar-Data/bar-data.component";
import './storage.css'

export default function Storage({ data }) {
  const testValue = {
    isStorage: true,
    title: "C:" + data.used + "GB / " + data.total + "GB",
    value: data.used,
    maxValue: data.total
  };

  return (
    <div className="storage-container">
      <p>Storage</p>
      <BarData values={testValue} key="test" />
    </div>
  );
}
