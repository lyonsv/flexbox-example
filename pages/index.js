import Head from 'next/head'
import Container from '../components/Container'
import Box from '../components/Box'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container>
        <Box />
        <Box />
        <Box variant="ml" />
        <Box />
      </Container>
    </>
  )
}
