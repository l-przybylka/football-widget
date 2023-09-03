import { MatchStatistics } from "../MatchStatistics"
import styles from "./MatchDetailsTabs.module.css"


export const MatchDetailsTabs = ({ tabName, currentlyActiveTab, statistics }) => {

    if (currentlyActiveTab === "General" && tabName === "General") {
        return (
            <MatchStatistics statistics={statistics} />
        )
    } else
        return (
            <>
                <div className={currentlyActiveTab === tabName ? '' : styles.hide}>
                    <h4>{tabName}</h4>
                    <p>Work in progress {tabName}</p>
                </div >
            </>
        )
}