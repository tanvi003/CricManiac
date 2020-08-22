import React from "react";
import * as Recharts from "recharts";
import { getWinningStats } from "../extract";

const { BarChart, Bar, XAxis, YAxis, Tooltip } = Recharts;

const BarCharts = props => {
  let result = getWinningStats(props.team);
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
     Total Matches and Matches Won in the Season
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
        <Bar dataKey="won" stackId="a" fill="#8884d8" />
        <Bar dataKey="total" stackId="a" fill="#82ca9d" />
      </BarChart>
    </React.Fragment>
  );
};

export default BarCharts;
