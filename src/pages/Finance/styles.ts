import styled from "styled-components";

export const MainContainer = styled("section")` 
    margin-top: 50px;
    margin-left:20px;
    margin-right:20px;
`;
export const Overview = styled("div")`
  margin-bottom:35px;
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


export const InnerBannerContainer = styled("div")`
  background-color:black;
  border-radius:5px;
  margin-bottom:35px;
  padding-top:25px;
  padding-bottom:25px;
  /* Extra small devices (phones, 768px and down) */
  @media only screen and (max-width: 768px) 
  {
    /* height:700px;
    max-height:700px; */
  }


`;

export const InnerBannerText = styled("p")<any>`
  font-size:${(p)=> (p.fontsize ? p.fontsize : "22px")};
  font-weight:700;
  color:${(p)=> (p.color ? p.color : "#f0da13")};
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  align-content:center;
  text-align:${(p)=> (p.textalign ? p.textalign : "center")};
  height:100%;
  padding-right:40px;
  padding-left:40px;
  white-space:pre-line;

`;

export const FormContainer = styled("section")` 
  padding: 20px;
`;