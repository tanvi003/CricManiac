import React from "react";
import "../dashboard.css";
import { getMatchStats } from "../extract";

const Cards = props => {
  const teamsList = getMatchStats(props.team);
  {console.log(teamsList,"o9o")}
  return teamsList.map((item, i) => {
    if (props.activeTeam === item.teamName) {
      return (
        <li
          className="match-card team-card-appear"
          value="name"
          key={i}
          onClick={props.changeTeam}
          data-id={item.teamName}
          
          style={{
            animationDelay: `${i * 40}ms`,
            minHeight: "110px",
            borderBottom: "5px solid #ffffff"
          }}
        >
            <div className="flex flex-row">
            <span className="ssp-400 team-name" style={{ fontSize: "21px" }}>
          {item.team1} VS {item.team2}
          </span>
          <div className="ssp-400 team-matches" style={{ fontSize: "25px", paddingTop:"5px",color:"#000000"}}>
           WINNER: {item.winner}  
           
           {item.win_by_runs !==0  ?
           ` by ${item.win_by_runs} Runs`: null}
           {item.win_by_wickets !==0  ?
           ` by ${item.win_by_wickets} Wickets`: null}
          </div>
            </div>
         
          
      
        </li>
      );
    }
    return (
       
      <li
        className="team-card team-card-appear"
        value="nameeee"
        key={i}
      
        data-id={item.teamName}
        style={{
          animationDelay: `${i * 40}ms`
        }}
      >
        <p className="ssp-400 team-name">{item.teamName}</p>
        {item.matches === 1 ? (
          <span className="ssp-400 team-matches">{item.matches} match</span>
        ) : (
          <span className="ssp-400 team-matches">{item.matches} matches</span>
        )}
      </li>
    );
  });
};

const MatchesCards = props => {
  return (

    <div className="team-cards-container">
        <div style={{ fontSize: "30px", padding:"10px", font:"bold" }}>Matches During The Season</div>

      <Cards
        team={props.team}
        
      />
    </div>
  );
};

export default MatchesCards;
