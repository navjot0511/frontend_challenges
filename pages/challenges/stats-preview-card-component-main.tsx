import type { NextPage } from 'next'
import styled from 'styled-components'
import HeaderImage from '../../public/assets/challenges/stats-preview-card-component-main/images/image-header-desktop.jpg'
import Image from 'next/future/image'

const StatsPage: NextPage = () => {
  return (
    <PageWrapper>
      <StatsPreviewCard />
    </PageWrapper>
  )
}

export default StatsPage

const PageWrapper = styled.div`
  background-color: #090b1a;
  display: grid;
  place-items: center;
  min-height: 100vh;
  color: white;
  font-family: "Inter", sans-serif;

  & * {
    transition: all 300ms;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

const StatsPreviewCard = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card__hero">
          <Image 
            src={HeaderImage} 
            alt="header image"
          />
        </div>

        <div className="card__body">
          <div className="card__title">
            <h1>Get <span className="purple">insights</span> that help your business grow.</h1>

            <p>
              Discover the benefits of data analytics and make better decisions regarding revenue, customer
              experience, and overall efficiency.
            </p>

            <div className="card__stats">
              <div className="stat">
                <div className="stat__count">10k+</div>
                <div className="stat__name">COMPANIES</div>
              </div>

              <div className="stat">
                <div className="stat__count">314</div>
                <div className="stat__name">TEMPLATES</div>
              </div>

              <div className="stat">
                <div className="stat__count">12M+</div>
                <div className="stat__name">QUERIES</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
.card {
  width: 250px;
  margin: 1rem;
  overflow: hidden;
  border-radius: 0.45rem;
  background-color: #1b1938;
}

.card__hero {
  position: relative;
}
.card__hero::after {
  content: "";
  position: absolute;
  background-color: rgba(101, 0, 163, 0.58);
  width: 100%;
  height: 99%;
  left: 0;
}
.card__hero img {
  width: 100%;
  height: 180px;
}

.card__body {
  margin: 1.2rem;
  text-align: center;
}

.card__title h1 {
  font-size: 1.4rem;
  margin-bottom: 1rem;
}
.card__title p {
  font-size: 0.8rem;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.75);
}

.purple {
  color: #aa5cdb;
}

.card__stats {
  display: flex;
  flex-direction: column;
}
.card__stats .stat {
  margin-bottom: 1rem;
}
.card__stats .stat .stat__count {
  font-size: 1.2rem;
  font-weight: 700;
}
.card__stats .stat .stat__name {
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.7rem;
}

@media screen and (min-width: 1024px) {
  .card {
    display: flex;
    flex-direction: row-reverse;
    width: 900px;
  }

  .card__body {
    margin: 3rem;
    text-align: left;
    width: 50%;
  }

  .card__hero::after {
    height: 100%;
  }
  .card__hero img {
    height: 100%;
    -o-object-fit: cover;
       object-fit: cover;
  }

  .card__title h1 {
    font-size: 1.8rem;
  }
  .card__title p {
    margin-top: 2rem;
  }

  .card__stats {
    flex-direction: row;
  }
  .card__stats .stat {
    margin-right: 2.6rem;
    margin-top: 3rem;
  }
  .card__stats .stat .stat__count {
    font-size: 1.5rem;
  }
  .card__stats .stat .stat__name {
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }
}
`
