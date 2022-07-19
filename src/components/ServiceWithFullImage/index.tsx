import React from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { ServiceSection,ServiceName, PageTitle,CardSection } from "./styles";
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
    <Col lg={12} md={24} sm={24} xs={24}>
      <CardSection src={member.img} onClick={() => navigateTo(member.link)}>
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
        <Row>
          {serviceList}
          <Col lg={24} md={0} sm={0} xs={0}>
             <p>lg mode</p>
          </Col>
          <Col lg={0} md={24} sm={0} xs={0}>
             <p>md mode</p>
          </Col>
          <Col lg={0} md={0} sm={24} xs={0}>
             <p>sm mode</p>
          </Col>
          <Col lg={0} md={0} sm={0} xs={24}>
             <p>xs mode</p>
          </Col>
        </Row>
      {/* </Slide> */}
    </ServiceSection>
  );
};

export default withTranslation()(ServiceWithFullImage);
