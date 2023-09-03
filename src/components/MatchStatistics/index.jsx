import { useState } from "react"
import styles from "./MatchStatistics.module.css"
import { SingleStatistic } from "../SingleStatistic"


export const MatchStatistics = ({ statistics }) => {
  // state will hold which part of the match we are in full time 1st or 2nd half
  console.log(statistics)
  const [activeTab, setActiveTab] = useState("General")
  const changeActiveTab = (tabName) => {
    return setActiveTab((tabName))
  }
  return (
    <>
      <h5>General</h5>

      <ul className={styles.nav}>
        <li className={`${activeTab === "Full time" ? styles.active : styles.inactive} ${styles.item}`} onClick={() => changeActiveTab("Full time")}>Full time</li>
        <li className={`${activeTab === "1st half" ? styles.active : styles.inactive} ${styles.item}`} onClick={() => changeActiveTab("1st half")}>1st half</li>
        <li className={`${activeTab === "2nd half" ? styles.active : styles.inactive} ${styles.item}`} onClick={() => changeActiveTab("2nd half")}>2nd half</li>

      </ul>
      <div>
        <SingleStatistic currentlyActiveTab={activeTab} statName={"Possesion"} homeTeamName={"Arsenal"} awayTeamName={"Fulham"} />
        <SingleStatistic currentlyActiveTab={activeTab} statName={"Shots on Target"} homeTeamName={"Arsenal"} awayTeamName={"Fulham"} />
        <SingleStatistic currentlyActiveTab={activeTab} statName={"Shots"} homeTeamName={"Arsenal"} awayTeamName={"Fulham"} />
        <SingleStatistic currentlyActiveTab={activeTab} statName={"Corners"} homeTeamName={"Arsenal"} awayTeamName={"Fulham"} />
      </div>
    </>
  )
}