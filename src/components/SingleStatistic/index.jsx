export const SingleStatistic = ({ statName, homeTeamName, homeTeamStat, awayTeamName, awayTeamStat }) => {
  return (
    <>
      <h5>{statName}</h5>
      <div>
        <span>{homeTeamName}</span>
        <span>{homeTeamStat}</span>
      </div>
      <div>
        <span>{awayTeamName}</span>
        <span>{awayTeamStat}</span>
      </div>

    </>
  )
}