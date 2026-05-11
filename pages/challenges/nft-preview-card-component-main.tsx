/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next"
import styled from "styled-components"
import Image from 'next/future/image'
import ImageEquilibrium from '../../public/assets/challenges/nft-preview-card-component-main/images/image-equilibrium.jpg'

const Page: NextPage = () => {
  return (
    <PageWrapper>
      <NFTCard />
    </PageWrapper>
  )
}

export default Page

const PageWrapper = styled.div`
  background-color: #0d192b;
  color: white;
  min-height: 100vh;
  display: -ms-grid;
  display: grid;
  place-items: center;
  font-family: 'Outfit', sans-serif;
`

const NFTCard = () => (
  <NFTCardStyles>
    <div className="card">
      <div className="card-image">
        <Image src={ImageEquilibrium} alt="equilibrium image" placeholder="blur" />
        <div className="image-overlay">
          <img src="/assets/challenges/nft-preview-card-component-main/images/icon-view.svg" alt="view image" />
        </div>
      </div>
      <h1 className="card-title">
        Equilibrium #3429
      </h1>
      <p className="card-text">
        Our Equilibrium collection promotes balance and calm.
      </p>

      <div className="card-info">
        <span>
          <img src="/assets/challenges/nft-preview-card-component-main/images/icon-ethereum.svg" alt="ethereum icon" />
          <span className="card-info-text eth-value">0.041 ETH</span>
        </span>

        <span>
          <img src="/assets/challenges/nft-preview-card-component-main/images/icon-clock.svg" alt="ethereum icon" />
          <span className="card-info-text time">3 days left</span>
        </span>
      </div>

      <div className="card-author">
        <img src="/assets/challenges/nft-preview-card-component-main/images/image-avatar.png" alt="Jules Wyvern's avatar" className="avatar" />
        <div className="caption">
          <span>Creation of</span>
          <span className="author">Jules Wyvern</span>
        </div>
      </div>
    </div>
  </NFTCardStyles>
)

const NFTCardStyles = styled.div`
.card {
  background-color: #14253d;
  max-width: 350px;
  padding: 1.5rem;
  border-radius: 1.2em;
}

.card .card-image {
  width: 100%;
  position: relative;
  margin-bottom: 1.5rem;
  overflow: hidden;
  border-radius: .5em;
}

.card .card-image > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.card .card-image .image-overlay {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00fff775;
  overflow: hidden;
  transition: opacity 700ms;
}

.card .card-image:hover .image-overlay {
  opacity: 1;
  cursor: pointer;
}

.card .card-title {
  font-size: 1.25rem;
  -webkit-transition: color 400ms;
  transition: color 400ms;
}

.card .card-title:hover {
  color: #00fff7;
  cursor: pointer;
}

.card .card-text {
  font-size: .97em;
  font-weight: 300;
  line-height: 1.8rem;
  padding: .85rem 0;
  color: #8bacda;
}

.card .card-info {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: space-between;
  padding-bottom: .8rem;
  margin-bottom: .8rem;
  border-bottom: 0.1px solid #2f415b;
}

.card .card-info span {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
}

.card .card-info span .card-info-text {
  margin-left: .5rem;
  font-size: .9rem;
}

.card .card-info span .eth-value {
  color: #00fff7;
  font-weight: bold;
}

.card .card-info span .time {
  color: #94acd2;
}

.card .card-author {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
}

.card .card-author .avatar {
  width: 32px;
  border: .5px solid white;
  border-radius: 50%;
}

.card .card-author .caption {
  font-size: .95rem;
  font-stretch: semi-expanded;
  margin-left: 1rem;
  color: #8bacda;
}

.card .card-author .caption .author {
  color: white;
  margin-left: .2rem;
  -webkit-transition: color 400ms;
  transition: color 400ms;
}

.card .card-author .caption .author:hover {
  color: #00fff7;
  cursor: pointer;
}
`
