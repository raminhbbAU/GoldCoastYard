import styled from "styled-components";

export const StyledBanner = styled("section")<any>`
  background-image: url(${props => props.background});
  height: ${(p) => (p.height ? p.height : "705px")};
  width: ${(p) => (p.width ? p.width : "1920px")};
  margin-top:30px;
  background-size: contain;
  background-repeat:no-repeat;
`;

// export const StyledBanner2 = styled("section")<any>`
//   background-image: url(${props => props.background});
//   background-repeat:no-repeat;
//   background-size: 1280px 100%;
// `;