import styled from "styled-components";

export const SellCarRequestForContainer = styled("div")`
  margin-top:30px;
  padding: 5px;
  background-color:white;
  border-radius: 10px;
  box-shadow: 3px 3px 3px 3px #f5f4f4;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }
`;

export const FormGroup = styled("form")`
  width: 100%;
  text-align:left;

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`;

export const Span = styled("span")<any>`
  display: block;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  padding: 0 0.675rem;
`;

export const ButtonContainer = styled("div")`
  display:flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  height:100%;
  width:100%;
`;



export const VehicleContainer = styled("div")`
  display:flex;
  flex-direction:column;
  text-align: center;
  height:100%;
  width:100%;
  padding:10px;
`;

export const FormContainer = styled("div")`
  display:flex;
  flex-direction:column;
  text-align: center;
  height:100%;
  width:100%;
  padding:10px;
`;

export const Title = styled("p")`
  font-size: 18px;
  font-style: bold;
  font-weight: 700;
  color: black;
`;

export const Subtitle = styled("p")<any>`
  font-size: 15px;
  font-weight: 500;
  color: #a8a8a8;
  text-align: ${(p) => (p.textAlign ? p.textAlign : "")};
`;

export const CarThumbnailImage = styled("img")<any>`
  height: ${(p) => (p.height ? p.height : "100px")};
  width: ${(p) => (p.width ? p.width : "100px")};
  border: ${(p) => (p.border ? "2px solid #f0da13" : "")};
  margin-top:5px;
  margin-bottom:5px;
  margin-right:5px;
  margin-left:5px;
  border-radius:5px;
`;


export const VehicleDetailTitle = styled("p")`
  font-size: 14px;
  font-style: bold;
  font-weight: 700;
  color: black;
  text-align:left;
`;

export const VehicleDetailValue = styled("p")<any>`
  font-size: 12px;
  font-weight: 500;
  color: #a8a8a8;
  text-align: ${(p) => (p.textAlign ? p.textAlign : "")};
`;
