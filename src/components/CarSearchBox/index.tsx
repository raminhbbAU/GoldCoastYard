import React, { useEffect, useState } from "react";
import { Row, Col, Select } from "antd";
import { withTranslation } from "react-i18next";
import { Option } from "antd/lib/mentions";

import { loadAvailableCars,loadManufactures, loadModels  } from "../../API/api";
import Stock from "../Stock";
import { SectionContainer,CardSection,SearchBoxSection,Title,CustomSelect,FilterSection,CarListSection, ClearSearch } from "./styles";
import {CustomYellowButton} from "../../styles/styles";
import Container from "../common/Container";
import { Console } from "console";
import { SvgIcon } from "../common/SvgIcon";

interface Props {
  id: any,
  title:any
  t: any;
}

const CarSearchBox = ({ id,title,t }: Props) => {

  const [isLoading,setIsLoading]= useState(false);
  const [availableCars,setAvailableCars]= useState<any>([]);
  const [carManufactures,setCarManufatures]= useState<any>([]);
  const [carModels,setCarModels]= useState<any>([]);

  const [filterAvailableCars,setFilterAvailableCars]= useState<any>();
  const [filterCarModels,setFilterCarModels]= useState<any>();

  const [selectedManufacture,setSelectedManufacture]= useState<any>(0);
  const [selectedModel,setSelectedModel]= useState<any>(0);

  useEffect(()=>{
    setAvailableCars(loadAvailableCars());
    setFilterAvailableCars(loadAvailableCars());
    setCarManufatures(loadManufactures());
    setCarModels(loadModels());
    setIsLoading(true);
  },[])
  

  const changeManufactures = (value: any) => {
    setSelectedManufacture(value);
    setSelectedModel(0);

    let models = carModels.filter( (i:any) => i.manufactureId == value);
    setFilterCarModels(models);

    if (models.length>0){
      setSelectedModel(models[0].id);
    }   

  }

  const changeModels = (value: any) => {
    setSelectedModel(value);
  }

  const SearchClicked = () => {

    console.log("SearchClicked");
    console.log(availableCars);

    if (selectedManufacture !=0){
      setFilterCarModels(carModels.filter( (i:any) => i.manufactureId == selectedManufacture));
    }
    else
    {
      setFilterCarModels([]);
    }

    if (selectedManufacture ==0){
      setFilterAvailableCars(availableCars);
    }
    else
    {
      if (selectedModel ==0){
        setFilterAvailableCars(availableCars.filter( (i:any) => i.manufacturId == selectedManufacture ))
      }
      else
      {
        setFilterAvailableCars(availableCars.filter( (i:any) => i.manufacturId == selectedManufacture && i.modelId == selectedModel))
      }
    }   
  }

  const clearSearch = () => {
    setSelectedModel(0);
    setSelectedManufacture(0);
    setFilterAvailableCars(availableCars);
  }

  return (
     <SectionContainer>
        {isLoading && (
          <>
            <CardSection>
              <SearchBoxSection>
                <Row>
                  <Col lg={24} md={24} sm={24} xs={24}>
                    <Title>{title}</Title>
                  </Col>
                </Row>
                <Row>
                  <Col lg={8} md={8} sm={12} xs={24}>
                    <CustomSelect  placeholder={t("SearchBoxMakeTitle")} size={"large"} style={{ width: '220px' }}  onChange={changeManufactures} value={selectedManufacture !=0 ? selectedManufacture : t("SearchBoxMakeTitle") } >
                      {carManufactures && (
                        carManufactures.map((item: any) => (    
                          <Option value={item.id}>{item.title}</Option>
                        ))
                      )}
                    </CustomSelect>
                  </Col>
                  <Col lg={8} md={8} sm={12} xs={24}>
                    <CustomSelect placeholder={t("SearchBoxModelTitle")} size={"large"} style={{ width: '220px' }} value={selectedModel !=0 ? selectedModel : t("SearchBoxModelTitle") }  onChange={changeModels}>
                      {filterCarModels && (
                        filterCarModels.map((item: any) => (    
                          <Option value={item.id}>{item.title}</Option>
                        ))
                      )}
                    </CustomSelect>
                  </Col>
                  <Col lg={8} md={8} sm={24} xs={24}>
                    <CustomYellowButton width={"220px"} onClick = {SearchClicked}>
                      {t("SearchBoxButton")}
                    </CustomYellowButton>
                  </Col>
                </Row>
                <Row>
                  <ClearSearch onClick={() => clearSearch()}>
                    {t("ClearSearch")}     
                  </ClearSearch>
                </Row>
              </SearchBoxSection>
            </CardSection>

            <FilterSection>

            </FilterSection>

            <CarListSection>
              {(filterAvailableCars.length>0 && (      
                  <Stock title={ filterAvailableCars.length + "+ vehicles are Available"} Stocks={filterAvailableCars} id="stock" limitationNumber={50} />
              ))}
              {(filterAvailableCars.length ==0 && (      
                  <SvgIcon src={'illustration_404.svg'} width="450px" height="450px"/>
              ))}
            </CarListSection>
          </>
        )}
     </SectionContainer>
  );

};

export default withTranslation()(CarSearchBox);
