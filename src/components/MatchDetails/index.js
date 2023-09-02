import styles from "./MatchDetails.module.css"

export const MatchDetails = () => {
  return (
    <>
    <ul className={styles.nav}>
        <li className={styles.item}>Overview</li>
        <li className={styles.item}>General</li>
        <li className={styles.item}>Team A</li>
        <li className={styles.item}>Team B</li>
        <li className={styles.item}>Player</li>
    </ul>
    <div>
        <h4>Overview</h4>
        <p>Work in progress</p>
    </div>
    <div>
        <h4>General</h4>
        <p>Work in progress</p>
    </div>
    <div>
        <h4>Team A</h4>
        <p>Work in progress</p>
    </div>
    <div>
        <h4>Team B</h4>
        <p>Work in progress</p>
    </div>
    <div>
        <h4>Player</h4>
        <p>Work in progress</p>
    </div>
    </>
  )
}