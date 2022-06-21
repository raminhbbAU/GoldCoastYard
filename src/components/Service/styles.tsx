import styled from "styled-components";

export const ServiceSection = styled("section")`
  position: relative;
  text-align: center;
  justify-content: center;
  padding: 0 20px;

`;

export const CardSection = styled("div")`
  background-color:#FFF;
  margin:10px;
  border-radius: 5%;
  padding: 10px;
  box-shadow: 0px 0px #FAFAFA  ;
  cursor: pointer;
  opacity: 1;

  &:hover,
  &:active,
  &:focus {
    opacity: 0.8;
  }
 `;

export const PageTitle = styled("h6")`
  margin-bottom:100px;
`;

export const ServiceName = styled("p")`
  font-size: 16px;
  font-weight: 600;
  margin-top:20px;
  color:#7f7f7f;
`;

export const Content = styled("p")`
  font-size: 15px;
  margin-bottom:50px;
  color:#7f7f7f;
`;

export const ServiceLogo = styled("img")`
  padding: 2px;
  width: 64px;
  height:64px;
`;

export const ContentWrapper = styled("div")`
  max-width: 570px;
  display: flex;
  justify-content: center;
  alignItems: 'center',

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
