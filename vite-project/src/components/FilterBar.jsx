import React, { useContext } from "react";
import "../styles/filterBar.css";
import FilterItem from "./UI/FilterItem";
import { FilterContext } from "../FilterContext";
const FilterBar = () => {
  const { filter, setFilter } = useContext(FilterContext);
  return (
    <div className="filter-bar">
      <div className="wrapper">
        <div className="filter-list">
          {filter.map((f, idx) => (
            <FilterItem key={idx} value={f} />
          ))}
        </div>
        <div className="clear-filters" onClick={() => setFilter([])}>
          Clear
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
