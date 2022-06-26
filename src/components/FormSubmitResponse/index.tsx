import React, { useState } from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide, Zoom } from "react-awesome-reveal";
import { CustomYellowButton } from "../../styles/styles";
import { CloseCircleFilled,CheckCircleFilled } from '@ant-design/icons';
import { MainContainer, Subtitle, Title } from "./styles";
import Container from "../common/Container";
import { useHistory } from "react-router-dom";

const FormSubmitResponse = ({ id,status,title,subtile,buttonText,buttonLink,t }: any) => {

    const history = useHistory();

    const navigateTo = (id: string) => {
        history.push(`/${id}`);
    };

  return (
    <MainContainer>

        {/* <Zoom direction="down"> */}
            <div>{status ? <CheckCircleFilled style={{ fontSize: '96px', color: '#4bf72d' }} /> : <CloseCircleFilled style={{ fontSize: '96px', color: '#fc1000' }}/>}</div>
        {/* </Zoom>   */}

        <Container marginBottom={"15px"} />

        <Title>{title}</Title>

        <Container marginBottom={"10px"} />

        <Subtitle>{subtile}</Subtitle>

        <Container marginBottom={"20px"} />

        <CustomYellowButton width={"300px"} onClick ={ () => navigateTo(buttonLink)}>
            {buttonText}
        </CustomYellowButton>

    </MainContainer>
  );
};

export default withTranslation()(FormSubmitResponse);


