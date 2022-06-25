import styled from "styled-components";

export const ContactContainer = styled("div")`
  margin-top:20px;
  padding: 5px;
  background-color:white;
  border-radius: 5px;
  box-shadow: 3px 3px 3px 3px #f5f4f4;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }
`;

export const FormGroup = styled("form")`
  width: 100%;
  max-width: 520px;

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`;

export const Span = styled("span")<any>`
  display: block;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  padding: 0 0.675rem;
`;

export const ButtonContainer = styled("div")`
  text-align: end;
  position: relative;

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`;



export const Title = styled("p")`
  font-size: 22px;
  font-style: bold;
  font-weight: 700;
  color: black;
`;

export const Detail = styled("p")`
  font-size: 18px;
  font-weight: 500;
  color: #a8a8a8;
`;