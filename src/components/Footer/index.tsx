import React from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../components/common/SvgIcon";
import Container from "../../components/common/Container";
// import { PngImage } from "../common/PngImage";
import { useHistory } from "react-router-dom";
import {PhoneFilled,HomeFilled,MailFilled,TagFilled   } from '@ant-design/icons';

import { MessengerChat } from "react-messenger-chat-plugin";
// import { Wrapper, Status } from "@googlemaps/react-wrapper";

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
        <SvgIcon src={src} width="20px" height="20px" className="socialIcons"/>
      </SocialLink>
    );
  };

  return (
    <MainSection>

      <MessengerChat
                  pageId="101507375914843"
                  // language="en_US"
                  themeColor={"#f0da13"}
                  bottomSpacing={50}
                  loggedInGreeting="Hey mate! we are here to help you, please feel free if you have any question or need information"
                  loggedOutGreeting="Thank you for your contact, see you soon!"
                  greetingDialogDisplay={"fade"}
                  debugMode={false}
                  onMessengerShow={() => {
                    console.log("onMessengerShow");
                  }}
                  onMessengerHide={() => {
                    console.log("onMessengerHide");
                  }}
                  onMessengerDialogShow={() => {
                    console.log("onMessengerDialogShow");
                  }}
                  onMessengerDialogHide={() => {
                    console.log("onMessengerDialogHide");
                  }}
                  onMessengerMounted={() => {
                    console.log("onMessengerMounted");
                  }}
                  onMessengerLoad={() => {
                    console.log("onMessengerLoad");
                  }}
        />

      <FooterSection id={"contact"}>
        <SocialAndLogoContainer>
          <Row justify="space-between">

            <Col lg={8} md={8} sm={8} xs={24}>
              <ThripleFooterContainer>
                
                {/* <Language><HomeFilled  style={{ fontSize: '15px', color: '#888' }}/> {" "} {t("Address")}</Language> */}
                <Language>{t("Address")}</Language>
                <ParaLink href={ t("GoogleDirection")} target="_blank">{t("Address_Line1")}</ParaLink>
                <ParaLink href={ t("GoogleDirection")} target="_blank">{t("Address_Line2")}</ParaLink>
                <ParaLink href={ t("GoogleDirection")} target="_blank" marginbottom={"5px"}>{t("Address_Line3")}</ParaLink>
                {/* <Language><PhoneFilled  style={{ fontSize: '15px', color: '#888' }}/> {" "}{t("Tel")}</Language> */}
                <Language>{t("Tel")}</Language>
                <ParaLink marginbottom={"5px"} href={"tel:" + t("Phone")}>{t("Phone")}</ParaLink>
                {/* <Language><MailFilled   style={{ fontSize: '15px', color: '#888' }}/> {" "}{"Email"}</Language> */}
                <Language>{"E-mail"}</Language>
                <ParaLink href={"mailto:" + t("Email")}>{t("Email")}</ParaLink>
              </ThripleFooterContainer>
            </Col>

            <Col lg={8} md={8} sm={8} xs={24}>
              <ThripleFooterContainer>
                {/* <Language><TagFilled   style={{ fontSize: '15px', color: '#888' }}/> {" "} {t("Quick Access")}</Language> */}
                <Language>{t("Quick Access")}</Language>
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
                
                {/* <ChatOnlineLink href="https://wa.me/989381424797">
                  <Chat>{t(`Let's Chat`)}</Chat>
                  <SvgIcon src={'chat.svg'} width="96px" height="96px"/>
                </ChatOnlineLink> */}

                {/* <Wrapper apiKey={"YOUR_API_KEY"} render={render}>
                  <YourComponent/>
                </Wrapper> */}

           </ThripleFooterContainer>
              
            </Col>

          </Row>
        </SocialAndLogoContainer>

      </FooterSection>

      <Container border={true} marginTop={"50px"} marginBottom={"10px"}/>

      <SocialAndLogoContainer>
        
        <Row>
          <Col lg={6} md={6} sm={6} xs={24}>
            <LogoContainer onClick={() => navigateTo('home')}>
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
