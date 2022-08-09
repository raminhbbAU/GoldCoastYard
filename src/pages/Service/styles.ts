import styled from "styled-components";

export const MainContainer = styled("section")` 
    margin-top: 50px;
    margin-left:20px;
    margin-left:20px;
`;
export const Overview = styled("div")`

`;

export const Title = styled("p")<any>`
  font-size: 22px;
  font-weight: 800;
  color: #474747;
  white-space:pre-line;
  display: ${(p)=> (p.display ? p.display : "")} ;
  font-family:"Poppins Semi Bold";
`;

export const Content = styled("p")<any>`
  font-size: 22px;
  color: #474747;
  white-space:pre-line;
  display: ${(p)=> (p.display ? p.display : "")} ;
  font-family:"Poppins Light";
`;

export const Title2 = styled("p")`
  font-size: 22px;
  font-weight: 500;
  color: #474747;
  white-space:pre-line;
`;

export const FormContainer = styled("section")` 
  padding: 20px;
`;