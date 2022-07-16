import styled from "styled-components";

export const MainContainer = styled("section")` 
    border:2px solid #e4e4e4;
    border-radius: 8px;
    width:"100%";
    max-height:"500px";
    margin-bottom:3px;
    padding-top:20px;
    padding-left:30px;
    padding-bottom:20px;
    padding-right:30px;
`;

export const Title = styled("p")<any>`
  font-size: 18px;
  font-weight: 900;
  color: ${(p) => (p.color ? p.color : "#727272")};
  height:100%;
`;

export const Price = styled("p")`
  font-size: 46px;
  font-weight: 900;
  font-style:bold;
  color: ${(p) => (p.color ? p.color : "black")};
`;

export const PriceDetail = styled("p")<any>`
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  color: ${(p) => (p.color ? p.color : "#727272")};
  
`;
