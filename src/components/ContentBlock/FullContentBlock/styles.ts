import styled from "styled-components";

interface StyleProps {
  image?: string;
  minimumheight?:any;
} 

export const FullBlockContainer = styled.section<StyleProps>`
  position: relative;
  padding: 5px 5px 15px 5px;
  text-align: center;
  background-image: url(${props => props.image});
  background-repeat:no-repeat;
  background-size: 1280px 100%;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  @media only screen and (max-width: 1024px) {
    padding: 8rem 0 6rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 4rem 0 3rem;
  }
  max-height: 705px;
  max-width: 1920px;
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
