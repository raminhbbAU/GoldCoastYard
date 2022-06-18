import styled from "styled-components";

export const StockSection = styled("section")`
  position: relative;
  text-align: center;
  justify-content: center;
  padding: 0 20px;

`;

export const CardSection = styled("div")`
  background-color:#FFF;
  margin:10px;
  border-radius: 7%;
  padding: 10px;
  box-shadow: 2px 3px #FAFAFA  ;
`;

export const PageTitle = styled("h6")`
  margin-bottom:100px;
`;

export const StockName = styled("p")`
  font-size: 20px;
  font-weight: 600;
`;

export const Content = styled("p")`
  font-size: 15px;
`;

export const StockLogo = styled("img")`
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
