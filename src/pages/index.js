import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Container } from '@/components/Container'
import { MatchResults } from '@/components/MatchResults'
import { MatchDetails } from '@/components/MatchDetails'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [teamDetails, setTeamDetails] = useState([])
  const [competitionDetails, setCompetitionDetails] = useState([])
  const [scores, setScores] = useState([])
  const [statistics, setStatistics] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  // How to separate this to a different file?

  useEffect(() => {
    fetch("https://frontend-tech-test-ashy.vercel.app/api/match")
      .then(response => response.json())
      .then(data => {
        setTeamDetails(data.match.contestant)
        setCompetitionDetails(data.match.meta)
        setScores(data.match.liveData.matchDetails.scores)
        setStatistics(data.match.liveData.lineups)
        setIsLoading(false)
      })
  }, [])

  if (!isLoading) {
    return (
      <>
        <Head>
          <title>Football Widget</title>
          <meta name="description" content="Results of the football match" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={inter.className}>
          <Container>
            <MatchResults teamDetails={teamDetails} competitionDetails={competitionDetails} scores={scores}/>
            <MatchDetails statistics={statistics} />
          </Container>
        </main>
      </>
    )
  } else {
    return (
      <div>data is loading</div>
    )
  }

}