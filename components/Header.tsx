import styled from "styled-components";

const Header = () => (
  <StyledHeader>
    <h1>Frontend Web Dev</h1>
    <h2>Challenges</h2>
    <h3>
      Coded by
      <a href="https://github.com/navjot0511"> Navjot Kaur</a>
    </h3>
  </StyledHeader>
);

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #1e1f26;
  padding: 3rem 1rem;
  text-align: center;
  font-family: "Francois One", sans-serif;
  position: relative;
  overflow: hidden;

  h1 {
    text-transform: uppercase;
  }

  h2 {
    font-size: 1.1rem;
    text-transform: uppercase;
    font-family: "Outfit", sans-serif;
    letter-spacing: 0.3rem;
  }

  h3 {
    font-size: 1rem;
    color: #b7bbc8;

    a {
      text-decoration: none;
      color: #b7bbc8;
      &:hover {
        color: #ff7474;
      }
    }
  }

  &:after {
    content: "FRONTEND WEB DEV";
    position: absolute;
    color: #eaeaea04;
    font-size: 10rem;
    width: 150%;
  }
`;
export default Header;
