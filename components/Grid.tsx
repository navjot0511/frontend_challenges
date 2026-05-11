import styled from 'styled-components'
import Card from "./Card";
import type { ChallengeType } from "../types";

interface GridProps {
  challenges: ChallengeType[];
}

const Grid: React.FC<GridProps> = ({ challenges }) => (
  <StyledWrapper className="grid">
    {challenges.map(challenge => (
      <Card key={challenge.src} {...challenge} />
    ))}
  </StyledWrapper>
)

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(320px,1fr));
  align-items: start;
  justify-items: center;
  grid-gap: 3rem 3rem;
  margin: 40px;
`;

export default Grid;
