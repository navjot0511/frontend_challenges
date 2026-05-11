/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next"
import styled from "styled-components"
import Image from 'next/future/image'
import Logo from '../../public/assets/challenges/sunnyside-agency-landing-page-main/images/logo.svg'
import HamburgerIcon from '../../public/assets/challenges/sunnyside-agency-landing-page-main/images/icon-hamburger.svg'
import HeroImage from '../../public/assets/challenges/sunnyside-agency-landing-page-main/images/desktop/image-header.jpg'
import ArrowDown from '../../public/assets/challenges/sunnyside-agency-landing-page-main/images/icon-arrow-down.svg'
import ImageTransform from '../../public/assets/challenges/sunnyside-agency-landing-page-main/images/desktop/image-transform.jpg'
import ImageStandOut from '../../public/assets/challenges/sunnyside-agency-landing-page-main/images/desktop/image-stand-out.jpg'
import ImageGraphicDesign from '../../public/assets/challenges/sunnyside-agency-landing-page-main/images/desktop/image-graphic-design.jpg'
import ImagePhotography from '../../public/assets/challenges/sunnyside-agency-landing-page-main/images/desktop/image-photography.jpg'
import ImageMilkBottle from '../../public/assets/challenges/sunnyside-agency-landing-page-main/images/desktop/image-gallery-milkbottles.jpg'
import ImageOrange from '../../public/assets/challenges/sunnyside-agency-landing-page-main/images/desktop/image-gallery-orange.jpg'
import ImageCone from '../../public/assets/challenges/sunnyside-agency-landing-page-main/images/desktop/image-gallery-cone.jpg'
import ImageSugarcubes from '../../public/assets/challenges/sunnyside-agency-landing-page-main/images/desktop/image-gallery-sugarcubes.jpg'
import { useState } from "react"

const SunnysideAgencyLandingPage: NextPage = () => {
  return (
    <PageWrapper>
      <Styles>
        <Header />
        <HeroSection />
        <Section1 />
        <Section2 />
        <Section3 />
        <Footer />
      </Styles>
    </PageWrapper>
  )
}

export default SunnysideAgencyLandingPage

const PageWrapper = styled.div`
a { text-decoration: none; }
li { list-style: none; }
.d-none { display: none; }
.p-relative { position: relative; }

& * {
  font-family: "Fraunces", serif;
}
`

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <header>
      <Image src={Logo} alt="logo" />

      <button className="hamburger-btn d-none" onClick={() => setShowMenu(!showMenu)}>
        <Image src={HamburgerIcon} alt="hamburger menu" />
      </button>

      <nav className={showMenu ? 'display-menu' : ''}>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

const HeroSection = () => (
  <section className="hero">
    <Image 
      className="hero__image" 
      src={HeroImage} 
      alt="hero image"
      height={900}
      style={{ objectFit: "cover", height: "100vh" }}
    />

    <div>
      <h2>We are creatives</h2>
      <Image className="arrow_down" src={ArrowDown} alt="arrow down" />
    </div>
  </section>
)

const Section1 = () => (
  <section className="container">
    <div className="text-only">
      <h3>Transform your brand</h3>
      <p>We are a full-service creative agency specializing in helping brands grow fast.
        Engage your clients through compelling visuals that do most of the marketing for you.
      </p>

      <a href="#learn-more">LEARN MORE</a>
      <div className="a-underline yellow"></div>
    </div>

    <div>
      <Image src={ImageTransform} alt="transform" placeholder="blur" />
    </div>
    <div>
      <Image src={ImageStandOut} alt="stand out" placeholder="blur" />
    </div>

    <div className="text-only">
      <h3>Stand out to the right audience</h3>
      <p>
        Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we&amp;ll build and extend your brand in digital places.
      </p>

      <a href="#learn-more">LEARN MORE</a>
      <div className="a-underline soft-red"></div>
    </div>

    <div className="p-relative">
      <Image src={ImageGraphicDesign} alt="graphic design" />

      <div className="text-overlay dark-cyan">
        <h3>Graphic Design</h3>
        <p> Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients&amp; attention.</p>
      </div>
    </div>

    <div className="p-relative">
      <Image src={ImagePhotography} alt="graphic design" />

      <div className="text-overlay dark-blue">
        <h3>Photography</h3>
        <p> Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
      </div>
    </div>
  </section>
)

