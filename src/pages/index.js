import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Container } from '@/components/Container'
import { MatchInfo } from '@/components/MatchInfo'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
          <MatchInfo />
        </Container>
      </main>
    </>
  )
}
