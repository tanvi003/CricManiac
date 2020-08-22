import data from "./data.json";


const getStadiumStats = team => {
  let stadiumList = new Set([]);
  let stadiumStats = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].season == 2017) {
      stadiumList.add(data[i].ground);
    }
  }}

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
 
  return { won, lost };
};






export {
  teams,
  getMatchResultsPerTeam,
  getStadiumStats
  // teams1
};
