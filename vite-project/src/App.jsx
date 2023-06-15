import "./styles/app.css";
import headerBg from "./assets/bg-header-desktop.svg";
import DataList from "./components/DataList";
import dataJSON from "./data.json";
import { useState } from "react";
import FilterBar from "./components/FilterBar";
function App() {
  const [data, setData] = useState(dataJSON);
  return (
    <div className="app">
      <header className="header-bg">
        <img src={headerBg} alt="header" />
      </header>

      <FilterBar />
      <DataList myData={data} />
    </div>
  );
}

export default App;
