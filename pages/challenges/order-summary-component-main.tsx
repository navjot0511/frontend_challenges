import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import IllustrationHero from '../../public/assets/challenges/order-summary-component-main/images/illustration-hero.svg'
import styled from 'styled-components'

const OrderSummary: NextPage = () => {
  return (
    <PageWrapper>
      <Head>
        <title>Order summary card</title>
      </Head>
      <section className="card">
        <div className="card__hero">
          <Image
            src={IllustrationHero}
            alt="illustration-hero"
          />
        </div>
        <div className="card__body">
          <h1 className="card__title">
            Order Summary
          </h1>
          <p className="card__subtitle">
            You can now listen to millions of songs,
            audiobooks, and podcasts on any device
            anywhere you like!
          </p>

          <div className="card__orderPlan">
            <Img 
              src='/assets/challenges/order-summary-component-main/images/icon-music.svg' 
              alt="icon-music" 
            />
            <span>
              <b>Annual Plan</b>
              <p>$59.99/year</p>
            </span>
            <a href="#">Change</a>
          </div>
        </div>

        <div className="card__footer">
          <button className="card__btn-primary">Proceed to Payment</button>
          <button className="card__btn-secondary">Cancel Order</button>
        </div>

      </section>
    </PageWrapper>
  )
}

export default OrderSummary

const PageWrapper = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  --pale-blue: hsl(225, 100%, 94%);
  --bright-blue: hsl(245, 75%, 52%);
  --very-pale-blue: hsl(225, 100%, 98%);
  --desaturated-blue: hsl(224, 23%, 55%);
  --dark-blue: hsl(223, 47%, 23%);

  background-color: var(--pale-blue);
  background-image: url("/assets/challenges/order-summary-component-main/images/pattern-background-mobile.svg");
  background-repeat: no-repeat;
  background-size: contain;

  font-family: 'Red Hat Display', sans-serif;

  a { color: hsl(228, 45%, 44%); }

  button {
    cursor: pointer;
  }

  /* CARD */
  .card {
    max-width: 352px;
    background-color: white;
    overflow: hidden;
    border-radius: .85rem;
    margin: 1rem;
  }

  .card__hero > img {
    object-fit: contain;
    width: 100%;
  }

  /* CARD BODY */
  .card__body {
    padding: 2rem;
    padding-bottom: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .card__body > h1 {
    color: var(--dark-blue);
    margin-bottom: 1rem;
  }

  .card__body > p {
    text-align: center;
    color: var(--desaturated-blue);
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }

  .card__orderPlan {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 0.75rem;
    background-color: hsl(225, 100%, 98%);
    width: 100%;
    padding: 0.8rem;
  }

  .card__orderPlan > span > p {
    color: var(--desaturated-blue);
  }

  .card__orderPlan > span {
    font-size: 0.9rem;
    transform: translateX(-20px);
  }

  .card__orderPlan > img{
    width: 2.6rem;
  }

  .card__orderPlan > a {
    font-size: 0.9em;
  }

  .card__orderPlan > a:hover {
    text-decoration: none;
  }

  /* CARD FOOTER */
  .card__footer {
    padding: 0 2rem;
    
  }

  .card__btn-primary {
    background-color: var(--bright-blue);
    width: 100%;
    border: none;
    padding: 0.8rem;
    border-radius: 0.45rem;
    color: white;
    font-size: 0.9rem;
    font-weight: 600;
    transition: all 500ms;
  }

  .card__btn-primary:hover {
    background-color: var(--desaturated-blue);
  }

  .card__btn-secondary {
    width: 100%;
    background-color: white;
    border: none;
    padding: 0.8rem;
    border-radius: 0.45rem;
    font-size: 0.9rem;
    font-weight: 600; 
    margin: 0.9rem 0;
    color: var(--desaturated-blue);
    transition: color 500ms;
  }

  .card__btn-secondary:hover {
    color: black;
  }


  @media screen and (min-width: 1024px) {
    & {
      background-image: url("/assets/challenges/order-summary-component-main/images/pattern-background-desktop.svg");
    }
  }
`

const Img = styled.img``;
