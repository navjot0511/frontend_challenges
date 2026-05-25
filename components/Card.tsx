import styled from "styled-components";
import type { ChallengeType } from "../types";
import Image from "next/legacy/image";
import Link from "next/link";

const Card: React.FC<ChallengeType> = ({ src, title, image, date }) => (
  <StyledWrapper>
    <div className="card">
      <div className="card-background" />
      <Link href={`/challenges/${src}/`}>

        <div className="card-image">
          <Image
            src={`/assets/challenges/${src}/design/${image}`}
            width={400}
            height={300}
            alt={title}
          />
        </div>

      </Link>
      <div className="card-body">
        <div className="card-info">
          <h2 className="card-title">{title}</h2>
          <small className="card-text">{date}</small>
        </div>
        <div className="card-buttons">
          <a
            href={`https://github.com/navjot0511/frontend_challenges/tree/master/pages/challenges/${src}.tsx`}
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            Code
          </a>
          <Link href={`/challenges/${src}/`} className="btn">
            View
          </Link>
        </div>
      </div>
    </div>
  </StyledWrapper>
);

export default Card;

const StyledWrapper = styled.div`
  .card {
    width: 100%;
    height: 100%;
    position: relative;
    font-family: "Lato", sans-serif;
    z-index: 0;

    a {
      text-decoration: none;
      color: inherit;
    }

    .card-image {
      width: 100%;
      aspect-ratio: 4/3;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 6px;
      }
    }

    .card-body {
      margin-top: 0.6rem;
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;

      & > a {
        width: 62%;
      }
      .card-buttons {
        min-width: 108px;
      }
    }

    .card-title {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      font-weight: 900;
      font-size: 17px;
      margin: 0 0 0.25rem;
      display: block;
      transition: all 0.2s ease;
      text-align: right;
    }

    .card-text {
      color: #b7bbc8;
      font-size: 14px;
      line-height: 1.2;
      transition: all 0.2s ease;
      text-align: right;
      display: block;
    }

    .card-background {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: -1rem;
      border-radius: 10px;
      overflow: hidden;
      z-index: -1;
      background: #1e1f26;
      clip-path: inset(26px 0px 26px 26px round 10px);
      transition: clip-path 0.3s ease 0.1s;
      contain: strict;
    }

    &:hover .card-background {
      clip-path: inset(0 0 0 0 round 10px);
      transition-delay: 0s;
    }

    &:hover .btn {
      transform: translateY(0);
      opacity: 1;
      transition-timing-function: cubic-bezier(0.2, 0.15, 0.1, 1), ease;
      transition-delay: 0.2s;
    }

    .btn {
      font-size: 0.8rem;
      margin-right: 5px;
      border-radius: 4px;
      color: #ffffff;
      background-color: #000000;
      border: 0;
      padding: 6px 8px;
      text-align: center;
      font-weight: 600 !important;
      display: inline-block;
      text-decoration: none;
      transform: translateY(-50%);
      opacity: 0;
      transition: all 0.2s ease;
      transition-timing-function: cubic-bezier(1, 0, 0.65, 0.75), linear;

      &:nth-child(2) {
        transition-delay: 0.05s !important;
      }

      &:hover {
        background: #5a5f73;
      }
    }
  }
`;
