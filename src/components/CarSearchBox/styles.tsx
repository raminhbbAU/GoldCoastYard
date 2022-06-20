import styled from "styled-components";
import { Select } from 'antd';


export const CustomSelect = styled(Select)`
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
  display:flex-row;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const CardSection = styled("div")`
  display:flex;
  text-align: center;
  justify-content: center;
  align-items: center;  
`;

export const SearchBoxSection = styled("section")`
  border-radius: 2%;
  background-color:white;
  width:800px;
  height:150px;
  padding-top: 10px;
  margin-top: 10px;
  margin-bottom: 2px;
`;

export const FilterSection = styled("div")`
  height:1px;
`;

export const CarListSection = styled("div")`
`;



export const Title = styled("p")`
  color: #7f7f7f;
  font-size: 25px;
  font-weight: 900;
`;
