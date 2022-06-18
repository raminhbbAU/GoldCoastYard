import styled from "styled-components";

interface StyleProps {
  image?: string;
} 

export const FullBlockContainer = styled.section<StyleProps>`
  position: relative;
  padding: 10rem 40px 8rem;
  text-align: center;
  background-image: url(${props => props.image});
  background-repeat:no-repeat;
  background-size: 1280px 600px;
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  border-radius: 50px;
  @media only screen and (max-width: 1024px) {
    padding: 8rem 0 6rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 4rem 0 3rem;

  }
`;

export const Heading = styled("h6")`
  margin: 1.5rem 0 2rem 0;
  color:#FFFFFF;
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
  color:#FFFFFF;
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-bottom: 4rem;
  }
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: center;
  alignItems: 'center',

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;
