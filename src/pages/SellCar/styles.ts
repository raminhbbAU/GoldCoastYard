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

export const Title2 = styled("p")`
  font-size: 22px;
  font-weight: 500;
  color: #474747;
  white-space:pre-line;
`;


export const InnerBannerContainer = styled("div")`
  background-color:black;
  border-radius:5px;
  height:350px;
  margin-bottom:35px;

  /* Extra small devices (phones, 768px and down) */
  @media only screen and (max-width: 768px) 
  {
    width:100%;
    height:auto;
  }


`;

export const InnerBannerImage = styled("img")<any>`
  width:100%;
  height:350px;
  border-top-left-radius:5px;
  border-bottom-left-radius:5px;

  @media only screen and (max-width: 768px) 
  {
    height:245px;
  }

`;

export const InnerBannerTextContainer = styled("div")`
  height:350px;
  width:100%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  align-content:center;
  text-align:center;
  padding-right:40px;
  padding-left:40px;

  @media only screen and (max-width: 768px) 
  {
    height:350px;
  }
`;

export const InnerBannerText = styled("p")`
  font-size:22px;
  font-weight:700;
  color:#f0da13; 
`;
