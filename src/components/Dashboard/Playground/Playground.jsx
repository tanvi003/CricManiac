import React from "react";
import "../dashboard.css";
import LineCharts from "./MatchesBarChart";
import PieCharts from "./PieChart";
import BarCharts from "./BarChart";
import MatchesCards from "../MatchesCard/MatchesCard";
// import { getSummarizedStats } from "../extract";

const Playground = props => {
  // const res = getSummarizedStats(props.team);
  return (
    <div className="playground">
    
      <section className="dual-row">
      <div className="dual-boxes">
        <LineCharts team={props.team} />
        </div>
        <div className="dual-boxes radar">
          <BarCharts team={props.team} />
        </div>
        
      </section>
      <section className="dual-row">
        <div className="dual-boxes">
          <PieCharts team={props.team} />
        </div>
        <div >
        <MatchesCards
             team={props.team}
            />
            </div>
        </section>
       
      
    </div>
  );
};

export default Playground;
