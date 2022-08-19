import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { Button } from "antd";

export const HeaderSection = styled("header")`
  /* .ant-row-space-between {
    align-items: center;
    text-align: center;
  } */

  height:auto;
  width:100% ;
`;

export const LogoContainer = styled("div")`
  height:100px;
  width:100px;
  display:flex;
  text-align: left;
  justify-content: center;
  align-items: center;
  padding-left:15px;
`;

export const MenuContainer = styled("div")`
  display:flex;
  text-align: right;
  justify-content: right;
  align-items: center;
  height:100%;
  width:100%;
  padding-right:1px;
`;

export const DrawerContainer = styled("div")`
  display:flex;
  text-align: right;
  justify-content: right;
  align-items: center;
  height:100%;
  width:100%;
  padding-right:10px;
`;

export const NavLink = styled("div")`
  display: inline-block;
  text-align: center;
`;

export const CustomNavLink = styled("div")`
  width: 203px;
  display: inline-block;

  @media only screen and (max-width: 411px) {
    width: 150px;
  }

  @media only screen and (max-width: 320px) {
    width: 118px;
  }
`;

export const ContactWrapper = styled("div")<any>`
  cursor: pointer;
  width: ${(p) => (p.width ? "100%" : "110px")};
  font-weight: 700;
  text-align: center;
  border-radius: 1.25rem;
  display: inline-block;
`;

export const Burger = styled("div")`
  /* @media only screen and (max-width: 890px) {
    display: block;
  } */

  display: block;

  svg {
    fill: #2e186a;
  }
`;

export const NotHidden = styled("div")`
  @media only screen and (max-width: 540px) {
    display: none;
  }
`;

export const Menu = styled("h5")`
  font-size: 1.5rem;
  font-weight: 800;
  text-align: center;
`;

export const CustomNavLinkSmall = styled(NavLink)`
  font-size: 16px;
  font-weight: 700;
  color: #616161;
  transition: color 0.2s ease-in;
  margin: 20px;

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
`;

export const Label = styled("span")`
  font-weight: 500;
  color: #616161;
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Outline = styled(MenuOutlined)<any>`
  font-size: 22px;
`;

export const Span = styled("span")`
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover,
  &:active,
  &:focus {
    color: #FFD600    ;
    text-underline-position: under;
    text-decoration: #FFD600;
  }
`;

export const LanguageSwitch = styled("div")<any>`
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export const LanguageSwitchContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 85px;
  align-content: 'right';
`;