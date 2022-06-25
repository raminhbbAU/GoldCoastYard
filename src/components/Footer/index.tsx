import React from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../components/common/SvgIcon";
import Container from "../../components/common/Container";
import { PngImage } from "../common/PngImage";

import {
  MainSection,
  FooterSection,
  ThripleFooterContainer,
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
  SocialLink,
  ChatOnlineLink,
  SocialAndLogoContainer,
  RightContainer,
  SocialLinkContainer
} from "./styles";


interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {

  const SocialIcons = ({ href, src }: SocialLinkProps) => {
    return (
      <SocialLink
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="35px" height="35px"/>
      </SocialLink>
    );
  };

  return (
    <MainSection>
      <FooterSection id={"contact"}>
        <SocialAndLogoContainer>
          <Row justify="space-between">

            <Col lg={8} md={8} sm={8} xs={24}>
              <ThripleFooterContainer>
                <Language>{t("Address")}</Language>
                <Para>{t("Address_Line1")}</Para>
                <Para>{t("Address_Line2")}</Para>
                <Para marginbottom={"5px"}>{t("Address_Line3")}</Para>
                <Language>{t("Tel")}</Language>
                <Para>{t("Phone")}</Para>
              </ThripleFooterContainer>
            </Col>

            <Col lg={8} md={8} sm={8} xs={24}>
              <ThripleFooterContainer>
                <Language>{t("Quick Access")}</Language>
                <Para>Value My Car</Para>
                <Para>Book a Service</Para>
                <Para>Finance</Para>
                <Para>Insurance</Para>
                <Para>Terms & Conditions</Para>
                <Para>Privacy Notice</Para>
                <Para>Cookie Policies</Para>
              </ThripleFooterContainer>
            </Col>

            <Col lg={8} md={8} sm={8} xs={24}>
              <ThripleFooterContainer alignItems={"center"}>
                {/* <Language>{t("Online Chat")}</Language> */}
                {/* <Para marginbottom={"15px"}>
                  {t(`Do you have any question? Feel free to reach out.`)}
                </Para> */}
                <ChatOnlineLink href="https://wa.me/989381424797">
                  {/* <Chat>{t(`Let's Chat`)}</Chat> */}
                  <SvgIcon src={'chat.svg'} width="96px" height="96px"/>
                </ChatOnlineLink>
              </ThripleFooterContainer>
              
            </Col>

          </Row>
        </SocialAndLogoContainer>

      </FooterSection>

      <Container border={true} marginTop={"50px"} marginBottom={"10px"}/>

      <SocialAndLogoContainer>
        
        <Row>
          <Col lg={6} md={6} sm={6} xs={24}>
            <LogoContainer>
              <SvgIcon
                src="logo2.svg"
                aria-label="homepage"
                width="96px"
                height="96px"
              />
            </LogoContainer>
          </Col>

          <Col lg={9} md={9} sm={12} xs={24}>
            <RightContainer>
              <Right>©2016-2022 The Gold Coast Yard. All Right Reserved.</Right>
            </RightContainer>
          </Col>

          <Col lg={9} md={9} sm={6} xs={24}>
            <SocialLinkContainer>
              <Language>{t("Social media")}</Language>
              <SocialIcons
                        href={t("Instagram")}
                        src="Instagram2.svg"
              />
              <SocialIcons
                        href={t("Facebook")}
                        src="Facebook.svg"
              />
              <SocialIcons
                        href={t("WhatsUp")}
                        src="Facebook.svg"
              />
              <SocialIcons
                        href={t("Email")}
                        src="Facebook.svg"
              />
            </SocialLinkContainer>              
          </Col>

        </Row>

      </SocialAndLogoContainer>
    </MainSection>
  );
};

export default withTranslation()(Footer);
