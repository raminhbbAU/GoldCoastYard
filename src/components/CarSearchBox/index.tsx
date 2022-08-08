import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Option } from "antd/lib/mentions";

import { loadAvailableCars,loadManufactures, loadModels  } from "../../API/api";
import Stock from "../Stock";
import { SectionContainer,CardSection,SearchBoxSection,Title,CustomSelect,FilterSection,CarListSection, ClearSearch, NotFoundSection } from "./styles";
import {CustomYellowButton} from "../../styles/styles";
import Container from "../common/Container";
import { Console } from "console";
import { SvgIcon } from "../common/SvgIcon";
import Select from "../common/Select";
import { facebookPixelFBQ } from "../../service/facebookpixel.tracer";

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
  

  const changeManufactures = (e: any) => {
    // setSelectedManufacture(value);
    // setSelectedModel(0);

    let value = carManufactures.filter( (i:any) => i.title === e.target.value)[0];
    setSelectedManufacture(value.title);

    let models = carModels.filter( (i:any) => i.manufactureId == value.id);
    setFilterCarModels(models);


    if (models.length>0){
      setSelectedModel(models[0].title);
    }   

  }

  const changeModels = (e: any) => {

    // console.log(e.target.value);
    // let value = carModels.filter( (i:any) => i.title === e.target.value)[0];
    setSelectedModel(e.target.value);
  }

  const SearchClicked = () => {

    console.log("SearchClicked");
    console.log(availableCars);
    facebookPixelFBQ('UsedCarPage_SearchClick');

    if (selectedManufacture !=""){
      console.log("1");
      let value = carManufactures.filter( (i:any) => i.title === selectedManufacture)[0];
      setFilterCarModels(carModels.filter( (i:any) => i.manufactureId == value.id));
    }
    else
    {
      console.log("2");
      setFilterCarModels([]);
    }

    if (selectedManufacture == ""){
      console.log("3");
      setFilterAvailableCars(availableCars);
    }
    else
    {
      if (selectedModel == ""){
        console.log("4");
        let value = carManufactures.filter( (i:any) => i.title === selectedManufacture)[0];
        setFilterAvailableCars(availableCars.filter( (i:any) => i.manufacturId == value.id ))
      }
      else
      {
        console.log("5");
        console.log(selectedModel)
        let value = carModels.filter( (i:any) => i.title === selectedModel)[0];
        console.log(value)
        setFilterAvailableCars(availableCars.filter( (i:any) => i.manufacturId == value.manufactureId && i.modelId == value.id))
      }
    }   
  }

  const clearSearch = () => {
    setSelectedModel("");
    setSelectedManufacture("");
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
                <Row align="middle">
                  <Col lg={8} md={8} sm={12} xs={24}>
                    {/* <CustomSelect  placeholder={t("SearchBoxMakeTitle")} size={"large"} style={{ width: '220px' }}  onChange={changeManufactures} value={selectedManufacture !=0 ? selectedManufacture : t("SearchBoxMakeTitle") } >
                      {carManufactures && (
                        carManufactures.map((item: any) => (    
                          <Option value={item.id}>{item.title}</Option>
                        ))
                      )}
                    </CustomSelect> */}
                    <Select
                      name="make"
                      placeholder={t("SearchBoxMakeTitle")} 
                      itemList = {carManufactures}
                      objectField = {"title"}
                      value={selectedManufacture || ""}
                      onChange={changeManufactures} 
                    />
                  </Col>
                  <Col lg={8} md={8} sm={12} xs={24}>
                    {/* <CustomSelect placeholder={t("SearchBoxModelTitle")} size={"large"} style={{ width: '220px' }} value={selectedModel !=0 ? selectedModel : t("SearchBoxModelTitle") }  onChange={changeModels}>
                      {filterCarModels && (
                        filterCarModels.map((item: any) => (    
                          <Option value={item.id}>{item.title}</Option>
                        ))
                      )}
                    </CustomSelect> */}
                    <Select
                      name="model"
                      placeholder={t("SearchBoxModelTitle")} 
                      itemList = {filterCarModels}
                      objectField = {"title"}
                      value={selectedModel || ""}
                      onChange={changeModels} 
                    />
                  </Col>
                  <Col lg={8} md={8} sm={24} xs={24}>
                    <CustomYellowButton width={"auto"} minWidth={"160px"} borderradius={"5px"} height={"55px"} onClick = {SearchClicked}>
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
                  <NotFoundSection>
                    <SvgIcon src={'notfound.svg'} width="450px" height="450px"/>
                  </NotFoundSection>
              ))}
            </CarListSection>
          </>
        )}
     </SectionContainer>
  );

};

export default withTranslation()(CarSearchBox);
