import styled from "styled-components";
import { Select } from 'antd';


export const CustomSelect = styled(Select)`
    border-radius: 20px;
    margin-bottom:5px;
    margin-right:5px;

    .ant-select-arrow{
      color: #F0DA13 !important;
      font-size: 15px !important;
    }
    .ant-select-selector{
      background-color:#e6e6e6 !important;
    }
    .ant-select-selection-placeholder{
      color:#a8a8a8 !important;
    }
    .ant-select {
      border-radius: 40%;
    }
`;

export const SectionContainer = styled("section")`
  display:flex;
  flex-direction:column;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom:50px;

  /* Extra small devices (phones, 768px and down) */
  @media only screen and (max-width: 768px) 
  {
    margin-bottom:25px;
  }

`;

export const CardSection = styled("div")`
  display:flex;
  text-align: center;
  justify-content: center;
  align-items: center;  
`;

export const SearchBoxSection = styled("section")`
  background-color:white;
  width:fit-content;
  height:fit-content;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 2px;
  box-shadow: 1px 2px #C5C7C6  ;
  border: solid 1px #C5C7C6;
  border-radius: 16px;

  /* Extra small devices (phones, 768px and down) */
  @media only screen and (max-width: 768px) 
  {
    width:380px;
    max-width:380px;
  }

`;

export const FilterSection = styled("div")`
  height:1px;
`;

export const CarListSection = styled("div")`
  display:flex;
  width: 100%;
`;

export const NotFoundSection = styled("div")`
  display:flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top:30px;
`;



export const Title = styled("p")`
  color: #7f7f7f;
  font-size: 25px;
  font-weight: 900;
  word-wrap: break-word;

  @media only screen and (max-width: 768px) 
  {
    font-size: 15px;
  }

`;


export const ClearSearch = styled("p")`
  color: #7f7f7f;
  font-size: 12px;
  font-weight: 500;
  word-wrap: break-word;
  width:100%;
  text-align:right;
  margin-top:15px;
  margin-right:10px;
  cursor: pointer;
`;
