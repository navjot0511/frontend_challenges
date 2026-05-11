/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next"
import type { JobType } from "../../types"
import styled from "styled-components"
import { useQuery } from "react-query"
import Head from "next/head"
import { useState } from "react"

const fetchJobs = async (): Promise<JobType[]> => fetch("/api/jobs").then(res => res.json())

const Page: NextPage = () => {
  const { data: jobs } = useQuery('jobs', fetchJobs)
  const [keyword, setKeyword] = useState('')

  return (
    <PageWrapper>
      <Head>
        <title>Challenge: Job Listings</title>
      </Head>

      <Header>
        <h1>Job Listing</h1>
        <picture>
          <source media="(min-width:375px)" srcSet="/assets/challenges/job-listings/bg-header-desktop.svg" />
          <img src="/assets/challenges/job-listings/bg-header-mobile.svg" alt="background" style={{ width: 'auto' }} />
        </picture>

        <div className="search">
          <form>
            <input type="search" placeholder="Search..." id="search-input"
              onChange={e => setKeyword(e.target.value)}
              value={keyword}
            />
          </form>
        </div>
      </Header>


      <main>
        <table>
          <tbody>
            {jobs
              ?.filter(job => JSON.stringify(job).toLowerCase().match(keyword?.toLowerCase()))
              ?.map(job => <Job key={job.id} job={job} setKeyword={setKeyword} />)
            }
          </tbody>
        </table>
      </main>

    </PageWrapper>
  )
}

export default Page

const Job = ({ job, setKeyword }: {
  job: JobType,
  setKeyword: (keyword: string) => void
}) => (
  <JobWrapper id={job.id.toString()} className={job.featured ? 'featured' : ''}>
    <td>
      <img src={`/assets/challenges/job-listings/${job.logo}`} alt={job.company} />
    </td>
    <td>
      <div className="info">
        <div className="info__super">
          <span className="info__company">{job.company}</span>
          {job.new && <span className="info__new">new!</span>}
          {job.featured && <span className="info__featured">featured</span>}
        </div>

        <h1>{job.position}</h1>

        <div className="info__sub">
          <span>{job.postedAt}</span>
          <span>·</span>
          <span>{job.contract}</span>
          <span>·</span>
          <span>{job.location}</span>
        </div>
      </div>
    </td>
    <td>
      <div className="tags">
        {job.languages.map(lang => <button key={lang} onClick={() => setKeyword(lang)}>{lang}</button>)}
      </div>
    </td>
  </JobWrapper>
)

const colors = {
  bg: 'hsl(180, 52%, 96%)',
  primary: 'hsl(180, 29%, 50%)',
  lightGrayishCyan: 'hsl(180, 31%, 95%)',
  darkGrayishCyan: 'hsl(180, 8%, 52%)',
  veryDarkGrayishCyan: 'hsl(180, 14%, 20%)',
}

const PageWrapper = styled.div`
  margin: 0;
  * {
    font-family: 'League Spartan', sans-serif;
  }

  table {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
  }

  main {
    margin-top: 2rem;
  }
`

const Header = styled.header`
  height: 156px;
  background-color: ${colors.primary};
  width: 100%;
  overflow-x: none;

  img {
    animation: scroll 10s linear infinite;
  }

  h1 {
    position: absolute;
    font-size: 5rem;
    text-transform: uppercase;
    z-index: 0;
    color: #5b89a4de;
    letter-spacing: 0.6rem;
    width: 100%;
    text-align: center;
    margin-top: 10px;
    text-shadow: 4px 2px 6px #63baba;
    height: 156px;
    overflow: hidden;
  }

  .search {
    width: 97%;
    max-width: 785px;
    background: white;
    display: flex;
    justify-content: center;
    margin: 5px auto;
    margin-top: -25px;
    border-radius: 6px;
    overflow: hidden;
    filter: drop-shadow(5px 5px 5px ${colors.veryDarkGrayishCyan});
  }

  form {
    width: 100%;
  }

  input {
    width: 100%;
    height: 100%;
    padding: 12px;
    font-size: 26px;
    border: none;
    font-weight: 500;
  }

  .search::before {
    content: "🔍";
    font-size: 26px;
    padding: 12px;
    padding-right: 6px;
  }

  input:focus {
    outline: none;
  }

  @media screen and (min-width: 664px) {
    h1 {
      font-size: 10rem;
    }
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-100%);
    }
  }
`

const JobWrapper = styled.tr`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px;
  padding-top: 38px;
  background: white;
  margin: 42px 5px;
  border-radius: 6px;
  filter: drop-shadow(5px 5px 5px ${colors.darkGrayishCyan});

  img {
    width: 54px;
    height: 54px;
    border-radius: 50%;
    object-fit: cover;
    position: absolute;
    transform: translateY(-65px);
    transition: all 300ms;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 0 6px
  }

  .info__super {
    display: flex;
    gap: 5px;
    align-items: center;
  }

  .info__company {
    color: ${colors.primary};
    margin-right: 12px;
  }

  .info__new,
  .info__featured {
    background: ${colors.primary};
    color: white;
    padding: 3px 6px;
    padding-top: 6px;
    border-radius: 50px;
    text-transform: uppercase;
    font-size: 13px;
  }

  .info__featured {
    background: ${colors.veryDarkGrayishCyan};
  }

  .info h1 {
    color: ${colors.veryDarkGrayishCyan};
    font-size: 22px;
  }

  .info__sub {
    color: ${colors.darkGrayishCyan};
    display: flex;
    gap: 12px;
  }

  td:nth-child(3) {
    width: 100%;
  }

  .tags {
    width: 100%;
    display: flex;
    gap: 12px;
    border-top: 1px solid #7b8e8e63;
    padding-top: 14px;
    padding-bottom: 6px;
    margin-top: 14px;
  }

  .tags>button {
    border: none;
    background: ${colors.lightGrayishCyan};
    color: ${colors.primary};
    font-weight: 700;
    font-size: 15px;
    padding: 6px 10px;
    border-radius: 4px;
    transition: all 300ms;
  }

  .tags>button:hover {
    background: ${colors.primary};
    color: white;
    cursor: pointer;
  }


  @media screen and (min-width: 664px) {
    padding-top: 8px;
    margin: 25px 5px;
    flex-direction: row;
    align-items: center;

    img {
      width: 88px;
      height: 88px;
      position: relative;
      margin-right: 8px;
      transform: translateY(0px);
    }

    td:nth-child(3) {
      flex: 1;
    }

    .tags {
      justify-content: flex-end;
      border-top: none;
      padding: 0 !important;
      margin: 0 !important;
    }
  }
`
