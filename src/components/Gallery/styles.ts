import styled from "styled-components";

export const MainContainer = styled("section")` 
    max-height:"500px";
`;

export const MainImageHolder = styled("figure")` 
    height:"500px";
    width:"100%";
    min-height:"500px";
    min-width:"100%";
    padding:5px;
`;

export const MainImage = styled("img")<any>`
  height: ${(p) => (p.height ? p.height : "100%")};
  width: ${(p) => (p.width ? p.width : "100%")};
  border-radius:8px;
  position: relative;
`;

export const MainImageNavigator = styled("div")<any>`
  position: absolute;
  top: 50%;
  right: ${(p) => (p.right ? p.right : "")};
  left: ${(p) => (p.left ? p.left : "")};
  cursor: pointer;
  opacity: 1;

  &:hover,
  &:active,
  &:focus {
    opacity: 0.9;
  }

`;


export const ImageSelector = styled("section")<any>` 
  display: flex;           /* establish flex container */
  flex-direction: ${(p) => (p.direction ? p.direction : "column")};  /* make main axis vertical */
  justify-content: center; /* center items vertically, in this case */
  align-items:center;
`;

export const ImageSelectorArrow = styled("div")<any>` 
  width:60px;
  height:28px;
  background-color: #a8a8a8;
  border-radius: 8px;
  cursor: pointer;
  display:flex;
  flex-direction:column;
  text-align: center;
  justify-content: center;
  align-items: center;
  opacity: 1;
 
  &:hover,
  &:active,
  &:focus {
    opacity: 0.9;
  }
`;

export const ImageSelectorArrowHorizontal = styled("div")<any>` 
  width:28px;
  height:60px;
  background-color: #a8a8a8;
  border-radius: 8px;
  cursor: pointer;
  display:flex;
  flex-direction:column;
  text-align: center;
  justify-content: center;
  align-items: center;
  opacity: 1;
 
  &:hover,
  &:active,
  &:focus {
    opacity: 0.9;
  }
`;

// export const ImageSelectorArrow = styled("div")<any>` 
//   display: block;
//   background-color: #f7f7f7;
//   border-radius: 2px;
//   cursor: pointer;
//   width: "auto";
//   opacity: 0.8;
//   margin:5px;
//   display: flex;
//   justify-content: center;
//   align-items: 'center';

//   &:hover,
//   &:active,
//   &:focus {
//     opacity: 0.3;
//   }
// `;


export const ImageSelectorThumbnail = styled("img")<any>`
  height: ${(p) => (p.height ? p.height : "100px")};
  width: ${(p) => (p.width ? p.width : "100px")};
  border: ${(p) => (p.border ? "2px solid #f0da13" : "")};
  margin-top:5px;
  margin-bottom:5px;
  margin-right:5px;
  margin-left:5px;
  border-radius:5px;
`;