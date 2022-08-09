import styled from "styled-components";

interface StyleProps {
  image?: string;
} 

export const CardSection = styled("section")`
  display: flex-row;
  justify-content: center;
  align-items: 'center';
  background-color:#FFFFFF;
  margin:10px;
  border-radius: 3%;
  padding: 2px;
  cursor: pointer;
  opacity: 1;

  &:hover,
  &:active,
  &:focus {
    opacity: 0.8;
  }
`;


export const MainImageHolder = styled("div")` 
    height : 100%;
    width : 100%;
    position: relative;
    top: 0;
    left: 0;
`;

export const MainImage = styled("img")<any>`
  height: ${(p) => (p.height ? p.height : "100%")};
  width: ${(p) => (p.width ? p.width : "100%")};
  border-radius:2px;
  position: relative;
  top: 0;
  left: 0;
`;

export const SoldBadge = styled("div")<any>`
  position: absolute;
  top: 25%;
  left: 25%;
`;

export const Logo = styled.img`
  border-radius: 2%;
  /* height : 160px; */
  /* width : 240px; */
  height : 100%;
  width : 100%;
`;

export const Title = styled("p")`
  color: #9e8f06;// #dcc709;
  font-size: 15px;
  font-weight: 700;
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis; 
  font-family:"Poppins Semi Bold";
`;

export const Price = styled("p")`
  font-size: 22px;
  font-style:bold;
  color: #424242;
  font-weight: 900;
  text-align:left;
  font-family:"Poppins Semi Bold Italic";
`;

export const FooterTitle = styled("p")`
  font-size: 8px;
  font-weight: 500;
  color:#a8a8a8;
`;


export const FooterContent = styled("p")`
  font-size: 10px;
  font-weight: 800;
  color: #424242;
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis; 
`;
