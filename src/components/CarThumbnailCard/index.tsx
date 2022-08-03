import React from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { CardSection, Logo  ,Title, Price,FooterTitle,FooterContent, MainImageHolder, MainImage, SoldBadge } from "./styles";
import {CustomYellowButton} from "../../styles/styles";
import { SvgIcon } from "../common/SvgIcon";
import Container from "../common/Container";
import { useHistory } from "react-router-dom";
import { LeftCircleOutlined,RightCircleOutlined } from '@ant-design/icons';
import { PngImage } from "../common/PngImage";


interface Props {
  id: any,
  title: string;
  price: any;
  transmission: string;
  odometer: any;
  body: string;
  fuel: string;
  sold:Boolean;
  t: any;
}

const CarThumbnailCard = ({ id,title,price,transmission,odometer,body,fuel,sold,t }: Props) => {

  const history = useHistory();

  const findThumbnail = (carID:any) => {
    let path = process.env.PUBLIC_URL + `/img/asset/${carID}/thumbnail.jpg`;
    return path;
  }

  const navigateTo = (id: string) => {
    history.push(`/CarDetails/${id}`);
  };

  return (
  <CardSection>


    <MainImageHolder onClick={() => navigateTo(id)}>
      <MainImage src={findThumbnail(id)} alt={title} aria-label={title} />
      {sold && (
        <SoldBadge left={"15px"}><PngImage src="sold.png" aria-label="sold" width="99px" height="77px" /></SoldBadge>
      )}   
    </MainImageHolder>

    {/* <Logo src={findThumbnail(id)} onClick={() => navigateTo(id)}></Logo> */}

    <Title>{title}</Title>

    <Price>{'$ ' + price.toLocaleString()}</Price>

    <Container border={true} marginBottom={"10px"}/>

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

    <Container border={true} marginBottom={"10px"} marginTop={"10px"}/>

    <CustomYellowButton width={"100%"} onClick={() => navigateTo(id)}>
        {t("MoreInfo")}
    </CustomYellowButton>

  </CardSection>
  );
};

export default withTranslation()(CarThumbnailCard);
