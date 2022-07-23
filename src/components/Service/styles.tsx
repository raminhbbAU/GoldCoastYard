import styled from "styled-components";

export const ServiceSection = styled("section")`
  position: relative;
  text-align: center;
  justify-content: center;
  padding: 0 20px;

`;

export const CardSection = styled("div")`
  display: flex;           /* establish flex container */
  flex-direction: column;  /* make main axis vertical */
  justify-content: center; /* center items vertically, in this case */
  align-items: center;     /* center items horizontally, in this case */
  background-color:#FFF;
  margin:10px;
  cursor: pointer;
  opacity: 1;
  height:250px;
  box-shadow: 1px 2px #C5C7C6  ;
  border: solid 1px #C5C7C6;
  border-radius: 16px;

  &:hover,
  &:active,
  &:focus {
    opacity: 0.8;
  }
 `;

export const PageTitle = styled("h6")`
  margin-bottom:50px;
`;

export const ServiceName = styled("p")`
  font-size: 17px;
  font-weight: 900;
  font-style:bold;
  margin-top:5px;
  color:#7f7f7f;
`;

export const Content = styled("p")`
  font-size: 15px;
  margin-top:5px;
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
  align-items: 'center';

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