const Section2 = () => (
  <section className="testimonials">
    <h3>Client testimonials</h3>

    <div className="testimony">
      <img src="/assets/challenges/sunnyside-agency-landing-page-main/images/image-emily.jpg" alt="emily r." />
      <p>
        We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
      </p>
      <div>
        <h4>Emily R.</h4>
        <small>Marketing Director</small>
      </div>
    </div>

    <div className="testimony">
      <img src="/assets/challenges/sunnyside-agency-landing-page-main/images/image-thomas.jpg" alt="Thomas S." />
      <p>
        Sunnyside&quot;s enthusiasm coupled with their keen interest in our brand&quot;s success made it a satisfying and enjoyable experience.
      </p>
      <div>
        <h4>Thomas S.</h4>
        <small>Chief Operating Officer</small>
      </div>
    </div>

    <div className="testimony">
      <img src="/assets/challenges/sunnyside-agency-landing-page-main/images/image-jennie.jpg" alt="emily r." />
      <p>
        Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
      </p>
      <div>

        <h4>Jennie F.</h4>
        <small>Business Owner</small>
      </div>
    </div>
  </section>
)

const Section3 = () => (
  <section className="gallery">
    <div><Image src={ImageMilkBottle} alt="milk bottles" placeholder="blur" /></div>
    <div><Image src={ImageOrange} alt="orange" placeholder="blur" /></div>
    <div><Image src={ImageCone} alt="cone" placeholder="blur" /></div>
    <div><Image src={ImageSugarcubes} alt="sugarcubes" placeholder="blur" /></div>
  </section>
)

const Footer = () => (
  <footer>
    <img className="logo" src="/assets/challenges/sunnyside-agency-landing-page-main/images/logo.svg" alt="logo" />

    <ul className="nav-links">
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#projects">Projects</a></li>
    </ul>

    <ul className="contact">
      <li><a href="#facebook"><img src="/assets/challenges/sunnyside-agency-landing-page-main/images/icon-facebook.svg" alt="facebook" /></a></li>
      <li><a href="#instagram"><img src="/assets/challenges/sunnyside-agency-landing-page-main/images/icon-instagram.svg" alt="instagram" /></a></li>
      <li><a href="#twitter"><img src="/assets/challenges/sunnyside-agency-landing-page-main/images/icon-twitter.svg" alt="twitter" /></a></li>
      <li><a href="#pinterest"><img src="/assets/challenges/sunnyside-agency-landing-page-main/images/icon-pinterest.svg" alt="pinterest" /></a></li>
    </ul>

  </footer>
)

