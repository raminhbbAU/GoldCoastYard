import styled from "styled-components";

export const MainContainer = styled("div")`
  margin-top:30px;
  padding: 15px;
  background-color:white;
  display:flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  box-shadow: 1px 2px #C5C7C6  ;
  border: solid 1px #C5C7C6;
  border-radius: 16px;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }
`;


export const Title = styled("p")`
  font-size: 18px;
  font-style: bold;
  font-weight: 700;
  color: black;
`;

export const Subtitle = styled("p")<any>`
  font-size: 15px;
  font-weight: 500;
  color: #a8a8a8;
  text-align: ${(p) => (p.textAlign ? p.textAlign : "")};
`;