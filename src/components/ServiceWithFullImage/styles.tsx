import styled from "styled-components";

export const ServiceSection = styled("section")`
  display:flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-top:50px;
  margin-bottom:50px;
  margin-right:8px;
  margin-left:8px;
`;

export const CardSection = styled("div")<any>`
  display:flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-radius: 2%;
  padding: 4px;
  background-image: url(${(p) => (p.src ? p.src : "")});
  background-size: cover;
  background-repeat:no-repeat;
  opacity:80%;
  width: 531px; //591px;
  height: 377px; //419px; 
  cursor: pointer;
  opacity: 1;
  margin-bottom:15px;

  &:hover,
  &:active,
  &:focus {
    opacity: 0.9;
  }

        @media only screen and (max-width: 768px) 
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
        }
`;

export const PageTitle = styled("h6")`
  margin-bottom:100px;
`;

export const ServiceName = styled("p")`
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


export const ContentWrapper = styled("div")`
  max-width: 570px;
  display: flex;
  justify-content: center;
  align-items: 'center',

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
