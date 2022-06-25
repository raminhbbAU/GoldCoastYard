import styled from "styled-components";

export const StyledContainer = styled("div")<any>`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  margin-top: ${(p) => (p.marginTop ? p.marginTop : "")};
  margin-bottom: ${(p) => (p.marginBottom ? p.marginBottom : "")};
  border-top: ${(p) => (p.border ? "1px solid #CDD1D4" : "")};
  /* padding: ${(p) => (p.border ? "5px 20px" : "")}; */
  background-color: ${(p) => (p.backgroundColor ? p.backgroundColor : "")};

  @media only screen and (max-width: 1024px) {
    max-width: calc(100% - 68px);
  }

  @media only screen and (max-width: 768px) {
    max-width: calc(100% - 38px);
  }

  @media only screen and (max-width: 414px) {
    max-width: 100%;
  }
`;
