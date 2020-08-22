import React from "react";
import * as Recharts from "recharts";
import { getStadiumStats } from "../extract";

const { BarChart, Bar, XAxis, YAxis, Tooltip } = Recharts;

const BarCharts = props => {
  let result = getStadiumStats(props.team);
  {console.log(result,"koko")}
  return (
    <React.Fragment>
      <span
        className="ssp-400"
        style={{
          position: "absolute",
          top: "15px",
          left: "30px",
          fontSize: "20px",
          marginBottom: "10px"
        }}
      >
     Matches Played Stadium Wise
      </span>
      <BarChart
        width={400}
        height={200}
        data={result}
        margin={{ top: 30, right: 40, left: -20, bottom: -30 }}
        className="ssp-400"
        style={{ color: "#1b2136" }}
      >
        <XAxis dataKey="ground" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="total" stackId="a" fill="#8884d8" />
   
      </BarChart>
    </React.Fragment>
  );
};

export default BarCharts;
