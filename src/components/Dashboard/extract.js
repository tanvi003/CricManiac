import data from "./data.json";
const getMatchResultsPerTeam = team => {
 
 
  let field = data.filter(ipl => ipl.season == team && ipl.toss_decision ==="field");
  let bat = data.filter(ipl => ipl.season == team && ipl.toss_decision ==="bat");
 var won =field.length;
  var lost = bat.length;
  console.log(won,"bitch");
 
  return{won,lost}
}  
   
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
      if (teamStats[j].teamName === data[i].season) {
        teamStats[j].matches++;
      }
    }
  }
  return teamStats;
}


const getStadiumStats = team => {
 
  let stadiumList = new Set([]);
  let stadiumStats = [];
  for (let i = 0; i < data.length; i++) {
  
    if (data[i].season == team) {
      stadiumList.add(data[i].venue);
     
    }
  }

  stadiumList.forEach(stadium => {
    return stadiumStats.push({
      ground: stadium,
      total:0
    });
  });
  for (let i = 0; i < data.length; i++) {
   
     for (let j = 0; j < stadiumStats.length; j++) {
   
  if (stadiumStats[j].ground === data[i].venue && data[i].season == team) {
              stadiumStats[j].total++;
            }}}
            console.log(stadiumStats,"tanvi")
            return stadiumStats;
 
}

const getWinningStats = team => {
   let teamList = new Set([]);
  let teamStats = [];
  for (let i = 0; i < data.length; i++) {
  
    if (data[i].season == team) {
      teamList.add(data[i].winner);
     
    }
  }

  teamList.forEach(stadium => {
    return teamStats.push({
      ground: stadium,
      won:0,
      total:0
    });
  });
  for (let i = 0; i < data.length; i++) {
   
     for (let j = 0; j < teamStats.length; j++) {
   
  if (teamStats[j].ground === data[i].winner && data[i].season == team) {
              teamStats[j].won++;
            }}}
            for (let i = 0; i < data.length; i++) {
   
              for (let j = 0; j < teamStats.length; j++) {
            
           if ((teamStats[j].ground === data[i].team1 || teamStats[j].ground === data[i].team2) && data[i].season == team) {
                       teamStats[j].total++;
                     }
                 }
                  }
            console.log(teamStats,"tttt")
            return teamStats;
 
}

const getMatchStats = team => {
 
  
 return(data.filter(ipl => ipl.season == team))
}

export {
  teams,
  getWinningStats,
  getMatchStats,
  getMatchResultsPerTeam,
  getStadiumStats
};
