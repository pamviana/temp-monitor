import Storage from "./components/storage.component";
import "./App.css";
import Card from "./components/card.component";
import RAM from "./components/ram.component";
import Datetime from "./components/datetime.component";

function App() {
  const dataValues = {
    CPU: {
      stripValues: [
        {
          title: "Temperature",
          value: 40,
          maxValue: 100,
          unitMeasure: " °C",
          id: "temperature" + "CPU" + "strip",
        },
        {
          title: "Clock rate",
          value: 3600,
          maxValue: 5200,
          unitMeasure: " MHz",
          id: "clockrate" + "CPU" + "strip",
        },
      ],
      componentName: "Intel Core i5 13600K",
    },
    GPU: {
      stripValues: [
        {
          title: "Temperature",
          value: 37,
          maxValue: 100,
          unitMeasure: " °C",
          id: "temperature" + "GPU" + "strip",
        },
        {
          title: "Clock rate",
          value: 210,
          maxValue: 2850,
          unitMeasure: " MHz",
          id: "clockrate" + "GPU" + "strip",
        },
      ],
      componentName: "NVIDIA GeForce RTX 4070",
    },
    RAM: {
      currStorage: 194,
      totalStorage: 930,
    },
  };

  return (
    <div className="app">
      <Datetime />
      <div className="app-content-wrapper">
        <Card title="CPU" dataValues={dataValues.CPU} />
        <Card title="GPU" dataValues={dataValues.GPU} />
        <div className="ram-storage-container box-container">
          <div className="ram-storage-content">
            <RAM />
            <Storage />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
