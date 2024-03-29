import styled from "styled-components";

interface StyleProps {
  image?: string;
  imageMobile?: string;
  minimumheight?:any;
} 

export const FullBlockContainer = styled.section<StyleProps>`
  position: relative;
  padding: 10px 5px 15px 5px;
  text-align: center;
  background-image: url(${props => props.image});
  background-repeat:no-repeat;
  background-size: 1200px 100%;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  max-height: 416px;
  min-height: 416px;
  max-width: 1200px;
  

  /* Extra small devices (phones, 768px and down) */
  @media only screen and (max-width: 768px) 
  {
      background-image:url(${props => props.imageMobile == "" ? "" : props.imageMobile});
      background-color:${props => props.imageMobile == "" ? "black" : "transparent"};
      background-size: 600px 100%;
      max-height: 416px;
      min-height: 416px;

      display:flex;
      text-align: center;
      justify-content: center;
      align-items: center;
  }


`;


export const CustomContainer = styled("div")<any>`
  width:50%;
  position: absolute;
  right: ${props => props.leftToRight =="left" ? "0px": "auto"};
  max-height: 400px;
  min-height: 400px;

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 768px) 
  {
    position: inherit;
    width:100%;
  }

`;

export const Heading = styled("h6")`
  margin: 1.5rem 0 2rem 0;
  color:#f0da13;
  //font-family:"Poppins Extra Bold Italic";
  font-family:"Poppins Semi Bold";
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
  color:#FFFFFF;
  font-family:"Poppins Extra Bold Italic";
  
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;
  max-height: 400px;
  min-height: 400px;
  display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    text-align: center;

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 768px) 
  {
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: 'center';
  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }
  button:last-child {
    margin-left: 20px;
  }
`;