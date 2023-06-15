import React from "react";
import DataItem from "./DataItem";
import "../styles/dataList.css";
import photosnapImg from "../images/photosnap.svg";
import manageImg from "../images/manage.svg";
import accountImg from "../images/account.svg";
import eyecamImg from "../images/eyecam-co.svg";
import faceitImg from "../images/faceit.svg";
import insureImg from "../images/insure.svg";
import loopStudiosImg from "../images/loop-studios.svg";
import myhomeImg from "../images/myhome.svg";
import shortlyImg from "../images/shortly.svg";
import filterCompanyImg from "../images/the-air-filter-company.svg";

const DataList = ({ myData }) => {
  const imgArray = [
    photosnapImg,
    manageImg,
    accountImg,
    myhomeImg,
    loopStudiosImg,
    faceitImg,
    shortlyImg,
    insureImg,
    eyecamImg,
    filterCompanyImg,
  ];
  return (
    <div className="data-list">
      {myData.map((data, idx) => (
        <DataItem
          key={idx}
          company={data.company}
          logo={imgArray?.at(idx)}
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
