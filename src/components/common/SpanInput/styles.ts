import styled from "styled-components";

export const Container = styled("div")`
  display: inline-block;
  width: 100%;
  /* padding: 10px 5px; */
  background-color:#e6e6e6;
  border-radius: 4px;
  border: 0;
  transition: all 0.3s ease-in-out;  
  outline: none;
  width: 100%;  
  padding: 1rem 1.25rem;

  :focus-within {
      background: none;
      box-shadow: #f0da13 0px 0px 0px 1px;
  }

`;

export const StyledSpanInput = styled("span")`
  font-size: 0.875rem;
       
`;
