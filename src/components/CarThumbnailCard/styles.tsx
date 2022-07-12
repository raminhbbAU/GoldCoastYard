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

export const Logo = styled.img`
  border-radius: 2%;
  /* height : 160px; */
  /* width : 240px; */
  height : 100%;
  width : 100%;
`;

export const Title = styled("p")`
  color: #dcc709;
  font-size: 15px;
  font-weight: 700;
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis; 
`;

export const Price = styled("p")`
  font-size: 15px;
  font-style:bold;
  color: #424242;
  font-weight: 900;
  text-align:left;
`;

export const FooterTitle = styled("p")`
  font-size: 8px;
  font-weight: 800;
  color:#424242;
`;


export const FooterContent = styled("p")`
  font-size: 10px;
  font-weight: 500;
  color: #a8a8a8;
`;
