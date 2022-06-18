import React from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { CardSection, Logo  ,Title, Price,FooterTitle,FooterContent } from "./styles";
import { SvgIcon } from "../common/SvgIcon";

interface Props {
  id: any,
  title: string;
  price: any;
  transmission: string;
  odometer: any;
  carType: string;
  fuel: string;
  thumbnail:string;
}

const CarThumbnailCard = ({ id,title,price,transmission,odometer,carType,fuel,thumbnail }: Props) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
  <CardSection>
    <Logo src={thumbnail}></Logo>
    <Title>{title}</Title>
    <Price>{price}</Price>
    
    <Row align="top" justify="space-between">
      <Col lg={6} md={6} sm={6} xs={6}>
        <SvgIcon src="transmission.svg" aria-label="Trnsmission" width="25px" height="25px" />
        <FooterTitle>Trnsmission</FooterTitle>
        <FooterContent>{transmission}</FooterContent>
      </Col>
      <Col lg={6} md={6} sm={6} xs={6}>
        <SvgIcon src="odometer.svg" aria-label="Odometer" width="25px" height="25px" />
        <FooterTitle>Odometer</FooterTitle>
        <FooterContent>{odometer}</FooterContent>
      </Col>
      <Col lg={6} md={6} sm={6} xs={6}>
        <SvgIcon src="sedan.svg" aria-label="CarType" width="25px" height="25px" />
        <FooterTitle>CarType</FooterTitle>
        <FooterContent>{carType}</FooterContent>
      </Col>
      <Col lg={6} md={6} sm={6} xs={6}>
        <SvgIcon src="fuel.svg" aria-label="Fuel" width="25px" height="25px" />
        <FooterTitle>Fuel</FooterTitle>
        <FooterContent>{fuel}</FooterContent>
      </Col>
    </Row>    
  </CardSection>
  );
};

export default withTranslation()(CarThumbnailCard);
