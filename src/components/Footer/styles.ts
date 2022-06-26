import styled from "styled-components";
import { Link } from "react-router-dom";
import { ClientRequest } from "http";


export const MainSection = styled("div")`
  background: #212121;
  margin-top: 40px;
  padding-top:50px;
  padding-bottom:50px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;


export const FooterSection = styled("footer")`
  /* background: #212121;
  margin-top: 40px;
  padding-top:50px;
  padding-bottom:50px; */
`;

export const ThripleFooterContainer = styled("div")<any>`
  display: flex;           /* establish flex container */
  flex-direction: column;  /* make main axis vertical */
  justify-content: center; /* center items vertically, in this case */
  align-items: ${(p)=> (p.alignItems ? p.alignItems : "stretch")} ;
  padding-left:65px;     
  height:100%;
  width:100%;
`;

export const Title = styled("h4")`
  font-size: 22px;
  text-transform: capitalize;
  color: #18216d;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

export const NavLink = styled(Link)`
  display: block;
  font-size: 1rem;
  margin-bottom: 0.625rem;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: #15418e;
  }
`;

export const Extra = styled("div")`
  background: #212121;
  display: flex;
  justify-content: center;
  align-items: 'center';
  padding-bottom: 5rem;
`;

export const SocialAndLogoContainer = styled("div")`
  background: #212121;
  height:auto;
  width:100% ;
  padding-left:55px;
  padding-right:15px;
`;

export const LogoContainer = styled("div")`
  height:100px;
  width:100px;
  display:flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding-left:65px;
`;

export const RightContainer = styled("div")`
  display:flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  height:100%;
  width:100%;
`;

export const SocialLinkContainer = styled("div")`
  display:flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  height:100%;
  width:100%;
`;


export const Right = styled("p")`
  font-size: 12px;
  font-weight:600;
  text-transform: capitalize;
  color: #FFFFFF;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

export const Para = styled("div")<any>`
  color: #FFFFFF;
  font-size: 14px;
  width: 70%;
  margin-bottom:${(p) => (p.marginbottom ? p.marginbottom : "0px")};
`;

export const Large = styled(Link)<any>`
  font-size: 16px;
  color: #000;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-transform: capitalize;
  line-height: 24px;
  display: block;
  margin-bottom: 0.625rem;
  transition: all 0.3s ease-in-out;
  max-width: max-content;

  &:hover {
    color: rgb(255, 130, 92);
    text-underline-position: under;
    text-decoration: rgb(255, 130, 92) wavy underline;
  }
`;

export const Chat = styled("p")`
  color: #FFFF00;
  max-width: fit-content;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-bottom: 1px solid rgb(255, 130, 92);
    color: rgb(255, 130, 92);
  }
`;

export const Empty = styled("div")`
  position: relative;
  height: 53px;
`;

export const FooterContainer = styled("div")`
  max-width: 510px;
  width: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  transition: all 0.1s ease-in-out;

  a {
    &:hover,
    &:active,
    &:focus {
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }
  }

  @media screen and (max-width: 769px) {
    width: auto;

    a:not(:last-child) {
      display: none;
    }
  }

  div {
    cursor: pointer;
    margin-right: 15px;
    width: 25px;
    height: 25px;

    &:hover {
      fill: rgb(255, 130, 92);
    }
  }
`;

export const Language = styled("h4")`
  font-size: 16px;
  text-transform: capitalize;
  color: #888;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;



export const Label = styled("label")`
  font-size: 22px;
  text-transform: capitalize;
  color: #18216d;
  display: block;
  margin-bottom: 2rem;
  font-family: "Motiva Sans Bold", serif;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
    margin-bottom: 1rem;
  }
`;


export const SocialLink = styled("a")`
  padding:3px;
`;

export const ChatOnlineLink = styled("a")`
`;