import { Col, Row } from 'antd';
import React,{useState,useEffect} from 'react';
import { withTranslation } from "react-i18next";
import { CustomYellowButton } from '../../styles/styles';
import { MainContainer, Price, PriceDetail, Title } from './styles';

const OfferBox = ({t,title,price,priceDetail,buttonText,color,onClick}:any) => {
 
    return (
        <MainContainer>
            <Row>
                <Col lg={24} md={24} sm={24} xs={24}>
                    <Title >
                        {title}
                    </Title>
                </Col>
            </Row>

            {price && (
                <Row>
                    <Col lg={24} md={24} sm={24} xs={24}>
                        <Price color={color}>
                            {price}
                        </Price> 
                    </Col>
                </Row>
            )}

            {priceDetail && (
                <Row>
                    <Col lg={24} md={24} sm={24} xs={24}>
                        <PriceDetail>
                            {priceDetail}
                        </PriceDetail>
                            
                    </Col>
                </Row>
            )}

            <Row>
                <Col lg={24} md={24} sm={24} xs={24}>
                    <CustomYellowButton backgroundColor={"#f0da13"} width={"100%"}>
                        {buttonText}
                    </CustomYellowButton>           
                </Col>
            </Row>
        </MainContainer>
    )

}

export default withTranslation()(OfferBox)