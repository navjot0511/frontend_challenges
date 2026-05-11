import type { NextPage } from "next"
import type { MovieType } from "../../types"
import styled from "styled-components"
import { useQuery } from "react-query"
import Image from "next/future/image"
import Head from "next/head"

const fetchMovies = async (): Promise<MovieType[]> => fetch("/api/movies").then(res => res.json())

const Page: NextPage = () => {
  const { data: movies } = useQuery('movies', fetchMovies)

  return (
    <PageWrapper>
      <Head>
        <title>Challenge: Movie Card</title>
      </Head>

      {movies?.map((movie, idx) =>
        <MovieCard key={idx} {...movie} />
      )}
    </PageWrapper>
  )
}

export default Page

const PageWrapper = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  height: 100vh;
  padding-left: 12px;
  padding-right: 12px;
  gap: 12px;

  & * {
    -webkit-transition: all 400ms ease 0ms;
    transition: all 400ms ease 0ms;
  }
  .text-truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

const MovieCard: React.FC<MovieType> = ({
  title,
  image,
  image_wide,
  rating,
  duration,
  year
}) => (
  <CardStyles>
    <div className="card">
      <div
        className="card__imageContainer"
        style={{ backgroundImage: `url(${image_wide})` }}
      >
        <Image
          src={image} alt="card_image"
          width={124}
          height={234}
          className="card__image-portrait"
        />
        <div className="card__imageOverlay">

          <div className="movie">
            <div className="movie__name">
              {title}
            </div>
            <div className="movie__info text-truncate">
              <div className="movie__rating">{rating}</div>
              <div className="movie__duration">{duration}</div>
              <div className="movie__infoSeparator">·</div>
              <div className="movie__year">{year}</div>
            </div>
          </div>

        </div>

      </div>
      <h1 className="card__title text-truncate">{title}</h1>
    </div>
  </CardStyles>
)

const CardStyles = styled.div`
.card {
  display: flex;
  width: 142px;
  height: fit-content;
  flex-direction: column;
}

.card__image-portrait {
  height: 214px;
  overflow: hidden;
  width: 100%;
  opacity: 1;
}

.card__title {
  font: 14px/20px arial,sans-serif;
  letter-spacing: .2px;
  color: black;
}

.card__imageContainer {
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  height: 214px;
  background-size: cover;
}

.card__imageOverlay {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0) radial-gradient(at center top, rgba(32, 33, 36, 0.2), rgba(32, 33, 36, 0.8), transparent 412.931px) repeat scroll 0% 0%;
  padding: 12px;
  font-family: arial,sans-serif;
  display: none;
  position: absolute;
  right: 0;
  top: 0;
}

.card:hover {
  width: 304px;
}

.card:hover .card__image-portrait {
  opacity: 0;
  height: 450px;
}

.card:hover .card__imageOverlay {
  display: block;
}

.movie {
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.movie__name {
  color: #fff;
  font-size: 16px;
  line-height: 20px;
  max-height: 40px;
  text-shadow: 0 1px 2px #3c4043,0 1px 3px #3c4043;
  white-space: normal;
  width: 230px;
}

.movie__info {
  align-items: center;
  display: flex;
  font-size: 14px;
  margin-top: 7px;
  min-height: 16px;
  text-shadow: 0 1px 2px #3c4043,0 1px 3px #3c4043;
}

.movie__infoSeparator {
  margin: 0 4px;
}

.movie__rating {
  border: solid #fff 1px;
  box-sizing: border-box;
  font-size: 12px;
  margin-right: 8px;
  padding: 0 3px;
}
`
