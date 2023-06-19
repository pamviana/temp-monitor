import Storage from "./components/storage.component";
import "./App.css";
import Card from "./components/card.component";

function App() {
  return (
    <div className="app">
      <div className="app-content-wrapper">
        <p>Oii</p>
        <Card title="CPU"/>
        <Card title="GPU"/>
        <Card title="RAM"/>
        <Storage />
      </div>
    </div>
  );
}

export default App;
