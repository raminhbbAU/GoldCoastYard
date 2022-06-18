import React,{ useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation } from "react-i18next";
import i18n from "i18next";
import Container from "../../components/common/Container";
import { SvgIcon } from "../../components/common/SvgIcon";
import { Button } from "../../components/common/Button";

import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
  LanguageSwitchContainer,
  LanguageSwitch
} from "./styles";

import {CustomYellowButton} from "../../styles/styles";

const Header = ({ t }: any) => {
  const [visible, setVisibility] = useState(false);

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

      
  const languageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const goToCorePanel = () => {
    window.location.href = "http://www.core.nillteam.ir"
  }

  const MenuItem = () => {

    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      
      if (element)
      {
        element.scrollIntoView({
          behavior: "smooth",
        });
        setVisibility(false);
      }
    };

    return (
      <>
        <CustomNavLinkSmall onClick={() => scrollTo("home")}>
          <Span>{t("Home")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("Used Car")}>
          <Span>{t("UsedCar")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("Finance")}>
          <Span>{t("Finance")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("Service")}>
          <Span>{t("Service")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("News")}>
          <Span>{t("News")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("contact")}>
          <Span>{t("Contact")}</Span>
        </CustomNavLinkSmall>

        <CustomYellowButton>{t("Sell My Car")}</CustomYellowButton>
      </>
    );
  };

  return (
    <HeaderSection >
      <Container>

        <Row justify="space-between" align="middle">

            <Col lg={4} md={4} sm={4} xs={14} >
              <a>
                <SvgIcon src="logo-image.svg" width="82px" height="82px" />
              </a>
            </Col>

            <Col lg={15} md={15} sm={0} xs={0}>
              <NotHidden>
                <MenuItem />
              </NotHidden>
            </Col>

            <Burger onClick={showDrawer} >
              <Outline />
            </Burger>

        </Row>
        
        <Drawer closable={false} visible={visible} onClose={onClose}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={onClose}>
              <Col span={9} offset={9}>
                <Menu>{t("Menu")}</Menu>

              </Col>
              <Col span={2}>
                <LanguageSwitchContainer>
                  <LanguageSwitch onClick={() => languageChange("en")}>
                      <SvgIcon
                        src="united-states.svg"
                        aria-label="homepage"
                        width="25px"
                        height="25px"
                      />
                  </LanguageSwitch>
                </LanguageSwitchContainer>
              </Col>
              <Col span={2}>
                <LanguageSwitchContainer>
                  <LanguageSwitch onClick={() => languageChange("fa")}>
                      <SvgIcon
                        src="iran.svg"
                        aria-label="homepage"
                        width="25px"
                        height="25px"
                      />
                  </LanguageSwitch>
                </LanguageSwitchContainer>
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
