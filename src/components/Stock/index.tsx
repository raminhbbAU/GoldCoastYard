import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { StockSection, Content, StockLogo,StockName, PageTitle,CardSection, TitleSection } from "./styles";
import CarThumbnailCard from "../CarThumbnailCard";
import { CustomYellowButton } from "../../styles/styles";
import { useHistory } from "react-router-dom";

interface Props {
  title: string;
  Stocks: any;
  limitationNumber?:any;
  id: any;
  exploreButton?:Boolean
  t:any;
}

const Stock = ({ title, Stocks,limitationNumber=4, id,exploreButton,t}: Props) => {

  const history = useHistory();
  const [stockList,setStockList] = useState<any>();

  const navigateTo = (route: string) => {
    history.push(`/${route}`);
  };


  useEffect(()=>{
    filterStocksList();
  },[Stocks])


  const filterStocksList = () => {

    if (Stocks){
      
      if (Stocks.length < limitationNumber) {
        limitationNumber = Stocks.length; 
      }

      setStockList(
        Stocks.slice(0, limitationNumber).map((member: any) => (    
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
            <TitleSection>
              <PageTitle>
                {title} 
              </PageTitle>
              {exploreButton && (
                <CustomYellowButton width={"auto"} type="submit" backgroundColor={"#212121"} color={"#f0da13"} padding={"7px"} onClick = { () => navigateTo("usedcar")}>
                  {t("Stock_MoreCarsButtonText")}
                </CustomYellowButton> 
              )}
            </TitleSection>            
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
