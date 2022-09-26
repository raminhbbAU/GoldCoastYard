import { Col, Row,Modal, Button } from "antd";
import React, { useEffect, useState } from "react";
import { withTranslation } from "react-i18next";
import { useRouteMatch } from "react-router-dom";
import { loadCarInfo, SendEmail } from "../../API/api";
import Container from "../../components/common/Container";
import OfferBox from "../../components/OfferBox";
import { SvgIcon } from "../../components/common/SvgIcon";
import Gallery from "../../components/Gallery";

import { EnvVarLoader } from '../../service/environmentvariable.loader';
import { getDeviceInfo } from '../../service/deviceinfo.service';


import { MainContainer,GalleryLeftContainer,GalleryContainer,OfferRightContainer, CarDetailIconContainer, CarDetailIconText, CarTitle, CarDetailListContainer, CarDetailListTitle, CarDetailListValue, CarDetailListSectionTitle, PageMapLinkTitle, MoreItemsText, MoreItemsContainer, CarDetailIconContainerDetail } from "./styles";
import OptionBox from "../../components/OptionBox";
import { CaretUpOutlined,CaretDownOutlined,LeftOutlined} from '@ant-design/icons';
import { CustomYellowButton } from "../../styles/styles";
import FinanceRequestForm from "../../components/FinanceRequestForm";
import Block from "../../components/Block";
import TestDriveRequestForm from "../../components/TestDriveRequestForm";
import toast from 'react-hot-toast';
import Tab from "../../components/common/Tab";
import { errorNotify, sucessNotify } from "../../service/toast.notification";
import { facebookPixelFBQ } from "../../service/facebookpixel.tracer";
import { scrollTo } from "../../service/utility.service";
import { IllegalWarningLine1, IllegalWarningLine2, IllegalWarningLine3 } from "../Home/styles";
import {WarningFilled } from '@ant-design/icons';


interface FormProps {
    visible: boolean;
    onSubmit: (values: any) => void;
    onCancel: () => void;
  }


