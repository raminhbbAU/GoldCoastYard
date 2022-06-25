import styled from "styled-components";

export const MainContainer = styled("section")` 
    border:2px solid #e4e4e4;
    border-radius: 8px;
    height:"auto";
    width:"100%";
    max-height:"500px";
    margin-bottom:3px;
    padding:5px;
`;

export const Title = styled("p")<any>`
  font-size: 16px;
  font-style: bold;
  font-weight: 700;
  color: ${(p) => (p.color ? p.color : "#727272")};
`;

export const Price = styled("p")`
  font-size: 30px;
  font-weight: 800;
  color: ${(p) => (p.color ? p.color : "black")};
  height:fit-content;
`;

export const PriceDetail = styled("p")<any>`
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  color: ${(p) => (p.color ? p.color : "#727272")};
  
`;
