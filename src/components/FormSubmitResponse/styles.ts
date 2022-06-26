import styled from "styled-components";

export const MainContainer = styled("div")`
  margin-top:30px;
  padding: 15px;
  background-color:white;
  border-radius: 10px;
  box-shadow: 3px 3px 3px 3px #f5f4f4;
  display:flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction:column;

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