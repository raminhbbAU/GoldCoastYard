import styled from "styled-components";


export const CardSection = styled("section")`
  display: flex;
  justify-content: center;
  alignItems: 'center',
  margin:90px;
  padding: 2px;
`;

export const Warning = styled("h4")`
  font-size: 25px;
  text-transform: capitalize;
  color: #888;
  margin-button: 30px;
  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;
