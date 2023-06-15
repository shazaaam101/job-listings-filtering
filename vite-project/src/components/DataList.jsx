import React from "react";
import DataItem from "./DataItem";

const DataList = ({ myData }) => {
  return (
    <div className="data-list">
      {myData.map((data) => (
        <DataItem
          key={data.id}
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
