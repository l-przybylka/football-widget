import { useState } from "react"
import styles from "./MatchDetails.module.css"

export const MatchDetails = () => {
    const [activeTab, setActiveTab] = useState("General")
    const changeActiveTab = (tabName) => {
        return setActiveTab(tabName)
    }
    return (
        <>
            <ul className={styles.nav}>
                <li className={`${activeTab === "Overview" ? styles.active : styles.inactive} ${styles.item}`} onClick={() => changeActiveTab("Overview")}>Overview</li>
                <li className={`${activeTab === "General" ? styles.active : styles.inactive} ${styles.item}`} onClick={() => changeActiveTab("General")}>General</li>
                <li className={`${activeTab === "Team A" ? styles.active : styles.inactive} ${styles.item}`} onClick={() => changeActiveTab("Team A")}>Team A</li>
                <li className={`${activeTab === "Team B" ? styles.active : styles.inactive} ${styles.item}`} onClick={() => changeActiveTab("Team B")}>Team B</li>
                <li className={`${activeTab === "Player" ? styles.active : styles.inactive} ${styles.item}`} onClick={() => changeActiveTab("Player")}>Player</li>
            </ul>
            <div className={activeTab !== "Overview" ? styles.hide : ''}>
                <h4>Overview</h4>
                <p>Work in progress Overview</p>
            </div>
            <div className={activeTab !== "General" ? styles.hide : ''}>
                <h4>General</h4>
                <p>Work in progress General</p>
            </div>
            <div className={activeTab !== "Team A" ? styles.hide : ''}>
                <h4>Team A</h4>
                <p>Work in progress Team A</p>
            </div>
            <div className={activeTab !== "Team B" ? styles.hide : ''}>
                <h4>Team B</h4>
                <p>Work in progress Team B</p>
            </div>
            <div className={activeTab !== "Player" ? styles.hide : ''}>
                <h4>Player</h4>
                <p>Work in progress Player</p>
            </div>
        </>
    )
}