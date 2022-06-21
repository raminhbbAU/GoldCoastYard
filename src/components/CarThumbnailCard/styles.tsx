import styled from "styled-components";

interface StyleProps {
  image?: string;
} 

export const CardSection = styled("section")`
  display: flex-row;
  justify-content: center;
  align-items: 'center',
  background-color:#FFFFFF;
  margin:10px;
  border-radius: 7%;
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
  height : 128px;
  width : 128px;
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
  font-size: 13px;
  color: #7f7f7f;
  font-size: 12px;
  font-weight: 800;
  text-align:left;
`;

export const FooterTitle = styled("p")`
  font-size: 6px;
  font-weight: 800;
  color:#424242;
`;


export const FooterContent = styled("p")`
  font-size: 7px;
  font-weight: 500;
  color: #a8a8a8;
`;
