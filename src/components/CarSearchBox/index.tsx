import React from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { CardSection,Title } from "./styles";
import {CustomYellowButton} from "../../styles/styles";
import { SvgIcon } from "../common/SvgIcon";
import Container from "../common/Container";

interface Props {
  id: any,
  title:any
  t: any;
}

const CarSearchBox = ({ id,title,t }: Props) => {

  return (
  <CardSection>

    <Title>{title}</Title>

    {/* <CustomYellowButton width={"100%"}>
        {t("MoreInfo")}
    </CustomYellowButton> */}

  </CardSection>
  );
};

export default withTranslation()(CarSearchBox);
