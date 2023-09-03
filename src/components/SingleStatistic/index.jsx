export const SingleStatistic = ({ currentlyActiveTab, tabName, statName, homeTeamName, homeTeamStat, awayTeamName, awayTeamStat }) => {
  if (currentlyActiveTab === "Full-time" && tabName === "Full-time") {
    return (
      <span>fulltime</span>
    )
  } else if (currentlyActiveTab === "1st-half" && tabName === "1st-half") {
    return (
      <span>1sthalf</span>
    )
  } else if (currentlyActiveTab === "2nd-half" && tabName === "2nd-half") {
    return (
      <span>2ndhalf</span>
    )
  }
}