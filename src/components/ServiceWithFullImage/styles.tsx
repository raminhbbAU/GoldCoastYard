import styled from "styled-components";

export const ServiceSection = styled("section")`
  margin-top:50px;
  /* display:flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-bottom:50px;
  margin-right:8px;
  margin-left:8px; */  
`;

export const CardsHolder = styled("div")`
  display:flex;
  text-align: center; 
  justify-content: center;
  align-items: center;
  padding:5px;
  opacity: 0.6;

  &:hover,
  &:active,
  &:focus {
    opacity: 0.9;
  }
`;

export const ImageHolder = styled("img")<any>`
  height: ${(p) => (p.height ? p.height : "100%")};
  width: ${(p) => (p.width ? p.width : "100%")};
  border-radius:8px;
  position: relative;
`;

export const ServiceName = styled("p")<any>`
  position: absolute;
  top: 40%;
  cursor: pointer;
  opacity: 1;
  font-size: 52px;
  font-weight: 900;
  font-style:bold;
  color:#F0DA13;
  opacity:100%;

`;


export const CardHolder = styled("div")`
  background-color:blue;
  margin-right:3px;
  height:100%;
  width:100%;
  display:flex;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const CardSection = styled("div")<any>`
  border-radius: 2%;
  padding: 4px;
  background-image: url(${(p) => (p.src ? p.src : "")});
  background-size: cover;
  background-repeat:no-repeat;
  opacity:80%;
  width: 100%; //562px;// 375px; 
  height: 100%; //225px; //150px;
  cursor: pointer;
  opacity: 0.6;

  &:hover,
  &:active,
  &:focus {
    opacity: 0.9;
  }

  /* @media only screen and (min-width: 768px) 
  {
    width: 375px;
    height: 150px; 
  } */
        /* @media only screen and (max-width: 768px) 
        {
            margin-right:8px;
            margin-left:8px;
            margin-bottom:15px;
            width: 443px;
            height: 314px; 
        }

        @media only screen and (max-width: 992px) 
        {
            margin-right:8px;
            margin-left:8px;
            margin-bottom:15px;
            width: 531px;
            height: 377px;
        } */
`;

export const PageTitle = styled("h6")`
  margin-bottom:100px;
`;

export const ServiceName2 = styled("p")`
  font-size: 52px;
  font-weight: 900;
  font-style:bold;
  margin-top:20px;
  color:#F0DA13;
  opacity:100%;
`;

export const Content = styled("p")`
  font-size: 15px;
  margin-bottom:50px;
  color:#7f7f7f;
`;
