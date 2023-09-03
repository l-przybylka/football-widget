import { useState } from "react"
import styles from "./MatchDetails.module.css"
import { MatchDetailsTabs } from "../MatchDetailsTabs"

export const MatchDetails = () => {
    const [activeTab, setActiveTab] = useState("General")
    const changeActiveTab = (tabName) => {
        return setActiveTab((tabName))
    }
    return (
        <>
            {/* li and divs can be refactored and be their own modules, I could use an array of names and then map to generate them but how can I pass individual data into them that way? */}
            <ul className={styles.nav}>
                <li className={`${activeTab === "Overview" ? styles.active : styles.inactive} ${styles.item}`} onClick={() => changeActiveTab("Overview")}>Overview</li>
                <li className={`${activeTab === "General" ? styles.active : styles.inactive} ${styles.item}`} onClick={() => changeActiveTab("General")}>General</li>
                <li className={`${activeTab === "Team A" ? styles.active : styles.inactive} ${styles.item}`} onClick={() => changeActiveTab("Team A")}>Team A</li>
                <li className={`${activeTab === "Team B" ? styles.active : styles.inactive} ${styles.item}`} onClick={() => changeActiveTab("Team B")}>Team B</li>
                <li className={`${activeTab === "Player" ? styles.active : styles.inactive} ${styles.item}`} onClick={() => changeActiveTab("Player")}>Player</li>
            </ul>
            <MatchDetailsTabs tabName={"Overview"} currentlyActiveTab={activeTab} />
            <MatchDetailsTabs tabName={"General"} currentlyActiveTab={activeTab} />
            <MatchDetailsTabs tabName={"Team A"} currentlyActiveTab={activeTab} />
            <MatchDetailsTabs tabName={"Team B"} currentlyActiveTab={activeTab} />
            <MatchDetailsTabs tabName={"Player"} currentlyActiveTab={activeTab} />
        </>
    )
}