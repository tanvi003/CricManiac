import data from "./data.json";

// //Return Total runs, catches and wickets against a team (for small cards)
// const getSummarizedStats = team => {
//   let totalRuns = 0;
//   let totalCatches = 0;
//   let totalWickets = 0;
//   for (let i = 0; i < data.length; i++) {
//     if (data[i].opposition === team) {
//       if (data[i].batting_score !== "TDNB" && data[i].batting_score !== "DNB") {
//         totalRuns += parseInt(data[i].batting_score, 10);
//       }
//       if (data[i].wickets !== "-") {
//         totalWickets += parseInt(data[i].wickets, 10);
//       }
//       if (data[i].catches !== "-") {
//         totalCatches += parseInt(data[i].catches, 10);
//       }
//     }
//   }
//   return { totalRuns, totalCatches, totalWickets };
// };

// // Return runs per match per team from data (for line chart)
// const getRunsPerTeam = team => {
//   const runs = [];
//   for (let i = 0; i < data.length; i++) {
//     if (data[i].opposition === team) {
//       runs.push({
//         name: `Match${i + 1}`,
//         runs: data[i].batting_score
//       });
//     }
//   }
//   return runs;
// };

// // Return wins/loses per team from data (for pie chart)
// const getMatchResultsPerTeam = team => {
//   let won = 0;
//   let lost = 0;
//   let draw = 0;
//   for (let i = 0; i < data.length; i++) {
//     if (data[i].opposition === team) {
//       switch (data[i].match_result) {
//         case "won":
//           won++;
//           break;
//         case "lost":
//           lost++;
//           break;
//         case "n/r":
//           draw++;
//           break;
//         default:
//           break;
//       }
//     }
//   }
//   return { won, lost, draw };
// };

//Return Stadium stats per team from data (for bar chart)
const getStadiumStats = team => {
  let stadiumList = new Set([]);
  let stadiumStats = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].season == 2017) {
      stadiumList.add(data[i].ground);
    }
  }{console.log(stadiumList,"ioio")}}

  //create an array of object for each unique stadium with default values(0)
  // stadiumList.forEach(stadium => {
  //   return stadiumStats.push({
  //     ground: stadium,
  //     won: 0,
  //     lost: 0
  //   });
  // });

  //update stadiumStats
//   for (let i = 0; i < data.length; i++) {
//     if (data[i].match_result === "won") {
//       for (let j = 0; j < stadiumStats.length; j++) {
//         if (
//           stadiumStats[j].ground === data[i].ground &&
//           data[i].opposition === team
//         ) {
//           stadiumStats[j].won++;
//         }
//       }
//     } else if (data[i].match_result === "lost" && data[i].opposition === team) {
//       for (let j = 0; j < stadiumStats.length; j++) {
//         if (stadiumStats[j].ground === data[i].ground) {
//           stadiumStats[j].lost++;
//         }
//       }
//     }
//   }
//   return stadiumStats;
// };

// Return opposition teams and respective matches from data (for team list)
const teams = () => {
  const teams = new Set([]);
  let teamStats = [];
  for (let i = 0; i < data.length; i++) {
    teams.add(data[i].season);
  }

  teams.forEach(team => {
    return teamStats.push({
      teamName: team,
      matches: 0
    });
  });

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < teamStats.length; j++) {
      if (teamStats[j].teamName === data[i].season && data[i].toss_decision === "field") {
        teamStats[j].matches++;
      }
    }
  }
console.log(teamStats,"lklk")
}

const getMatchResultsPerTeam = team => {
  let won = 0;
  let lost = 0;
  
  for (let i = 0; i < data.length; i++) {
    if (data[i].season === team) {
      switch (data[i].toss_decision) {
        case "field":
          won++;
          break;
        case "bat":
          lost++;
          break;
       
        default:
          break;
      }
    }
  }
  {console.log( won,"oo")}
  return { won, lost };
};




// const teams1 = () => {
//   const teams1 = new Set([]);
//   let teamStats1 = [];
//   for (let i = 0; i < data.length; i++) {
//     teams1.add(data[i].season);
//   }

//   teams1.forEach(team => {
//     return teamStats1.push({
//       teamName: team,
//       matches1: 0,
//       loss:0
//     });
//   });

//   for (let i = 0; i < data.length; i++) {
//     for (let j = 0; j < teamStats1.length; j++) {
//       if (teamStats1[j].teamName === data[i].season && teamStats1[j].toss_decision === "field") {
      
//         teamStats1[j].matches1++;
        
//       }else  teamStats1[j].loss++;
     
//     }
//   }
//   console.log(teamStats1,"tanvi")
  // let sortedTeamDetails = teamStats.sort((a, b) => {
  //   let nameA = a.teamName.replace(/\.| /g, "").toLowerCase();
  //   let nameB = b.teamName.replace(/\.| /g, "").toLowerCase();
  //   let comparison = 0;
  //   if (nameA > nameB) {
  //     comparison = 1;
  //   } else if (nameA < nameB) {
  //     comparison = -1;
  //   }
  //   return comparison;
  // });

  // return teamStats;
 
// };


export {
  teams,
  getMatchResultsPerTeam,
  getStadiumStats
  // teams1
};
