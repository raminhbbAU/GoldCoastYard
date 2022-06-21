import React from 'react';
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../components/common/SvgIcon";
import { Button } from "../../../components/common/Button";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import { useHistory  } from 'react-router-dom';

import {
  FullBlockContainer,
  CustomContainer,
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
  picture,
  leftToRight
}: ContentBlockProps) => {

    const history = useHistory();

    const navigateTo = (id: string) => {
      history.push(`/${id}`);
    };
  
  return (

    <FullBlockContainer id={id} image ={picture}>
    <Fade direction={leftToRight=="left" ? "left" : "right"}>
      <CustomContainer leftToRight={leftToRight}>
        <Row >
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
                        onClick={() => navigateTo(item.link)}
                      >
                        {t(item.title)}
                      </CustomYellowButton>
                    );
                  })}
              </ButtonWrapper>
            </ContentWrapper>
          </Col>
        </Row>
      </CustomContainer>
    </Fade>
  </FullBlockContainer>

  );
};

export default withTranslation()(FullBlock);
