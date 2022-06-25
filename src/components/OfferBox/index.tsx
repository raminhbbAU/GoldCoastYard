import { Col, Row } from 'antd';
import React,{useState,useEffect} from 'react';
import { withTranslation } from "react-i18next";
import { CustomYellowButton } from '../../styles/styles';
import { MainContainer, Price, PriceDetail, Title } from './styles';

const OfferBox = ({t,title,price,priceDetail,buttonText,color,onClick}:any) => {
 
    return (
        <MainContainer>
            <Row align='middle'>
                <Col lg={24} md={24} sm={24} xs={24}>
                    <Title color={"black"}>
                        {title}
                    </Title>
                </Col>
                <Col lg={24} md={24} sm={24} xs={24}>
                    <Price color={color}>
                        {price}
                    </Price>
                </Col>
                {priceDetail && (
                    <Col lg={24} md={24} sm={24} xs={24}>
                        <PriceDetail>
                            {priceDetail}
                        </PriceDetail>
                        
                    </Col>
                )}
                <Col lg={24} md={24} sm={24} xs={24}>
                    <CustomYellowButton backgroundColor={color} color={"white"} width={"100%"}>
                        {buttonText}
                    </CustomYellowButton>           
                </Col>
            </Row>
        </MainContainer>
    )

}

export default withTranslation()(OfferBox)