import styled from "styled-components";

export const StockSection = styled("div")`
  display:flex;
  flex-direction:column;
  text-align: center;
  justify-content: center;
  padding: 5px 20px 5px 20px;
  margin-top: 50px;
  margin-bottom: 50px;
  width:100%;
`;

export const CardSection = styled("div")`
  background-color:#FFF;
  margin-right:10px;
  margin-bottom:10px;
  border-radius: 7%;
  padding: 10px;
  box-shadow: 1px 2px #C5C7C6  ;
  width:98%;
  border: solid 1px #C5C7C6;
  border-radius: 16px;
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

  @media only screen and (max-width: 768px) {
    margin-right:5px;
    font-size: 16px;
  }


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

