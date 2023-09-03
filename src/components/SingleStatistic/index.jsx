export const SingleStatistic = ({ currentlyActiveTab, tabName, statistics }) => {
  console.log(statistics.away)
  if (currentlyActiveTab === "Full-time" && tabName === "Full-time") {
    return (
      <>
        <div>
          <h5>{statistics.home.teamName}</h5>
          <ul>
            <li>Total shots: {statistics.home.stats[0].value}</li>
            <li>Shots on target: {statistics.home.stats[1].value}</li>
            <li>Corners: {statistics.home.stats[2].value}</li>
            <li>Possesion: {statistics.home.stats[3].value}%</li>
          </ul>
        </div>
        <div>
        <h5>{statistics.away.teamName}</h5>
          <ul>
            <li>Total shots: {statistics.away.stats[2].value}</li>
            <li>Shots on target: {statistics.away.stats[3].value}</li>
            <li>Corners: {statistics.away.stats[4].value}</li>
            <li>Possesion: {statistics.away.stats[5].value}%</li>
          </ul>
        </div>
      </>
    )
  } else if (currentlyActiveTab === "1st-half" && tabName === "1st-half") {
    return (
      <>
      <div>
        <h5>{statistics.home.teamName}</h5>
        <ul>
          <li>Total shots: {statistics.home.stats[0].fh}</li>
          <li>Shots on target: {statistics.home.stats[1].fh}</li>
          <li>Corners: {statistics.home.stats[2].fh}</li>
          <li>Possesion: {statistics.home.stats[3].fh}%</li>
        </ul>
      </div>
      <div>
      <h5>{statistics.away.teamName}</h5>
        <ul>
          <li>Total shots: {statistics.away.stats[2].fh}</li>
          <li>Shots on target: {statistics.away.stats[3].fh}</li>
          <li>Corners: {statistics.away.stats[4].fh}</li>
          <li>Possesion: {statistics.away.stats[5].fh}%</li>
        </ul>
      </div>
    </>
    )
  } else if (currentlyActiveTab === "2nd-half" && tabName === "2nd-half") {
    return (
      <>
      <div>
        <h5>{statistics.home.teamName}</h5>
        <ul>
          <li>Total shots: {statistics.home.stats[0].sh}</li>
          <li>Shots on target: {statistics.home.stats[1].sh}</li>
          <li>Corners: {statistics.home.stats[2].sh}</li>
          <li>Possesion: {statistics.home.stats[3].sh}%</li>
        </ul>
      </div>
      <div>
      <h5>{statistics.away.teamName}</h5>
        <ul>
          <li>Total shots: {statistics.away.stats[2].sh}</li>
          <li>Shots on target: {statistics.away.stats[3].sh}</li>
          <li>Corners: {statistics.away.stats[4].sh}</li>
          <li>Possesion: {statistics.away.stats[5].sh}%</li>
        </ul>
      </div>
    </>
    )
  }
}