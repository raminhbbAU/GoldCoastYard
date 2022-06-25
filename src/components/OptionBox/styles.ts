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


export const Detail = styled("p")<any>`
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  color: ${(p) => (p.color ? p.color : "#727272")};
  
`;
