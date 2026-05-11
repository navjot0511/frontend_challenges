/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next"
import { useState } from "react"
import styled from "styled-components"
import dynamic from "next/dynamic"
import { useQuery } from "react-query"
const Map = dynamic(() => import("../../components/Map"), { ssr: false })
import getConfig from 'next/config'
import Head from "next/head"

const { publicRuntimeConfig: { IPIFY_API_KEY } } = getConfig()

type IPResponseType = {
  ip: string,
  isp: string,
  location: {
    timezone: string,
    lat: number,
    lng: number,
    region: string,
    country: string,
    postalCode: string
  }
}

const ipify = async (ipAddress: string): Promise<IPResponseType> => {
  return fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${IPIFY_API_KEY}&ipAddress=${ipAddress}`)
    .then(res => res.json())
}

const IPTrackerPage: NextPage = () => {
  const [IP, setIP] = useState('')
  const [isQueryEnabled, setIsQueryEnabled] = useState(false)

  const { data } = useQuery(
    'ip',
    () => ipify(IP),
    { 
      enabled: isQueryEnabled,
      onSettled: () => setIsQueryEnabled(false),
      initialData: {
        ip: '92.212.174.101',
        isp: 'SpaceX Starlink',
        location: {
          timezone: '-05:00',
          lat: 37.38605,
          lng: -122.08385,
          region: 'Brooklyn',
          country: 'NY',
          postalCode: '10001'
        }
      }
        
    }
  )

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (IP.length > 0)
      setIsQueryEnabled(true)
  }

  return (
    <PageWrapper>
      <Styles>
        <Head>
          <title>Frontend Mentor | IP Address Tracker</title>
        </Head>
        <header>
          <h1>IP Address Tracker</h1>
          <form name="form" onSubmit={handleSubmit}>
            <input type="text" name='ip' placeholder="Search for any IP address or domain"
              value={IP}
              onChange={(e) => setIP(e.target.value)}
              required
            />
            <button type="submit">
              {isQueryEnabled
                ? <Spinner />
                : <img src="/assets/challenges/ip-address-tracker-master/images/icon-arrow.svg" alt="submit" />
              }
            </button>
          </form>
        </header>

        <div className="info">
          <div>
            <h3>IP ADDRESS</h3>
            <span id="ip">{data?.ip}</span>
          </div>
          <div>
            <h3>LOCATION</h3>
            <span id="location">{data?.location?.region}, {data?.location?.country} {data?.location?.postalCode}</span>
          </div>
          <div>
            <h3>TIMEZONE</h3>
            <span id="timezone">UTC {data?.location?.timezone}</span>
          </div>
          <div>
            <h3>ISP</h3>
            <span id="isp">{data?.isp}</span>
          </div>
        </div>

        <div id="map">
          <Map position={data?.location && [data?.location.lat, data?.location?.lng]} />
        </div>
      </Styles>
    </PageWrapper>
  )
}

export default IPTrackerPage

const PageWrapper = styled.div`
  background-color: gray;
  height: 70vh;

  & * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
  }
`

const Spinner = styled.div`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  vertical-align: -.125em;
  border: .15em solid white;
  border-right-color: transparent;
  border-radius: 50%;
  animation: .75s linear infinite spinner-border;

  @keyframes spinner-border {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`


const Styles = styled.div`
header {
  background-image: url('/assets/challenges/ip-address-tracker-master/images/pattern-bg.png');
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3rem 1rem;

  h1 {
    color: white;
    font-weight: 500;
    font-size: 1.8rem;
    text-align: center;
  }

  form {
    display: flex;
    width: 100%;
    margin-top: 1.2rem;
    margin-bottom: 6rem;

    input, button {
      padding: .8rem 1rem;
      font-size: 18px;
      border: none;
    }

    input {
      width: 95%;
      border-radius: .8rem 0 0 .8rem;
    }

    button {
      background-color: black;
      border-radius: 0 .8rem .8rem 0;
      cursor: pointer;
      transition: background-color 500ms ease-in-out;

      &:hover {
        background-color: #656565;
      }
    }

  }
}

.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 1rem;
  padding-bottom: 0;
  border-radius: .8rem;
  width: 95%;
  margin: auto;
  margin-top: -7.5rem;
  position: relative;
  z-index: 1000000;

  h3 {
    text-align: center;
    color:  hsl(0, 0%, 59%);
    font-size: .8rem;
    margin-bottom: .5rem
  }

  span {
    text-align: center;
    color: hsl(0, 0%, 17%);
    font-weight: 500;
    display: block;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
}

#map {
  width: 100%;
  height: calc(100vh - 243px);
  margin-top: -10rem;

  & > div {
    width: 100%;
    height: 100%;
  }
}

@media screen and (min-width: 588px) {
  header > form {
    width: 500px;
    margin-bottom: 3rem;
  }

  .info { 
    flex-direction: row;
    align-items: flex-start;
    width: fit-content;
    margin-top: -4rem;
    border-radius: 1rem;
    margin-bottom: 1rem;
    padding-bottom: 1rem;

    div {
      padding: 1rem 1.5rem;
      height: 100%;
      border-right: .5px solid #d9d9d9;
    }

    div:last-child {
      border: none
    }

    h3 {
      text-align: left;
    }
    
    span {
      text-align: left;
      font-size: 1.5rem;
    }
  }

  #map {
    margin-top: -5.2rem;
  }
}

`