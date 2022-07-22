import styled from "styled-components";

export const ComponentContainer = styled("div")`
  margin-top:5px;
  margin-bottom:5px;
`;


export const TabContainer = styled("div")`
  display:flex;
  flex-direction:row;
  padding:5px 5px 0px 0px;
  height: 40px;
  margin-bottom:4px;
`;

export const TabItems = styled("p")<any>`
  font-size: 16px;
  font-style: bold;
  font-weight: 700;
  text-align:center;
  vertical-align: middle;
  padding: 10px 20px 10px 20px;
  margin-right:4px;
  cursor: pointer;
  background: ${(p) => (p.active ? "transparent" : "#DCDDDF")};
  color: #606060;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  height: 40px;
  width:auto;
  border: solid 1px;
  border-top-color:${(p) => (p.active ? "#C5C7C6" : "transparent")};
  border-right-color:${(p) => (p.active ? "#C5C7C6" : "transparent")};
  border-left-color:${(p) => (p.active ? "#C5C7C6" : "transparent")};
  border-bottom-color: transparent;
  opacity: 1;
  z-index:${(p) => (p.active ? 100 : 0)};
  &:hover,
  &:active,
  &:focus {
    //background-color: #dcc709;
    opacity: 0.9;
  }
`;

export const TabContentContainer = styled("div")<any>`
  z-index:1;
  border: solid 1px #C5C7C6;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-right-radius: 16px;
`;
