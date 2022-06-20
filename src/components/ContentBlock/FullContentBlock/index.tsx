import React from 'react';
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../components/common/SvgIcon";
import { Button } from "../../../components/common/Button";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import {
  FullBlockContainer,
  Heading,
  Content,
  ContentWrapper,
  ButtonWrapper,
} from "./styles";

import {CustomYellowButton} from "../../../styles/styles";

const FullBlock = ({
  title,
  content,
  button,
  icon,
  t,
  id,
  picture
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  
  return (

    <FullBlockContainer id={id} image ={picture}>
    <Fade direction="right">
      <Row justify="space-between" align="top">
        <Col lg={24} md={24} sm={24} xs={24}>
          <ContentWrapper>
            <Heading>{t(title)}</Heading>
            <Content>{t(content)}</Content>
            <ButtonWrapper>
              {typeof button === "object" &&
                button.map((item: any, id: number) => {
                  return (
                    <CustomYellowButton
                      key={id}
                      color={item.color}
                      onClick={() => scrollTo("about")}
                    >
                      {t(item.title)}
                    </CustomYellowButton>
                  );
                })}
            </ButtonWrapper>
          </ContentWrapper>
        </Col>
      </Row>
    </Fade>
  </FullBlockContainer>

  );
};

export default withTranslation()(FullBlock);
