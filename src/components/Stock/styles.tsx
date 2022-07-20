import styled from "styled-components";

export const StockSection = styled("section")`
  position: relative;
  text-align: center;
  justify-content: center;
  padding: 0 20px;
  margin-top: 50px;
`;

export const CardSection = styled("div")`
  background-color:#FFF;
  margin:10px;
  border-radius: 7%;
  padding: 10px;
  box-shadow: 2px 3px #FAFAFA  ;
`;


export const TitleSection = styled("div")`
  display:flex;
  align-items: center;     /* center items horizontally, in this case */
  margin-bottom:20px;
  margin-left:20px;
`;



export const PageTitle = styled("h6")`
  font-size: 20px;
  font-weight: 800;
  margin-right:20px;
  color:#616161;
  text-align:center;

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
