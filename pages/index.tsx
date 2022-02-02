import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'


const Home: NextPage = () => {
  const array = new Array(5).fill('Hello World from Next.js w/ Typescript & Styled-Components')
  return (
    <Container>
      <Head>
        <title>Index</title>
        <meta name="description" content="Hello World from Next.js w/ Typescript & Styled-Components" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      { array.map((text, index) => (
        <Text
          style={{
            color: `hsl(${index*10}, ${index*25}%, ${index*20}%)`}}
            key={index}>
          { text }
        </Text>
      ))}
      
    </Container>
  )
}

export default Home


const Container = styled.div`
  max-width: 960px;
  margin: 1rem auto;
  padding: 2rem;
`
const Text = styled.p`
  font-size: 10vh;
  
  margin-bottom: 4rem;
`