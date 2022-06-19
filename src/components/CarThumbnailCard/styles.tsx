import styled from "styled-components";

interface StyleProps {
  image?: string;
} 

export const CardSection = styled("section")`
  display: flex-row;
  justify-content: center;
  alignItems: 'center',
  background-color:#FFF;
  margin:10px;
  border-radius: 7%;
  padding: 2px;
  box-shadow: 2px 3px #FAFAFA  ;
`;

export const Logo = styled.img`
  border-radius: 2%;
  height : 128px;
  width : 128px;
`;

export const Title = styled("p")`
  color: #FF9800;
  font-size: 15px;
  font-weight: 700;
`;

export const Price = styled("p")`
  font-size: 15px;
  color: #212121;
  font-size: 12px;
  font-weight: 600;
`;

export const FooterTitle = styled("p")`
  font-size: 8px;
  font-weight: 800;
`;


export const FooterContent = styled("p")`
  font-size: 8px;
  font-weight: 500;
`;