const Styles = styled.div`
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  padding: 1.5rem;
  color: white;
  position: absolute;
  width: 100%;
  z-index: 1;
}
header > img {
  width: 10rem;
}
header nav > ul {
  display: flex;
}
header nav > ul a {
  color: white;
  padding: 0.6rem 1rem;
  font-family: "Barlow", sans-serif;
  border-radius: 100px;
  transition: all 0.5s;
}
header nav > ul a:hover {
  color: black;
  background-color: white;
}

.hero {
  width: 100%;
  position: relative;
  margin-bottom: -4px;
}
.hero .hero__image {
  -o-object-fit: contain;
     object-fit: contain;
  width: 100%;
}
.hero div {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: white;
  font-size: 2.5rem;
  letter-spacing: 0.3rem;
  transform: translateY(-20px);
}
.hero h2 {
  font-size: 0.9em;
  margin-bottom: 2rem;
  letter-spacing: 0.3rem;
  text-align: center;
}

.container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.container img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}
.container .text-only {
  padding: 9rem 6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}
.container .text-only h3 {
  font-size: 3rem;
  color: #23303e;
}
.container .text-only p {
  font-size: 1.4rem;
  color: #a7abae;
  font-family: "Barlow", sans-serif;
  margin: 2rem 0;
}
.container .text-only a {
  color: #23303e;
}
.container .text-only a:hover ~ .a-underline {
  opacity: 1;
}
.container .text-only .a-underline {
  content: "";
  width: 126px;
  height: 10px;
  border-radius: 50px;
  opacity: 0.3;
  z-index: -1;
  transition: opacity 0.5s;
  margin-left: -6px;
  margin-top: -10px;
}
.container .text-only .a-underline.soft-red {
  background-color: #fe7867;
}
.container .text-only .a-underline.yellow {
  background-color: #fad400;
}
.container .text-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  text-align: center;
  padding: 5rem 5rem;
  transform: translateY(2rem);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.container .text-overlay h3 {
  margin-bottom: 1rem;
  font-size: 2rem;
}
.container .text-overlay p {
  font-size: 1rem;
  font-family: "Barlow", sans-serif;
  line-height: 1.6rem;
}
.container .dark-blue {
  color: #19536b;
}
.container .dark-cyan {
  color: #25564b;
}

.testimonials {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.8rem;
  margin: 7rem;
}
.testimonials h3 {
  grid-column-start: 1;
  grid-column-end: 4;
  text-align: center;
  color: #a7abae;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  font-size: 1.3rem;
  margin-bottom: 3rem;
}
.testimonials .testimony {
  text-align: center;
  position: relative;
}
.testimonials .testimony img {
  width: 80px;
  height: 80px;
  -o-object-fit: contain;
     object-fit: contain;
  border-radius: 50%;
}
.testimonials .testimony p {
  font-family: "Barlow", sans-serif;
  font-size: 1.2rem;
  color: #818498;
  margin-top: 3em;
  margin-bottom: 5em;
}
.testimonials .testimony div {
  position: absolute;
  width: 100%;
  bottom: 0;
}
.testimonials .testimony h4 {
  color: #23303e;
  font-size: 1.2em;
  margin-bottom: 0.5em;
}
.testimonials .testimony small {
  font-family: "Barlow", sans-serif;
  color: #a7abae;
  font-size: 0.8rem;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 1rem;
}
.gallery img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}

footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 4rem;
  background-color: #90d4c5;
}
footer img.logo {
  width: 10em;
}
footer svg > path {
  fill: #2a7264;
}
footer ul {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
footer ul.nav-links {
  width: 24em;
  margin-top: 2em;
  margin-bottom: 5em;
}
footer ul.nav-links a {
  color: #458c7e;
  font-family: "Barlow", sans-serif;
  transition: color 500ms;
}
footer ul.nav-links a:hover {
  color: white;
}
footer ul.contact {
  width: 14em;
}

@media screen and (max-width: 836px) {
  .hero .hero__image {
    -o-object-fit: cover;
       object-fit: cover;
    height: 600px;
  }

  .container {
    grid-template-columns: 1fr;
  }
  .container .text-only {
    padding: 4rem 1rem;
    text-align: center;
    align-items: center;
  }
  .container .text-only p {
    margin: 2em 0;
  }
  .container .text-only .a-underline {
    margin-left: 0;
  }

  .testimonials {
    grid-template-columns: 1fr;
    gap: 3.8rem;
    margin: 2rem 1rem;
  }
  .testimonials h3 {
    grid-column-start: unset;
    grid-column-end: unset;
  }
  .testimonials .testimony {
    margin-top: 2em;
  }

  .gallery {
    grid-template-columns: repeat(2, 1fr);
  }

  .hamburger-btn {
    display: block;
    background: none;
    border: none;
    transition: opacity 300ms;
    cursor: pointer;
  }
  .hamburger-btn:hover {
    opacity: 0.5;
  }

  header > nav {
    position: absolute;
    top: 95px;
    right: 5%;
    width: 90%;
    display: none;
  }
  header > nav ul {
    flex-direction: column;
    background: white;
    padding: 2rem;
    position: relative;
  }
  header > nav ul li {
    padding: 0.5rem;
    text-align: center;
    font-size: 1.2rem;
  }
  header > nav ul a {
    color: #a7abae;
  }
  header > nav ul a:hover {
    background-color: #fad400;
  }
  header > nav ul::before {
    content: "";
    width: 0;
    height: 0;
    border-bottom: 42px solid white;
    border-left: 36px solid transparent;
    position: absolute;
    top: -40px;
    right: 0;
  }

  .display-menu {
    display: block;
    -webkit-animation: fade-down 0.5s cubic-bezier(0.65, 0.05, 0.36, 1);
            animation: fade-down 0.5s cubic-bezier(0.65, 0.05, 0.36, 1);
  }

  @-webkit-keyframes fade-down {
    0% {
      opacity: 0;
      transform: translateY(-30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @keyframes fade-down {
    0% {
      opacity: 0;
      transform: translateY(-30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
}
`
