import styles from "./MatchDetailsTabs.module.css"

export const MatchDetailsTabs = ({ tabName, currentlyActiveTab }) => {
    return (
        <>
            <div className={currentlyActiveTab ===  tabName ? '' : styles.hide}>
                <h4>{tabName}</h4>
                <p>Work in progress {tabName}</p>
            </div >
        </>
    )
}