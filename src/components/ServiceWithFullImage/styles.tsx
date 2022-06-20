import styled from "styled-components";

export const ServiceSection = styled("section")`
  display:flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-top:80px;
  margin-bottom:80px;
`;

export const CardSection = styled("div")<any>`
  display:flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin:3px;
  border-radius: 5%;
  padding: 1px;
  background-image: url(${(p) => (p.src ? p.src : "")});
  background-size: cover;
  background-repeat:no-repeat;
  opacity:80%;
  width: 350px;
  height: 250px; 
`;

export const PageTitle = styled("h6")`
  margin-bottom:100px;
`;

export const ServiceName = styled("a")`
  font-size: 36px;
  font-weight: 600;
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
