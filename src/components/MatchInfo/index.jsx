import Image from "next/image"

export const MatchInfo = () => {
    return (
        <>
            <div>
                <h2>Premier League</h2>
                <h3>Full Time</h3>
            </div>
            <div>
                <p>team on the left</p>
                <Image
                    src="/assets/arsenalLogo.png"
                    alt="arsenal logo"
                    width={150}
                    height={150}
                />
                <h4>4</h4>
            </div>
            <div>
                <p>team on the right</p>
                <Image
                    src="/assets/fulhamLogo.png"
                    alt="fulham logo"
                    width={150}
                    height={150}
                />
                <h4>2</h4>
            </div>
        </>
    )
}
