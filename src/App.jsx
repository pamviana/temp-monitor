import Storage from "./components/storage.component";
import "./App.css";
import Card from "./components/card.component";
import RAM from "./components/ram.component";
import Datetime from "./containers/Datetime/datetime.container";
import { getData, getRAMdata, getStorageData } from "./services/api";

function App() {
  const dataValues = getData();
  const RAMdata = getRAMdata();
  const storageData = getStorageData();

  return (
    <div className="app">
      <Datetime />
      <div className="app-content-wrapper">
        <Card title="CPU" dataValues={dataValues.CPU} />
        <Card title="GPU" dataValues={dataValues.GPU} />
        <div className="ram-storage-container box-container">
          <div className="ram-storage-content">
            <RAM data={RAMdata}/>
            <Storage data={storageData}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
