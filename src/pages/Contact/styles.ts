import styled from "styled-components";

export const MainTitle = styled("p")<any>`
  color: black;
  font-size: 25px;
  font-style:bold;
  font-weight: 700;
  margin-bottom:${(p) => (p.marginbottom ? p.marginbottom : "20px")};
`;

export const LocationTitle = styled("p")<any>`
  color: #5B5B5B;
  font-size: 12px;
  font-weight: 400;
  margin-bottom:${(p) => (p.marginbottom ? p.marginbottom : "30px")};
`;

export const SaleDepartmentTitle = styled("p")<any>`
  color: #4A4A4A;
  font-size: 13px;
  font-weight: 500;
  margin-bottom:${(p) => (p.marginbottom ? p.marginbottom : "10px")};
`;

export const SalePhoneContainer = styled("div")<any>`
  display:flex;
  flex-direction:column;
  margin-bottom:10px;
`;

export const SalePhone = styled("a")<any>`
  color: #4A4A4A;
  font-size: 17px;
  font-style:bold;
  font-weight: 700;
  margin-bottom:${(p) => (p.marginbottom ? p.marginbottom : "5px")};
`;

export const EnquireTitle = styled("p")<any>`
  color: #4A4A4A;
  font-size: 13px;
  font-weight: 500;
  margin-bottom:${(p) => (p.marginbottom ? p.marginbottom : "10px")};
`;

export const EnquirePhone = styled("a")<any>`
  color: #4A4A4A;
  font-size: 17px;
  font-style:bold;
  font-weight: 700;
`;

export const AlternativeWayTitle = styled("p")<any>`
  color: #4A4A4A;
  font-size: 13px;
  font-weight: 500;
  margin-top:40px;
`;

export const ContactFormContainer = styled("div")<any>`
  margin-top:15px;
  margin-right:15px;
  margin-bottom:15px;
`;


