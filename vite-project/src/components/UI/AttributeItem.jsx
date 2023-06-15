import React, { useContext } from "react";
import "../../styles/attributeItem.css";
import { FilterContext } from "../../FilterContext";

const AttributeItem = ({ value }) => {
  const { filter, setFilter } = useContext(FilterContext);
  const addFilter = () => {
    const filterVal = value;
    if (filter.includes(filterVal)) return;
    setFilter([...filter, filterVal]);
  };

  return (
    <div className="attribute-item" onClick={addFilter}>
      {value}
    </div>
  );
};

export default AttributeItem;
