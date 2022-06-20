import React, { useEffect, useState } from "react";
import { Row, Col, Select } from "antd";
import { withTranslation } from "react-i18next";
import { Option } from "antd/lib/mentions";

import { loadAvailableCars,loadManufactures, loadModels  } from "../../API/api";
import Stock from "../Stock";
import { SectionContainer,CardSection,SearchBoxSection,Title,CustomSelect,FilterSection,CarListSection } from "./styles";
import {CustomYellowButton} from "../../styles/styles";
import Container from "../common/Container";

interface Props {
  id: any,
  title:any
  t: any;
}

const CarSearchBox = ({ id,title,t }: Props) => {

  const [availableCars,setAvailableCars]= useState<any>([]);
  const [carManufactures,setCarManufatures]= useState<any>([]);
  const [carModels,setCarModels]= useState<any>([]);

  useEffect(()=>{
    setAvailableCars(loadAvailableCars());
    setCarManufatures(loadManufactures());
    setCarModels(loadModels());
  },[])
  
  const renderManufactures = carManufactures.map((item: any) => (    
    <Option value={item.id}>{item.title}</Option>
  ));

  const renderModels = carModels.map((item: any) => (    
    <Option value={item.id}>{item.title}</Option>
  ));

  return (
  <SectionContainer>
      <CardSection>
        <SearchBoxSection>
          <Row>
            <Col lg={24} md={24} sm={24} xs={24}>
              <Title>{title}</Title>
            </Col>
            <Col lg={8} md={8} sm={12} xs={24}>
              <CustomSelect  placeholder={t("SearchBoxMakeTitle")} size={"large"} style={{ width: '220px' }}>
                {renderManufactures}
              </CustomSelect>
            </Col>
            <Col lg={8} md={8} sm={12} xs={24}>
              <CustomSelect placeholder={t("SearchBoxModelTitle")} size={"large"} style={{ width: '220px' }}>
                {renderModels}
              </CustomSelect>
            </Col>
            <Col lg={8} md={8} sm={24} xs={24}>
              <CustomYellowButton width={"220px"}>
                {t("SearchBoxButton")}
              </CustomYellowButton>
            </Col>
          </Row>
        </SearchBoxSection>
      </CardSection>
      <FilterSection>

      </FilterSection>
      <CarListSection>
          <Stock title={""} Stocks={availableCars} id="stock" limitationNumber={20} />
      </CarListSection>

  </SectionContainer>

  );
};

export default withTranslation()(CarSearchBox);
