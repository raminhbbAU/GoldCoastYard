import React from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../components/common/SvgIcon";
import Container from "../../components/common/Container";
// import { PngImage } from "../common/PngImage";
import { useHistory } from "react-router-dom";
 import {PhoneFilled,HomeFilled,MailFilled,TagFilled   } from '@ant-design/icons';

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
  SocialLinkContainer,
  ParaLink,
  RightSmall,
  ParaLinkSmall
} from "./styles";



interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {

  const history = useHistory();

  const navigateTo = (id: string) => {
    history.push(`/${id}`);
  };

  const SocialIcons = ({ href, src }: SocialLinkProps) => {
    return (
      <SocialLink
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="35px" height="35px" className="socialIcons"/>
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
                
                <Language><HomeFilled  style={{ fontSize: '15px', color: '#888' }}/> {" "} {t("Address")}</Language>
                <Para>{t("Address_Line1")}</Para>
                <Para>{t("Address_Line2")}</Para>
                <Para marginbottom={"5px"}>{t("Address_Line3")}</Para>
                <Language><PhoneFilled  style={{ fontSize: '15px', color: '#888' }}/> {" "}{t("Tel")}</Language>
                <ParaLink marginbottom={"5px"} href={"tel:" + t("Phone")}>{t("Phone")}</ParaLink>
                <Language><MailFilled   style={{ fontSize: '15px', color: '#888' }}/> {" "}{"Email"}</Language>
                <ParaLink href={"mailto:" + t("Email")}>{t("Email")}</ParaLink>
              </ThripleFooterContainer>
            </Col>

            <Col lg={8} md={8} sm={8} xs={24}>
              <ThripleFooterContainer>
                <Language><TagFilled   style={{ fontSize: '15px', color: '#888' }}/> {" "} {t("Quick Access")}</Language>
                <ParaLink onClick={() => navigateTo('SellCar')}>Value My Car</ParaLink>
                <ParaLink onClick={() => navigateTo('Service')}>Book a Service</ParaLink>
                <ParaLink onClick={() => navigateTo('Finance')}>Finance</ParaLink>
                <ParaLink onClick={() => navigateTo('Insurance')}>Insurance</ParaLink>
                <ParaLink onClick={() => navigateTo('Terms')}>Terms & Conditions</ParaLink>
                <ParaLink onClick={() => navigateTo('Privacy')}>Privacy Notice</ParaLink>
                <ParaLink onClick={() => navigateTo('Cookie')}>Cookie Policies</ParaLink>
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
              <Right>{"©2016-"} {new Date().getFullYear()} {" The Gold Coast Car Yard. All Right Reserved."}</Right>
              <RightSmall>{"Powered by "} <ParaLinkSmall href="mailto:raminhbb.au@gmail.com">RaminHbb</ParaLinkSmall></RightSmall>
              
            </RightContainer>
          </Col>

          <Col lg={9} md={9} sm={6} xs={24}>
            <SocialLinkContainer>
              <Language>{t("Social media")}</Language>
              {/* <InstagramFilled style={{ fontSize: '35px', color: '#ffffff' }}/>
              <FacebookFilled style={{ fontSize: '35px', color: '#ffffff' }}/>
              <MailFilled style={{ fontSize: '35px', color: '#ffffff' }}/>
              <MessageFilled style={{ fontSize: '35px', color: '#ffffff' }}/>
              <LinkedinFilled style={{ fontSize: '35px', color: '#ffffff' }}/> */}

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
                        src="whatsapp.svg"
              />
              {/* <SocialIcons
                        href={t("Email")}
                        src="email.svg"
              /> */}
            </SocialLinkContainer>              
          </Col>

        </Row>

      </SocialAndLogoContainer>
    </MainSection>
  );
};

export default withTranslation()(Footer);
