import { SingleStatistic } from "../SingleStatistic"

export const MatchStatistics = () => {
  // state will hold which part of the match we are in full time 1st or 2nd half
  return (
    <>
    <h5>General</h5>
    <button>full time</button>
    <button>1st half</button>
    <button>2nd half</button>
    <div>
        <SingleStatistic statName={"Possesion"} homeTeamName={"Arsenal"} awayTeamName={"Fulham"} />
        <SingleStatistic statName={"Shots on Target"} homeTeamName={"Arsenal"} awayTeamName={"Fulham"} />
        <SingleStatistic statName={"Shots"} homeTeamName={"Arsenal"} awayTeamName={"Fulham"} />
        <SingleStatistic statName={"Corners"} homeTeamName={"Arsenal"} awayTeamName={"Fulham"} />
    </div>
    </>
  )
}