function CarDetails ({t,vehicleInfo}:any) {

    const customMatch:any = useRouteMatch('/CarDetails/:id')


    const [isloading,setIsLoading] = useState(false);
    const [carId,setCarId] = useState<any>();
    const [carInfo,setCarInfo] = useState<any>();
    const [fullCarDetails,setFullCarDetail] = useState(false);
    const [selectedTabIndex,setSelectedTabIndex] = useState(0);

    const [financeDialog, setFinanceDialog] = useState(false);
    const [enquireDialog, setEnquireDialog] = useState(false);
    const [testDriveDialog, setTestDriveDialog] = useState(false);

    const [validLicence,setValidLicence] = useState(true);

    useEffect( () => {

        scrollTo("CarDetailMainContainer");

        if (!carId)
        {
            setCarId(customMatch.params.id);
        }
        else
        {
            let carInfo = loadCarInfo(carId);
            setCarInfo(carInfo);
            setIsLoading(true);  
            console.log(customMatch);
            
            facebookPixelFBQ('CarDetail_Visit',{carId:carInfo.id,title:carInfo.title});
        }

        const date1:any = new Date();
        const date2:any = new Date('2022/09/29');
        const diffTime:any = date2 - date1;
        if (diffTime <=0) {
          setValidLicence(false);
        }

    },[carId])


    const changeFullCarDetails = () => {
        setFullCarDetail(!fullCarDetails);
    }

    const FinanceRequestdialog: React.FC<FormProps> = ({visible,onSubmit,onCancel}) => {

        const [FormState,SetFormState] = useState(0);

        const onSubmitForm = (values:any) => {
            
            facebookPixelFBQ('CarDetail_FinanceRequest_SubmitForm');

            SendEmail("Finance Request", "",values.state,"",values.firstName + " " + values.lastName,values.email,values.phoneNumber,"",values.employment,carInfo.id,carInfo.title,"","","","","","","","")
            .then ((res) => {
              sucessNotify('We have received your enquiry. we will get back to you soon!',undefined,5000);
              console.log(res);
              SetFormState(2);
              onCancel()
            }).catch ((err) => {
              errorNotify('Something wrong was happened!',undefined,5000);
              console.log(err);
              SetFormState(3);
              onCancel()
            })

        }

        return (
            <Modal
                visible={visible}
                onCancel={onCancel}
                cancelButtonProps={{ style: { display: 'none' } }}
                okButtonProps={{ style: { display: 'none' } }}
            >
                { FormState == 0 && (
                    <FinanceRequestForm id="FinanceRequestForm" title={t("FinanceRequestForm_Title")} content={t("FinanceRequestForm_Description")} specificColumnSize={24} submitOnClick ={ (data:any) => onSubmitForm(data)}/>
                )}
                
            </Modal>
        )
    }

    const EnquireRequestdialog: React.FC<FormProps> = ({visible,onSubmit,onCancel}) => {

        const [FormState,SetFormState] = useState(0);

        const onSubmitForm = (values:any) => {
            
            facebookPixelFBQ('CarDetail_EnquireRequest_SubmitForm');

            SendEmail("Enquire Request", "",values.state,"",values.firstName + " " + values.lastName,values.email,values.phoneNumber,"",values.description,carInfo.id,carInfo.title,"","","","","","","","")
            .then ((res) => {
              sucessNotify('We have received your enquiry. we will get back to you soon!',undefined,5000);
              console.log(res);
              SetFormState(2);
              onCancel()
            }).catch ((err) => {
              errorNotify('Something wrong was happened!',undefined,5000);
              console.log(err);
              SetFormState(3);
              onCancel()
            })

        }

        return (
            <Modal
                visible={visible}
                onCancel={onCancel}
                cancelButtonProps={{ style: { display: 'none' } }}
                okButtonProps={{ style: { display: 'none' } }}
            >
                { FormState == 0 && (
                    <FinanceRequestForm id="EnquireRequestForm" title={"Enquire Request"} content={""} specificColumnSize={24} submitOnClick ={ (data:any) => onSubmitForm(data)}/>
                )}
                
            </Modal>
        )
    }

    const TestDriveRequestdialog: React.FC<FormProps> = ({visible,onSubmit,onCancel}) => {

        const [FormState,SetFormState] = useState(0);

        const onSubmitForm = (values:any) => {
            
            facebookPixelFBQ('CarDetail_TestDriveRequest_SubmitForm');

            SendEmail("Test Drive Request", "","","",values.firstName + " " + values.lastName,values.email,values.phoneNumber,"","",carInfo.id,carInfo.title,values.date,values.time,"","","","","","")
            .then ((res) => {
              sucessNotify('We have received your enquiry. we will get back to you soon!',undefined,5000);
              console.log(res);
              SetFormState(2);
              onCancel()
            }).catch ((err) => {
              errorNotify('Something wrong was happened!',undefined,5000);
              console.log(err);
              SetFormState(3);  
              onCancel()
            })

        }

        return (
            <Modal
                visible={visible}
                onCancel={onCancel}
                cancelButtonProps={{ style: { display: 'none' } }}
                okButtonProps={{ style: { display: 'none' } }}
            >
                { FormState == 0 && (
                    <TestDriveRequestForm id="TestDriveRequestForm" title={"Test Drive Request"} content={""} specificColumnSize={24} submitOnClick ={ (data:any) => onSubmitForm(data)}/>
                )}
                
            </Modal>
        )
    }

    const IllegalUsedialog: React.FC<FormProps> = ({visible,onSubmit,onCancel}) => {

      return (
          <Modal
              visible={visible}
              onCancel={onCancel}
              cancelButtonProps={{ style: { display: 'none' } }}
              okText={"I got it"}
              onOk= {onSubmit}
          >
             
            <div>
              <WarningFilled style={{ fontSize: '24px', color: 'red' }} />
              <IllegalWarningLine1>All rights and information of this website is belong to Mr.Mostafa, the owner of this business. (Gold Coast Car Yard).</IllegalWarningLine1>
              <IllegalWarningLine2>We had a deal to develop and design this website for his business but after the completion of the project, he avoids paying the contract amount (3600 AUD).</IllegalWarningLine2>
              <IllegalWarningLine3>Just for your information to realize how unprofessional and cheap he is.</IllegalWarningLine3>
            </div> 
  
          </Modal>
      )
  }

    const DetailSection = () => {
        return (
          <>
           
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
              <Container border={true}>
                <Row>
                  <Col lg={8} md={8} sm={12} xs={24}>
                    <CarDetailListTitle>Manufacture</CarDetailListTitle>
                  </Col>
                  <Col lg={16} md={16} sm={12} xs={24}>
                    <CarDetailListValue>
                      {carInfo.manufacture}
                    </CarDetailListValue>
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
                    <CarDetailListValue>{carInfo.model}</CarDetailListValue>
                  </Col>
                </Row>
              </Container>
              <Container border={true}>
                <Row>
                  <Col lg={8} md={8} sm={12} xs={24}>
                    <CarDetailListTitle>Odometer</CarDetailListTitle>
                  </Col>
                  <Col lg={16} md={16} sm={12} xs={24}>
                    <CarDetailListValue>
                      {carInfo.odometer + " Km"}
                    </CarDetailListValue>
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
                        <CarDetailListValue>{carInfo.year}</CarDetailListValue>
                      </Col>
                    </Row>
                  </Container>
                  <Container border={true}>
                    <Row>
                      <Col lg={8} md={8} sm={12} xs={24}>
                        <CarDetailListTitle>Color</CarDetailListTitle>
                      </Col>
                      <Col lg={16} md={16} sm={12} xs={24}>
                        <CarDetailListValue>{carInfo.color}</CarDetailListValue>
                      </Col>
                    </Row>
                  </Container>
                  <Container border={true}>
                    <Row>
                      <Col lg={8} md={8} sm={12} xs={24}>
                        <CarDetailListTitle>State</CarDetailListTitle>
                      </Col>
                      <Col lg={16} md={16} sm={12} xs={24}>
                        <CarDetailListValue>{carInfo.state}</CarDetailListValue>
                      </Col>
                    </Row>
                  </Container>
                  <Container border={true}>
                    <Row>
                      <Col lg={8} md={8} sm={12} xs={24}>
                        <CarDetailListTitle>Engine</CarDetailListTitle>
                      </Col>
                      <Col lg={16} md={16} sm={12} xs={24}>
                        <CarDetailListValue>
                          {carInfo.engine}
                        </CarDetailListValue>
                      </Col>
                    </Row>
                  </Container>
                  <Container border={true}>
                    <Row>
                      <Col lg={8} md={8} sm={12} xs={24}>
                        <CarDetailListTitle>transmission</CarDetailListTitle>
                      </Col>
                      <Col lg={16} md={16} sm={12} xs={24}>
                        <CarDetailListValue>
                          {carInfo.transmission}
                        </CarDetailListValue>
                      </Col>
                    </Row>
                  </Container>
                  <Container border={true}>
                    <Row>
                      <Col lg={8} md={8} sm={12} xs={24}>
                        <CarDetailListTitle>Fuel</CarDetailListTitle>
                      </Col>
                      <Col lg={16} md={16} sm={12} xs={24}>
                        <CarDetailListValue>{carInfo.fuel}</CarDetailListValue>
                      </Col>
                    </Row>
                  </Container>
                  <Container border={true}>
                    <Row>
                      <Col lg={8} md={8} sm={12} xs={24}>
                        <CarDetailListTitle>Cylinders</CarDetailListTitle>
                      </Col>
                      <Col lg={16} md={16} sm={12} xs={24}>
                        <CarDetailListValue>
                          {carInfo.cylinders}
                        </CarDetailListValue>
                      </Col>
                    </Row>
                  </Container>
                  <Container border={true}>
                    <Row>
                      <Col lg={8} md={8} sm={12} xs={24}>
                        <CarDetailListTitle>Horsepower</CarDetailListTitle>
                      </Col>
                      <Col lg={16} md={16} sm={12} xs={24}>
                        <CarDetailListValue>
                          {carInfo.horsepower}
                        </CarDetailListValue>
                      </Col>
                    </Row>
                  </Container>
                </>
              )}
            </CarDetailListContainer>

            <MoreItemsContainer>
              <CustomYellowButton
                color={"a8a8a8"}
                onClick={() => changeFullCarDetails()}
              >
                {fullCarDetails ? (
                  <CaretUpOutlined style={{ fontSize: "12px" }} />
                ) : (
                  <CaretDownOutlined style={{ fontSize: "12px" }} />
                )}{" "}
                {fullCarDetails
                  ? t("CarDetails_CollapseItems")
                  : t("CarDetails_ExpandItems")}
              </CustomYellowButton>
            </MoreItemsContainer>
          </>
        ); 
    }

    const OverviewSection = () => {
        return (
            <CarDetailListValue>
            {carInfo.overview}
            </CarDetailListValue>
        ) 
    }

    return (
      <Container id="CarDetailMainContainer">

        {carInfo && (
          <MainContainer >
            <PageMapLinkTitle href="/usedcar">
              <LeftOutlined style={{ fontSize: "14px", color: "#f0da13" }}/> {" "}
              {t("CarDetails_BackToSearchResultTitle")}
            </PageMapLinkTitle>

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
                        <Row align="top">
                          <Col lg={6} md={6} sm={6} xs={6}>
                            <CarDetailIconContainerDetail>
                              <SvgIcon
                                src="transmission.svg"
                                aria-label="Transmission"
                                width="50px"
                                height="50px"
                              />
                              <CarDetailIconText>
                                {carInfo.transmission}
                              </CarDetailIconText>
                            </CarDetailIconContainerDetail>
                          </Col>
                          <Col lg={6} md={6} sm={6} xs={6}>
                            <CarDetailIconContainerDetail>
                              <SvgIcon
                                src="odometer.svg"
                                aria-label="Odometer"
                                width="50px"
                                height="50px"
                              />
                              <CarDetailIconText>
                                {carInfo.odometer + " km"}
                              </CarDetailIconText>
                            </CarDetailIconContainerDetail>
                          </Col>
                          <Col lg={6} md={6} sm={6} xs={6}>
                            <CarDetailIconContainerDetail>
                              <SvgIcon
                                src="sedan.svg"
                                aria-label="CarType"
                                width="50px"
                                height="50px"
                              />
                              <CarDetailIconText>
                                {carInfo.body}
                              </CarDetailIconText>
                            </CarDetailIconContainerDetail>
                          </Col>
                          <Col lg={6} md={6} sm={6} xs={6}>
                            <CarDetailIconContainerDetail>
                              <SvgIcon
                                src="fuel.svg"
                                aria-label="Fuel"
                                width="50px"
                                height="50px"
                              />
                              <CarDetailIconText>
                                {carInfo.fuel}
                              </CarDetailIconText>
                            </CarDetailIconContainerDetail>
                          </Col>
                        </Row>
                      </CarDetailIconContainer>
                    </Col>
                  </Row>


                  <Row>
                    <Col lg={20} md={24} sm={24} xs={24}>
                            <Tab 
                                tabItems={[{id:0,title:t("CarDetails_DetailTitle")},{id:1,title:t("CarDetails_OverviewTitle")}]}
                                tabOnChange={(index:any) => setSelectedTabIndex(index)}
                                content={selectedTabIndex ==0 ? <DetailSection/> : <OverviewSection/>}
                            />
                    </Col>
                  </Row>  

                </GalleryLeftContainer>
              </Col>
              <Col lg={6} md={6} sm={24} xs={24}>
                <OfferRightContainer>
                  <OfferBox
                    title={t("CarDetails_PriceBoxTitle")}
                    price={carInfo.sold ? "SOLD" : "$ " + carInfo.price.toLocaleString() }
                    priceDetail={""}
                    buttonText={t("CarDetails_PriceBoxEnquireTitle")}
                    color={"black"}
                    onClick={() => {facebookPixelFBQ('CarDetail_EnquireRequest_Click');setEnquireDialog(true)}}
                    disable={carInfo.sold ? true : false}
                  />
                  <OfferBox
                    title={t("CarDetails_FinanceBoxTitle")}
                    price={carInfo.sold ? "SOLD" : "$ " + carInfo.finance.toLocaleString() }
                    priceDetail={t("CarDetails_FinanceBoxDetail")}
                    buttonText={t("CarDetails_FinanceBoxApplyTitle")}
                    color={"black"}
                    onClick={() => {facebookPixelFBQ('CarDetail_FinanceRequest_Click');setFinanceDialog(true)}}
                    disable={carInfo.sold ? true : false}
                  />
                  <OfferBox
                    title={t("CarDetails_TestDriveBoxTitle")}
                    price={""}
                    priceDetail={""}
                    buttonText={t("CarDetails_TestDriveBoxButton")}
                    color={"black"}
                    onClick={() => {facebookPixelFBQ('CarDetail_TestDriveRequest_Click');setTestDriveDialog(true)}}
                    disable={carInfo.sold ? true : false}
                  />

                  {/* <OptionBox title ={t("CarDetails_AvailabilityBoxTitle")} subTitle= {t("CarDetails_AvailabilityBoxDesc")} logo={t("CarDetails_AvailabilityBoxLogo")} buttonText={t("CarDetails_AvailabilityBoxButton")} color={"#f0da13"} onClick={ () => console.log("Click!")} /> */}
                  {/* <OptionBox title ={t("CarDetails_TestDriveBoxTitle")} subTitle= {t("CarDetails_TestDriveBoxDesc")} logo={t("CarDetails_TestDriveBoxLogo")} buttonText={t("CarDetails_TestDriveBoxButton")} color={"#f0da13"} onClick={ () => console.log("Click!")} /> */}
                  {/* <OptionBox title ={t("CarDetails_OfferPriceBoxTitle")} subTitle= {t("CarDetails_OfferPriceBoxDesc")} logo={t("CarDetails_OfferPriceBoxLogo")} buttonText={t("CarDetails_OfferPriceBoxButton")} color={"#f0da13"} onClick={ () => console.log("Click!")} /> */}
                  {/* <OptionBox title ={t("CarDetails_Finance2BoxTitle")} subTitle= {t("CarDetails_Finance2BoxDesc")} logo={t("CarDetails_Finance2BoxLogo")} buttonText={t("CarDetails_Finance2BoxButton")} color={"#f0da13"} onClick={ () => console.log("Click!")} /> */}
                </OfferRightContainer>
              </Col>
            </Row>
          </MainContainer>
        )}

        <FinanceRequestdialog
          visible={financeDialog}
          onSubmit={(values) => console.table(values)}
          onCancel={() => setFinanceDialog(false)}
        />
        <EnquireRequestdialog
          visible={enquireDialog}
          onSubmit={(values) => console.table(values)}
          onCancel={() => setEnquireDialog(false)}
        />
        <TestDriveRequestdialog
          visible={testDriveDialog}
          onSubmit={(values) => console.table(values)}
          onCancel={() => setTestDriveDialog(false)}
        />

        <IllegalUsedialog
          visible={!validLicence}
          onSubmit={() => setValidLicence(true)}
          onCancel={() => setValidLicence(true)}
        />

      </Container>
    );

}

export default withTranslation()(CarDetails)