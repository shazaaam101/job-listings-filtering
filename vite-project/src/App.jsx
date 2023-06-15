import "./styles/app.css";
import headerBg from "./assets/bg-header-desktop.svg";
import headerMobileBg from "./assets/bg-header-mobile.svg";
import DataList from "./components/DataList";
import dataJSON from "./data.json";
import { useEffect, useState } from "react";
import FilterBar from "./components/FilterBar";
import { FilterContext } from "./FilterContext";
function App() {
  const [data, setData] = useState(dataJSON);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    if (filter.length === 0) {
      setData(dataJSON);
      return;
    }
    const condition = [...filter];

    const dataStringArrays = dataJSON.map(
      (d) =>
        `${d.role} ${d.level} ${d.languages.join(" ")} ${d.tools.join(" ")}`
    );
    function isMatch(dataString) {
      const countMatch = condition.reduce(
        (count, cdt) => count + dataString.includes(cdt),
        0
      );
      return countMatch;
    }
    const val = dataStringArrays.map((ds) => isMatch(ds) === condition.length);
    const filterData = dataJSON.filter((d, idx) => val[idx]);
    setData(filterData);
  }, [filter]);

  useEffect(() => {
    function handleResize() {
      const imgHeader = document.querySelector(".header-bg-img");
      if (window.innerWidth < 600) {
        imgHeader.src = headerMobileBg;
      } else {
        imgHeader.src = headerBg;
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="app">
      <header className="header-bg">
        <img className="header-bg-img" src={headerBg} alt="header" />
      </header>
      <div className="container">
        <FilterContext.Provider value={{ setData, data, setFilter, filter }}>
          {filter.length !== 0 && <FilterBar />}

          <DataList myData={data} />
        </FilterContext.Provider>
      </div>
    </div>
  );
}

export default App;
