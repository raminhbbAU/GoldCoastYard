import React,{ useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation } from "react-i18next";
import i18n from "i18next";
import Container from "../../components/common/Container";
import { SvgIcon } from "../../components/common/SvgIcon";
import { Button } from "../../components/common/Button";

import { useHistory  } from 'react-router-dom';


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
  LanguageSwitch,
  DrawerContainer,
  MenuContainer
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

  const MenuItem = () => {

    const history = useHistory();

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

    const navigateTo = (id: string) => {
      history.push(`/${id}`);
    };

    return (
      <>
        <CustomNavLinkSmall onClick={() => navigateTo("home")}>
          <Span>{t("Home")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => navigateTo("usedcar")}>
          <Span>{t("UsedCar")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => navigateTo("Finance")}>
          <Span>{t("Finance")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => navigateTo("Service")}>
          <Span>{t("Service")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => navigateTo("News")}>
          <Span>{t("News")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => navigateTo("Contact")}>
          <Span>{t("Contact")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => navigateTo("SellCar")}>
          <CustomYellowButton>{t("Sell My Car")}</CustomYellowButton>
        </CustomNavLinkSmall>

        
      </>
    );
  };

  return (
    <HeaderSection id="header" >
      <Container>

        <Row>
          <Col lg={2} md={12} sm={12} xs={12}>
            <LogoContainer onClick={() => navigateTo("home")}> 
              <SvgIcon src="logo-image.svg" width="96px" height="96px" />
            </LogoContainer>
          </Col>
          <Col lg={22} md={0} sm={0} xs={0}>
            <MenuContainer>
              <MenuItem />
            </MenuContainer>
          </Col>
          <Col lg={0} md={12} sm={12} xs={12}>
            <DrawerContainer>
              <Burger onClick={showDrawer} >
                <Outline />
              </Burger>
            </DrawerContainer>
          </Col>
        </Row>
        
        <Drawer closable={false} visible={visible} onClose={onClose}>
          {/* <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={onClose}>
              <Col span={9} offset={9}>
                <Menu>{t("Menu")}</Menu>
              </Col>
            </Label>
          </Col> */}
          <MenuItem />
        </Drawer>

      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
