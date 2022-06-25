import { Col, Row } from 'antd';
import React,{useState,useEffect} from 'react';
import { withTranslation } from "react-i18next";
import { CustomYellowButton } from '../../styles/styles';
import { PngImage } from '../common/PngImage';
import { SvgIcon } from '../common/SvgIcon';
import { Detail, MainContainer, Title } from './styles';

const OptionBox = ({t,title,subTitle,logo,buttonText,color,onClick}:any) => {
 
    return (
        <MainContainer>
            <Row align='middle'>
                <Col lg={8} md={8} sm={8} xs={8}>
                    <PngImage src={logo} aria-label={logo} width="50px" height="50px" />
                </Col>
                <Col lg={16} md={16} sm={16} xs={16}>
                    <Row align='middle'>
                        <Col lg={24} md={24} sm={24} xs={24}>
                            <Title color={"black"}>{title}</Title>
                        </Col>
                    </Row>
                    <Row align='middle'>
                        <Col lg={24} md={24} sm={24} xs={24}>
                            <Detail>{subTitle}</Detail>
                        </Col>
                    </Row>
                    <Row align='middle'>
                        <Col lg={24} md={24} sm={24} xs={24}>
                            <CustomYellowButton width={"100%"} onClick={onClick}>
                                {buttonText}
                            </CustomYellowButton>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </MainContainer>
    )

}

export default withTranslation()(OptionBox)