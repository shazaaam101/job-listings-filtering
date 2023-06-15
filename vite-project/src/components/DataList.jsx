import React from "react";
import DataItem from "./DataItem";
import "../styles/dataList.css";

const DataList = ({ myData }) => {
  return (
    <div className="data-list">
      {myData.map((data, idx) => (
        <DataItem
          key={idx}
          company={data.company}
          logo={data.logo}
          newItem={data.new}
          featured={data.featured}
          position={data.position}
          role={data.role}
          level={data.level}
          postedAt={data.postedAt}
          contract={data.contract}
          location={data.location}
          languages={data.languages}
          tools={data.tools}
        />
      ))}
    </div>
  );
};

export default DataList;
