import styles from "./MatchInfo.module.css"
import Image from "next/image"

export const MatchInfo = () => {
    return (
        <>
            <div className={styles.header}>
                <h2>Premier League</h2>
                <h3>Full Time</h3>
            </div>
            <div className={styles.container}>
                <div className={styles.team}>
                    <Image
                        src="/assets/arsenalLogo.png"
                        alt="arsenal logo"
                        width={150}
                        height={150}
                    />
                    <p>Arsenal</p>
                    <h4>Score: 4</h4>
                </div>
                <div className={styles.team}>

                    <Image
                        src="/assets/fulhamLogo.png"
                        alt="fulham logo"
                        width={150}
                        height={150}
                    />
                    <p>Fulham</p>
                    <h4>Score: 2</h4>
                </div>
            </div>

        </>
    )
}
