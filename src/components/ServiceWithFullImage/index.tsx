import React from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { ServiceSection,ServiceName, PageTitle,CardSection } from "./styles";

interface Props {
  title: string;
  services: any;
  id: any;
  t: any;
}

const ServiceWithFullImage = ({ title, services, id, t }: Props) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  const serviceList = services.map((member: any) => (    
    <Col lg={12} md={12} sm={24} xs={24}>
      <CardSection src={member.img}>
        <ServiceName>{member.name}</ServiceName>
        {/* <Content>{member.description}</Content>       */}
      </CardSection>
    </Col>
  ));

  return (
    <ServiceSection id={id}>
      {/* <Slide direction="down"> */}
        <Row>
          <Col lg={24} md={24} sm={24} xs={24}>
            <PageTitle>{title}</PageTitle>
          </Col>
        </Row>
        <Row align="top" justify="space-between">
          {serviceList}
        </Row>
      {/* </Slide> */}
    </ServiceSection>
  );
};

export default withTranslation()(ServiceWithFullImage);
