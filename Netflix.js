import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Card from "./Cards";
import Sdata from "./Sdata";
import Footerlast from "./Footerand";

function Netflix() {
  return (
    <>
      <h2>Top 5 netflix movie 2023 </h2>
      <div className="main">
        {Sdata.map((val) => {
          return (
            <Card
              imgsrc={val.imglink}
              title={val.title}
              sname={val.sname}
              link={val.links}
            />
          );
        })}
      </div>
      <Footerlast />
    </>
  );
}

export default Netflix;