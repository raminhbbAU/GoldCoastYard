import React from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { ServiceSection, Content, ServiceLogo,ServiceName, PageTitle,CardSection } from "./styles";

interface Props {
  title: string;
  content: string;
  services: any;
  id: any;
  t: any;
}

const Service = ({ title, content, services, id, t }: Props) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  const serviceList = services.map((member: any) => (    
    <Col lg={8} md={8} sm={12} xs={24}>
      <CardSection>
        <ServiceLogo src={member.img}></ServiceLogo>
        <ServiceName>{member.name}</ServiceName>
        <Content>{member.description}</Content>      
      </CardSection>
    </Col>
  ));

  return (
    <ServiceSection id={id}>
      <Slide direction="down">
        <Row>
          <Col lg={24} md={24} sm={24} xs={24}>
            <PageTitle>{title}</PageTitle>
          </Col>
        </Row>
        <Row align="top" justify="space-between">
          {serviceList}
        </Row>
      </Slide>
    </ServiceSection>
  );
};

export default withTranslation()(Service);
