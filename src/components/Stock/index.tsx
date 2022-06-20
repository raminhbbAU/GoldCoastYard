import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { StockSection, Content, StockLogo,StockName, PageTitle,CardSection } from "./styles";
import CarThumbnailCard from "../CarThumbnailCard";

interface Props {
  title: string;
  Stocks: any;
  id: any;
}

const Stock = ({ title, Stocks, id}: Props) => {

  const [stockList,setStockList] = useState<any>();

  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };


  useEffect(()=>{
    filterStocksList();
  },[Stocks])


  const filterStocksList = () => {

    if (Stocks){
      
      setStockList(
        Stocks.slice(0, 4).map((member: any) => (    
          <Col lg={6} md={8} sm={12} xs={24}>
            <CardSection>
              <CarThumbnailCard {...member}/>      
            </CardSection>
          </Col>
        ))
      )

    }
    else
    {
      setStockList(null);
    }

  }


  return (
    <StockSection id={id}>
        <Row>
          <Col lg={24} md={24} sm={24} xs={24}>
            <PageTitle>{title}</PageTitle>
          </Col>
        </Row>
      {/* <Slide direction="down"> */}
        {stockList && (
          <Row align="top" >
          {stockList}
          </Row>
        )}
      {/* </Slide> */}
    </StockSection>
  );
};

export default withTranslation()(Stock);
