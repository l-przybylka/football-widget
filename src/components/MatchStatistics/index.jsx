import { useState } from "react"
import styles from "./MatchStatistics.module.css"
import { SingleStatistic } from "../SingleStatistic"


export const MatchStatistics = ({ statistics }) => {
  const [activeTab, setActiveTab] = useState("Full-time")
  const changeActiveTab = (tabName) => {
    return setActiveTab((tabName))
  }
  return (
    <>
      <h5>General</h5>

      <ul className={styles.nav}>
        <li className={`${activeTab === "Full-time" ? styles.active : styles.inactive} ${styles.item}`} onClick={() => changeActiveTab("Full-time")}>Full time</li>
        <li className={`${activeTab === "1st-half" ? styles.active : styles.inactive} ${styles.item}`} onClick={() => changeActiveTab("1st-half")}>1st half</li>
        <li className={`${activeTab === "2nd-half" ? styles.active : styles.inactive} ${styles.item}`} onClick={() => changeActiveTab("2nd-half")}>2nd half</li>

      </ul>
      <div>
        <SingleStatistic tabName={"Full-time"} currentlyActiveTab={activeTab} statistics={statistics} />
        <SingleStatistic tabName={"1st-half"} currentlyActiveTab={activeTab} statistics={statistics} />
        <SingleStatistic tabName={"2nd-half"} currentlyActiveTab={activeTab} statistics={statistics} />
      </div>
    </>
  )
}