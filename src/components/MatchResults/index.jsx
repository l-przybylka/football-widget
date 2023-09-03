import styles from "./MatchResults.module.css"
import Image from "next/image"

export const MatchResults = ({ teamDetails, competitionDetails, scores }) => {
    console.log(scores)
    return (
        <>
            <div className={styles.header}>
                <h2>{competitionDetails.competition.name}</h2>
                <h3>Full Time</h3>
            </div>
            <div className={styles.container}>
                {/* refactor team into a separate module to avoid duplication */}
                <div className={styles.team}>
                    <Image
                        src="/assets/arsenalLogo.png"
                        alt="arsenal logo"
                        width={150}
                        height={150}
                    />
                    <p>{teamDetails[0].officialName}</p>
                    <span>{teamDetails[0].position}</span>
                    <span>{scores.total.home}</span>
                </div>
                <div className={styles.team}>

                    <Image
                        src="/assets/fulhamLogo.png"
                        alt="fulham logo"
                        width={150}
                        height={150}
                    />
                    <p>{teamDetails[1].officialName}</p>
                    <span>{teamDetails[1].position}</span>
                    <span>{scores.total.away}</span>
                </div>
            </div>

        </>
    )
}
