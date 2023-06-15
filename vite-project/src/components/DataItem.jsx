import React from "react";
import "../styles/dataItem.css";
import AttributeItem from "./UI/AttributeItem";
const DataItem = ({
  company,
  logo,
  newItem,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
}) => {
  return (
    <div className="data-item">
      <div className="wrapper">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="content">
          <h1 className="company">
            {company}
            {newItem && <span className="newItem">NEW!</span>}
            {featured && <span className="featured">FEATURED</span>}
          </h1>

          <div className="position">
            <b>{position}</b>
          </div>
          <div className="detail">
            <span className="post-at">{postedAt}</span>

            <span className="contract">{contract}</span>

            <span className="location">{location}</span>
          </div>
        </div>
        <div className="attribute-list">
          <AttributeItem value={role} />
          <AttributeItem value={level} />
          {languages?.map((lang, idx) => (
            <AttributeItem key={idx} value={lang} />
          ))}
          {tools?.length !== 0 &&
            tools?.map((tool, idx) => <AttributeItem key={idx} value={tool} />)}
        </div>
      </div>
    </div>
  );
};

export default DataItem;
