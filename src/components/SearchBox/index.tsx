import React from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { CardSection, Logo  ,Title, Price,FooterTitle,FooterContent } from "./styles";
import {CustomYellowButton} from "../../styles/styles";
import { SvgIcon } from "../common/SvgIcon";

interface Props {
  id: any,
  title: string;
  price: any;
  transmission: string;
  odometer: any;
  body: string;
  fuel: string;
  t: any;
}

const CarThumbnailCard = ({ id,title,price,transmission,odometer,body,fuel,t }: Props) => {

  console.log(id);
  console.log(title);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  const findThumbnail = (carID:any) => {
    let path = process.env.PUBLIC_URL + `/img/asset/${carID}/thumbnail.jpg`;
    return path;
  }

  return (
  <CardSection>

    <Logo src={findThumbnail(id)}></Logo>

    <Title>{title}</Title>

    <Price>{price + ' AUD'}</Price>

    <Row align="top" justify="space-between">
      <Col lg={6} md={6} sm={6} xs={6}>
        <SvgIcon src="transmission.svg" aria-label="Transmission" width="25px" height="25px" />
        <FooterTitle>Transmission</FooterTitle>
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
        <FooterContent>{body}</FooterContent>
      </Col>
      <Col lg={6} md={6} sm={6} xs={6}>
        <SvgIcon src="fuel.svg" aria-label="Fuel" width="25px" height="25px" />
        <FooterTitle>Fuel</FooterTitle>
        <FooterContent>{fuel}</FooterContent>
      </Col>
    </Row>

    <CustomYellowButton>
      {t("MoreInfo")}
    </CustomYellowButton>

  </CardSection>
  );
};

export default withTranslation()(CarThumbnailCard);
