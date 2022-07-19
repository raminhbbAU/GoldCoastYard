import React from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { ServiceSection,ServiceName, PageTitle,CardSection, CardHolder, CardsHolder, ImageHolder } from "./styles";
import { useHistory } from "react-router-dom";

interface Props {
  title: string;
  services: any;
  id: any;
  t: any;
}

const ServiceWithFullImage = ({ title, services, id, t }: Props) => {
  
  const history = useHistory();

  const navigateTo = (id: string) => {
    history.push(`/${id}`);
  };

  const serviceList = services.map((member: any) => (    
    <Col lg={12} md={12} sm={24} xs={24}>
      <CardsHolder>         
        <ImageHolder src={member.img} alt={member.name}></ImageHolder>
        <ServiceName>{member.name}</ServiceName>
      </CardsHolder>
    </Col>
  ));

  return (
    <ServiceSection id={id}>
      {/* <Slide direction="down"> */}
        {/* <Row>
          <Col lg={24} md={24} sm={24} xs={24}>
            <PageTitle>{title}</PageTitle>
          </Col>
        </Row> */}
        <Row>
          {serviceList}
        </Row>
    </ServiceSection>
  );
};

export default withTranslation()(ServiceWithFullImage);
