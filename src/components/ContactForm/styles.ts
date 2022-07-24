import styled from "styled-components";

export const MainFormContainer = styled("div")`
  //margin-top:20px;
  padding: 5px;
  
  //border-radius: 10px;
  //box-shadow: 3px 3px 3px 3px #f5f4f4;

  /* @media only screen and (max-width: 1024px) {
    padding: 10px;
  } */

  background-color:white;
  box-shadow: 1px 2px #C5C7C6  ;
  border: solid 1px #C5C7C6;
  border-radius: 16px;

`;

export const FormGroup = styled("form")`
  width: 100%;

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
  display:flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  height:100%;
  width:100%;
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


export const FormContainer = styled("div")`
  height:auto;
  width:100% ;
`;