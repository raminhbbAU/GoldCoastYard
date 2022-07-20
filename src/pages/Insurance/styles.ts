import styled from "styled-components";

export const MainContainer = styled("section")` 
    margin-top: 80px;
`;


export const ServiceContainers = styled("div")` 
    display:flex;
    margin-bottom:30px;
`;

export const CardSection = styled("div")`
  display: flex;           /* establish flex container */
  flex-direction: column;  /* make main axis vertical */
  align-items: center;     /* center items horizontally, in this case */
  background-color:#FFF;
  margin:10px;
  border-radius: 5%;
  box-shadow: 7px 3px 3px 3px #f5f4f4  ;
  cursor: pointer;
  opacity: 1;
  min-height:400px;

  &:hover,
  &:active,
  &:focus {
    opacity: 0.8;
  }
 `;

 export const HaedLine = styled("p")`
  font-size: 35px;
  font-style: bold;
  font-weight: 700;
  color: black;
  text-align:center;
`;

export const Title = styled("p")`
  font-size: 20px;
  font-style: bold;
  font-weight: 700;
  color: black;
  padding:5px;
  margin-top:10px;
`;
export const Description = styled("p")`
  font-size: 18px;
  font-weight: 700;
  color: #a8a8a8;
  padding:5px;
  line-height:30px
`;