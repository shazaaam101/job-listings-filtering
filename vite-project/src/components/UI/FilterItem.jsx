import React, { useContext } from "react";
import "../../styles/filterItem.css";
import removeIcon from "../../assets/icon-remove.svg";
import { FilterContext } from "../../FilterContext";

const FilterItem = ({ value }) => {
  const { filter, setFilter } = useContext(FilterContext);
  const removeFilter = () => {
    setFilter(filter.filter((filter) => filter !== value));
  };

  return (
    <div className="filter-item">
      <div className="tag">{value}</div>
      <button className="cancel-btn" onClick={removeFilter}>
        <img src={removeIcon} alt="remove" />
      </button>
    </div>
  );
};

export default FilterItem;
