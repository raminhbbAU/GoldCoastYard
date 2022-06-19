import React from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../components/common/SvgIcon";
import Container from "../../components/common/Container";
import { PngImage } from "../common/PngImage";

import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Right,
} from "./styles";


interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="35px" height="35px"/>
      </a>
    );
  };

  return (
    <>
      <FooterSection id={"contact"}>
        <Container>
          <Row justify="space-between">

            <Col lg={10} md={10} sm={12} xs={24}>
              <Language>{t("Contact")}</Language>
              <Para>
                {t(`Do you have any question? Feel free to reach out.`)}
              </Para>
              <a href="https://wa.me/989381424797">
                <Chat>{t(`Let's Chat`)}</Chat>
              </a>
              
            </Col>

            <Col lg={8} md={8} sm={12} xs={24}>
              <Language>{t("Address")}</Language>
              <Para>{t("Address_Line1")}</Para>
              <Para>{t("Address_Line2")}</Para>
              <Para>{t("Address_Line3")}</Para>
            </Col>

            <Col lg={6} md={6} sm={0} xs={0}>
              <Language>{t("Quick Access")}</Language>
              <Para>Value My Car</Para>
              <Para>Book a Service</Para>
              <Para>Finance</Para>
              <Para>Insurance</Para>
            </Col>

          </Row>
        </Container>
      </FooterSection>


      <Extra>

        <Container border={true}>
          
          <Row justify="space-between" align="middle">
           
            <Col lg={4} md={4} sm={6} xs={24}>
                <NavLink to="/">
                  <LogoContainer>
                    <PngImage
                      src="logo2.png"
                      aria-label="homepage"
                      width="101px"
                      height="64px"
                    />
                  </LogoContainer>
                </NavLink>
            </Col>

            <Col lg={10} md={10} sm={12} xs={24}>
              <Right>©2016-2022 The Gold Coast Yard. All Right Reserved.</Right>
            </Col>

            <Col lg={10} md={10} sm={6} xs={24}>
              <Language>{t("Social media")}</Language>
                  <SocialLink
                    href="https://www.instagram.com/GCCY/"
                    src="Instagram2.svg"
                  />
                  <SocialLink
                    href="https://www.Facebook.com"
                    src="Facebook.svg"
                  />
                  <SocialLink
                    href="https://wa.me/989381424797"
                    src="Facebook.svg"
                  />
                  <SocialLink
                    href="mailto:raminhbb.au@gmail.com"
                    src="Facebook.svg"
                />
            </Col>

          </Row>
        </Container>

      </Extra>

    </>
  );
};

export default withTranslation()(Footer);
