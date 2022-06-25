import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { withTranslation } from "react-i18next";
import { useRouteMatch } from "react-router-dom";
import { loadCarInfo } from "../../API/api";
import Container from "../../components/common/Container";
import { SvgIcon } from "../../components/common/SvgIcon";
import Gallery from "../../components/Gallery";

import { MainContainer,GalleryLeftContainer,GalleryContainer,OfferRightContainer, CarDetailIconContainer, CarDetailIconText, CarTitle, CarDetailListContainer, CarDetailListTitle, CarDetailListValue, CarDetailListSectionTitle } from "./styles";


function CarDetails ({t,vehicleInfo}:any) {

    const customMatch:any = useRouteMatch('/CarDetails/:id')


    const [isloading,setIsLoading] = useState(false);
    const [carId,setCarId] = useState<any>();
    const [carInfo,setCarInfo] = useState<any>();

    useEffect( () => {

        if (!carId)
        {
            setCarId(customMatch.params.id);
        }
        else
        {
            setCarInfo(loadCarInfo(carId));
            setIsLoading(true);  
            console.log(customMatch);     
        }

    },[carId])


    return (
        <Container>
            {carInfo && (
                <MainContainer>
                    
                    <CarTitle>{carInfo.title}</CarTitle>
                    <Row justify="space-between">
                        <Col lg={18} md={18} sm={24} xs={24}>
                            <GalleryLeftContainer>
                                <Row>
                                    <Col lg={24} md={24} sm={24} xs={24}>
                                        <GalleryContainer>
                                            <Gallery t={t} carInfo={carInfo} />
                                        </GalleryContainer>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={20} md={20} sm={20} xs={20}>
                                        <CarDetailIconContainer>
                                            <Row align="top" >
                                                <Col lg={6} md={6} sm={6} xs={6}>
                                                    <SvgIcon src="transmission.svg" aria-label="Transmission" width="50px" height="50px" />
                                                    <CarDetailIconText>{carInfo.transmission}</CarDetailIconText>
                                                </Col>
                                                <Col lg={6} md={6} sm={6} xs={6}>
                                                    <SvgIcon src="odometer.svg" aria-label="Odometer" width="50px" height="50px" />
                                                    <CarDetailIconText>{carInfo.odometer}</CarDetailIconText>
                                                </Col>
                                                <Col lg={6} md={6} sm={6} xs={6}>
                                                    <SvgIcon src="sedan.svg" aria-label="CarType" width="50px" height="50px" />
                                                    <CarDetailIconText>{carInfo.body}</CarDetailIconText>
                                                </Col>
                                                <Col lg={6} md={6} sm={6} xs={6}>
                                                    <SvgIcon src="fuel.svg" aria-label="Fuel" width="50px" height="50px" />
                                                    <CarDetailIconText>{carInfo.Fuel}</CarDetailIconText>
                                                </Col>
                                            </Row>
                                        </CarDetailIconContainer>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={20} md={20} sm={20} xs={20}>
                                        <CarDetailListSectionTitle>
                                            Details
                                        </CarDetailListSectionTitle>
                                        <CarDetailListContainer>
                                            <Container>
                                                <Row>
                                                    <Col lg={8} md={8} sm={12} xs={24}>
                                                        <CarDetailListTitle>Title</CarDetailListTitle>
                                                    </Col>
                                                    <Col lg={16} md={16} sm={12} xs={24}>
                                                        <CarDetailListValue>{carInfo.title}</CarDetailListValue>
                                                    </Col>
                                                </Row>                                                                             
                                            </Container>
                                            <Container border={true} >
                                                <Row>
                                                    <Col lg={8} md={8} sm={12} xs={24}>
                                                        <CarDetailListTitle>Manufacture</CarDetailListTitle>
                                                    </Col>
                                                    <Col lg={16} md={16} sm={12} xs={24}>
                                                        <CarDetailListValue>{carInfo.Manufacture}</CarDetailListValue>
                                                    </Col>
                                                </Row>                                                                             
                                            </Container>
                                            <Container border={true}>
                                                <Row>
                                                    <Col lg={8} md={8} sm={12} xs={24}>
                                                        <CarDetailListTitle>Body</CarDetailListTitle>
                                                    </Col>
                                                    <Col lg={16} md={16} sm={12} xs={24}>
                                                        <CarDetailListValue>{carInfo.body}</CarDetailListValue>
                                                    </Col>
                                                </Row>                                                                             
                                            </Container>
                                            <Container border={true}>
                                                <Row>
                                                    <Col lg={8} md={8} sm={12} xs={24}>
                                                        <CarDetailListTitle>Model</CarDetailListTitle>
                                                    </Col>
                                                    <Col lg={16} md={16} sm={12} xs={24}>
                                                        <CarDetailListValue>{carInfo.Model}</CarDetailListValue>
                                                    </Col>
                                                </Row>                                                                             
                                            </Container>
                                            <Container border={true}>
                                                <Row>
                                                    <Col lg={8} md={8} sm={12} xs={24}>
                                                        <CarDetailListTitle>Cylinders</CarDetailListTitle>
                                                    </Col>
                                                    <Col lg={16} md={16} sm={12} xs={24}>
                                                        <CarDetailListValue>{carInfo.Cylinders}</CarDetailListValue>
                                                    </Col>
                                                </Row>                                                                             
                                            </Container>
                                            <Container border={true}>
                                                <Row>
                                                    <Col lg={8} md={8} sm={12} xs={24}>
                                                        <CarDetailListTitle>Horsepower</CarDetailListTitle>
                                                    </Col>
                                                    <Col lg={16} md={16} sm={12} xs={24}>
                                                        <CarDetailListValue>{carInfo.Horsepower}</CarDetailListValue>
                                                    </Col>
                                                </Row>                                                                             
                                            </Container>
                                            <Container border={true}>
                                                <Row>
                                                    <Col lg={8} md={8} sm={12} xs={24}>
                                                        <CarDetailListTitle>Odometer</CarDetailListTitle>
                                                    </Col>
                                                    <Col lg={16} md={16} sm={12} xs={24}>
                                                        <CarDetailListValue>{carInfo.odometer + "Km"}</CarDetailListValue>
                                                    </Col>
                                                </Row>                                                                             
                                            </Container>
                                            <Container border={true}>
                                                <Row>
                                                    <Col lg={8} md={8} sm={12} xs={24}>
                                                        <CarDetailListTitle>Title</CarDetailListTitle>
                                                    </Col>
                                                    <Col lg={16} md={16} sm={12} xs={24}>
                                                        <CarDetailListValue>{carInfo.title}</CarDetailListValue>
                                                    </Col>
                                                </Row>                                                                             
                                            </Container>
                                            <Container border={true}>
                                                <Row>
                                                    <Col lg={8} md={8} sm={12} xs={24}>
                                                        <CarDetailListTitle>Year</CarDetailListTitle>
                                                    </Col>
                                                    <Col lg={16} md={16} sm={12} xs={24}>
                                                        <CarDetailListValue>{carInfo.Year}</CarDetailListValue>
                                                    </Col>
                                                </Row>                                                                             
                                            </Container>
                                            <Container border={true}>
                                                <Row>
                                                    <Col lg={8} md={8} sm={12} xs={24}>
                                                        <CarDetailListTitle>Color</CarDetailListTitle>
                                                    </Col>
                                                    <Col lg={16} md={16} sm={12} xs={24}>
                                                        <CarDetailListValue>{carInfo.Color}</CarDetailListValue>
                                                    </Col>
                                                </Row>                                                                             
                                            </Container>
                                            <Container border={true}>
                                                <Row>
                                                    <Col lg={8} md={8} sm={12} xs={24}>
                                                        <CarDetailListTitle>State</CarDetailListTitle>
                                                    </Col>
                                                    <Col lg={16} md={16} sm={12} xs={24}>
                                                        <CarDetailListValue>{carInfo.State}</CarDetailListValue>
                                                    </Col>
                                                </Row>                                                                             
                                            </Container>
                                            <Container border={true}>
                                                <Row>
                                                    <Col lg={8} md={8} sm={12} xs={24}>
                                                        <CarDetailListTitle>Engine</CarDetailListTitle>
                                                    </Col>
                                                    <Col lg={16} md={16} sm={12} xs={24}>
                                                        <CarDetailListValue>{carInfo.Engine}</CarDetailListValue>
                                                    </Col>
                                                </Row>                                                                             
                                            </Container>
                                            <Container border={true}>
                                                <Row>
                                                    <Col lg={8} md={8} sm={12} xs={24}>
                                                        <CarDetailListTitle>transmission</CarDetailListTitle>
                                                    </Col>
                                                    <Col lg={16} md={16} sm={12} xs={24}>
                                                        <CarDetailListValue>{carInfo.transmission}</CarDetailListValue>
                                                    </Col>
                                                </Row>                                                                             
                                            </Container>
                                            <Container border={true}>
                                                <Row>
                                                    <Col lg={8} md={8} sm={12} xs={24}>
                                                        <CarDetailListTitle>Fuel</CarDetailListTitle>
                                                    </Col>
                                                    <Col lg={16} md={16} sm={12} xs={24}>
                                                        <CarDetailListValue>{carInfo.Fuel}</CarDetailListValue>
                                                    </Col>
                                                </Row>                                                                             
                                            </Container>
                                        </CarDetailListContainer>
                                    </Col>
                                    <Col lg={20} md={20} sm={20} xs={20}>
                                        <CarDetailListSectionTitle>
                                            Overview
                                        </CarDetailListSectionTitle>
                                        <CarDetailListValue>
                                            {carInfo.Overview}
                                        </CarDetailListValue>
                                    </Col>
                                </Row>
                            </GalleryLeftContainer>
                        </Col>
                        <Col lg={6} md={6} sm={24} xs={24}>
                            <OfferRightContainer>
                                Right Panel for Insurance 
                                Right Panel for Test Drive
                                ...
                            </OfferRightContainer>
                            <OfferRightContainer>
                                Right Panel for Insurance 
                                Right Panel for Test Drive
                                ...
                            </OfferRightContainer>
                            <OfferRightContainer>
                                Right Panel for Insurance 
                                Right Panel for Test Drive
                                ...
                            </OfferRightContainer>
                            <OfferRightContainer>
                                Right Panel for Insurance 
                                Right Panel for Test Drive
                                ...
                            </OfferRightContainer>
                        </Col>
                    </Row>

                </MainContainer>
            )}
        </Container>
    )

}

export default withTranslation()(CarDetails)