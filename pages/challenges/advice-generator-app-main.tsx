import type { NextPage } from "next"
import styled from "styled-components"
import Image from "next/future/image"
import { useQuery } from "react-query"
import Head from "next/head"

type AdviceType = {
  id: number,
  advice: string
}

interface Props {
  initialData: AdviceType
}

const fetchAdvice = (): Promise<AdviceType> => 
  fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => data.slip)

const Page: NextPage<Props> = ({ initialData }) => {
  const { data, refetch } = useQuery('advice', fetchAdvice, { initialData })

  return (
    <PageWrapper>
      <Head>
        <title>Frontend Mentor | Advice Generator</title>
      </Head>
      <AdviceCard>
        <h1>
          Advice #{data?.id}
        </h1>

        <p>
          “{data?.advice}”
        </p>

        <Image 
          src="/assets/challenges/advice-generator-app-main/images/pattern-divider-desktop.svg"
          width={444}
          height={16}
          alt="divider" 
        />

        <Button onClick={() => refetch()}>
          <Image 
            src="/assets/challenges/advice-generator-app-main/images/icon-dice.svg"
            width={24}
            height={24}
            alt="dice icon"
          />
        </Button>
      </AdviceCard>

    </PageWrapper>
  )
}

export default Page

export async function getServerSideProps(ctx: any) {
  const data = await fetchAdvice()
  return {
    props: { initialData: data },
  }
}

const PageWrapper = styled.div`
  background-color: #1f2632;
  height: 100vh;
  display: flex;
`

const AdviceCard = styled.div`
  background-color: #323a49;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border-radius: 1rem;
  position: relative;
  width: calc(min(100%, 600px));
  margin: auto;


h1 {
  color: #52ffa8;
  font-size: .8rem;
  font-family: 'Manrope', sans-serif;
  text-transform: uppercase;
  letter-spacing: 4px;
  margin-bottom: 1rem;
}

p {
  color: white;
  font-family: 'Manrope', sans-serif;
  font-size: 28px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 1rem;
}

& > img {
  margin-bottom: 1.5rem;
}
`

const Button = styled.button`
  position: absolute;
  bottom: -28px;
  background-color: #52ffa8;
  border-radius: 50%;
  padding: 1rem;
  display: flex;
  transition: .5s;
  border: 0px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 15px #52ffa8;
  }
`
