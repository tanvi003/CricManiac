import React from "react";
import * as Recharts from "recharts";
import { getMatchResultsPerTeam,getStadiumStats, getMatchStats} from "../extract";

const { PieChart, Pie, Cell } = Recharts;

const PieCharts = props => {
  const result = getMatchResultsPerTeam(props.team);
  let r3 = getMatchStats(props.team);

  const data = [
    { name: "Wins", value:result.won},
    { name: "Loses", value: result.lost },

  ];

  const COLORS = ["#EAA931", "#EE5639"];

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
      After Winning the Toss
      </span>
      <PieChart width={400} height={400} className="ssp-700">
        <Pie
          data={data}
          cx={190}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#EAA931"
          dataKey="value"
          paddingAngle={5}
          label
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              dataKey={entry.value}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
      </PieChart>
      <div className="pie-info">
        <div
          className="ssp-400"
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "flex-start",
            alignItems: "center"
          }}
        >
          <div
            className="pie-color"
            style={{ backgroundColor: "#EAA931", marginRight: "10px" }}
          />
        Preferred Field
        </div>
        <div
          className="ssp-400"
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "flex-start",
            alignItems: "center"
          }}
        >
          <div
            className="pie-color"
            style={{ backgroundColor: "#EE5639", marginRight: "10px" }}
          />
           Preferred Bat
        </div>
    
      </div>
    </React.Fragment>
  );
};

export default PieCharts;
