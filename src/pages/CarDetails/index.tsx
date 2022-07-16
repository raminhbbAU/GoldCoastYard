import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { withTranslation } from "react-i18next";
import { useRouteMatch } from "react-router-dom";
import { loadCarInfo } from "../../API/api";
import Container from "../../components/common/Container";
import OfferBox from "../../components/OfferBox";
import { SvgIcon } from "../../components/common/SvgIcon";
import Gallery from "../../components/Gallery";

import { MainContainer,GalleryLeftContainer,GalleryContainer,OfferRightContainer, CarDetailIconContainer, CarDetailIconText, CarTitle, CarDetailListContainer, CarDetailListTitle, CarDetailListValue, CarDetailListSectionTitle, PageMapLinkTitle, MoreItemsText, MoreItemsContainer, CarDetailIconContainerDetail } from "./styles";
import OptionBox from "../../components/OptionBox";
import { CaretUpOutlined,CaretDownOutlined} from '@ant-design/icons';
import { CustomYellowButton } from "../../styles/styles";


function CarDetails ({t,vehicleInfo}:any) {

    const customMatch:any = useRouteMatch('/CarDetails/:id')


    const [isloading,setIsLoading] = useState(false);
    const [carId,setCarId] = useState<any>();
    const [carInfo,setCarInfo] = useState<any>();
    const [fullCarDetails,setFullCarDetail] = useState(false);

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


    const changeFullCarDetails = () => {
        setFullCarDetail(!fullCarDetails);
    }


    return (
        <Container>
            {carInfo && (
                <MainContainer>
                    
                    <PageMapLinkTitle href="/usedcar">{t("CarDetails_BackToSearchResultTitle")}</PageMapLinkTitle>
                    
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
                                    <Col lg={20} md={24} sm={24} xs={24}>
                                        <CarDetailIconContainer>
                                            <Row align="top" >
                                                <Col lg={6} md={6} sm={6} xs={6}>
                                                    <CarDetailIconContainerDetail>
                                                        <SvgIcon src="transmission.svg" aria-label="Transmission" width="50px" height="50px" />
                                                        <CarDetailIconText>{carInfo.transmission}</CarDetailIconText>
                                                    </CarDetailIconContainerDetail>
                                                </Col>
                                                <Col lg={6} md={6} sm={6} xs={6}>
                                                    <CarDetailIconContainerDetail>
                                                        <SvgIcon src="odometer.svg" aria-label="Odometer" width="50px" height="50px" />
                                                        <CarDetailIconText>{carInfo.odometer + " km"}</CarDetailIconText>
                                                    </CarDetailIconContainerDetail>
                                                </Col>
                                                <Col lg={6} md={6} sm={6} xs={6}>
                                                    <CarDetailIconContainerDetail>
                                                        <SvgIcon src="sedan.svg" aria-label="CarType" width="50px" height="50px" />
                                                        <CarDetailIconText>{carInfo.body}</CarDetailIconText>
                                                    </CarDetailIconContainerDetail>
                                                </Col>
                                                <Col lg={6} md={6} sm={6} xs={6}>
                                                    <CarDetailIconContainerDetail>
                                                        <SvgIcon src="fuel.svg" aria-label="Fuel" width="50px" height="50px" />
                                                        <CarDetailIconText>{carInfo.Fuel}</CarDetailIconText>
                                                    </CarDetailIconContainerDetail>
                                                </Col>
                                            </Row>
                                        </CarDetailIconContainer>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={20} md={24} sm={24} xs={24}>
                                        <CarDetailListSectionTitle>
                                            {t("CarDetails_DetailTitle")}
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
                                                        <CarDetailListTitle>Odometer</CarDetailListTitle>
                                                    </Col>
                                                    <Col lg={16} md={16} sm={12} xs={24}>
                                                        <CarDetailListValue>{carInfo.odometer + " Km"}</CarDetailListValue>
                                                    </Col>
                                                </Row>                                                                             
                                            </Container>

                                            {fullCarDetails && (
                                                <>
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
                                                </>
                                            )}

                                        </CarDetailListContainer>

                                        <MoreItemsContainer>
                                            <CustomYellowButton color={"a8a8a8"} onClick={() => changeFullCarDetails()}>
                                                {fullCarDetails ? <CaretUpOutlined  style={{ fontSize: '12px' }}/> : <CaretDownOutlined style={{ fontSize: '12px' }}/> }                           
                                                {" "}
                                                {fullCarDetails ? t("CarDetails_CollapseItems") : t("CarDetails_ExpandItems")}
                                            </CustomYellowButton>
                                        </MoreItemsContainer>

                                    </Col>
                                    <Col lg={20} md={24} sm={24} xs={24}>
                                        <CarDetailListSectionTitle>
                                            {t("CarDetails_OverviewTitle")}
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
                                <OfferBox title ={t("CarDetails_PriceBoxTitle")} price={'$ ' + carInfo.price} priceDetail= {""} buttonText={t("CarDetails_PriceBoxEnquireTitle")} color={"black"} onClick={ () => console.log("Click!")} />
                                <OfferBox title ={t("CarDetails_FinanceBoxTitle")} price={'$ ' + carInfo.Finance} priceDetail= {t("CarDetails_FinanceBoxDetail")} buttonText={t("CarDetails_FinanceBoxApplyTitle")} color={"black"} onClick={ () => console.log("Click!")} />
                                <OfferBox title ={t("CarDetails_TestDriveBoxTitle")} price={""} priceDetail= {""} buttonText={t("CarDetails_TestDriveBoxButton")} color={"black"} onClick={ () => console.log("Click!")} />
                               
                                {/* <OptionBox title ={t("CarDetails_AvailabilityBoxTitle")} subTitle= {t("CarDetails_AvailabilityBoxDesc")} logo={t("CarDetails_AvailabilityBoxLogo")} buttonText={t("CarDetails_AvailabilityBoxButton")} color={"#f0da13"} onClick={ () => console.log("Click!")} /> */}
                                {/* <OptionBox title ={t("CarDetails_TestDriveBoxTitle")} subTitle= {t("CarDetails_TestDriveBoxDesc")} logo={t("CarDetails_TestDriveBoxLogo")} buttonText={t("CarDetails_TestDriveBoxButton")} color={"#f0da13"} onClick={ () => console.log("Click!")} /> */}
                                {/* <OptionBox title ={t("CarDetails_OfferPriceBoxTitle")} subTitle= {t("CarDetails_OfferPriceBoxDesc")} logo={t("CarDetails_OfferPriceBoxLogo")} buttonText={t("CarDetails_OfferPriceBoxButton")} color={"#f0da13"} onClick={ () => console.log("Click!")} /> */}
                                {/* <OptionBox title ={t("CarDetails_Finance2BoxTitle")} subTitle= {t("CarDetails_Finance2BoxDesc")} logo={t("CarDetails_Finance2BoxLogo")} buttonText={t("CarDetails_Finance2BoxButton")} color={"#f0da13"} onClick={ () => console.log("Click!")} /> */}

                            </OfferRightContainer>
                        </Col>
                    </Row>

                </MainContainer>
            )}
        </Container>
    )

}

export default withTranslation()(CarDetails)