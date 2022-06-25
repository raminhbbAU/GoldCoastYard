import { Col, Row } from 'antd';
import React,{useState,useEffect} from 'react';
import { withTranslation } from "react-i18next";

import { ImageSelector, MainContainer, MainImage, MainImageHolder,ImageSelectorArrow, ImageSelectorThumbnail } from './styles';
import { UpCircleFilled,DownCircleFilled} from '@ant-design/icons';
import { loadCarPictures } from '../../API/api';


const Gallery = ({t,carInfo}:any) => {


    const [isloading,setIsLoading] = useState(false);
    const [carImages,setCarImages] = useState<any>([]);
    const [curImage,setCurImage] = useState('');
    const [sliderFirstIndex,setSliderFirstIndex] = useState(0);
    const [sliderMaxCount,setSliderMaxCount] = useState(0);

    useEffect( () => {

        if (carImages.length==0){
            setCarImages(loadCarPictures(carInfo.id));
        }
        else
        {
            setCurImage(carImages[0]);
            setSliderFirstIndex(0);

            if (carImages.length < 4)
            {
                setSliderMaxCount(carImages.length);
            }
            else
            {
                setSliderMaxCount(4);
            }

            setIsLoading(true);       
        }
       
    },[carImages])



    const thumbnailClick = (item:any) => {
        setCurImage(item);
    }

    const sliderUpClick = () => {
        if (sliderFirstIndex >0){
            setSliderFirstIndex(sliderFirstIndex-1);
        }
    }

    const sliderDownClick = () => {
        if (sliderFirstIndex + sliderMaxCount <= carImages.length -1){
            setSliderFirstIndex(sliderFirstIndex+1);
        }
    }

    const thumbnailImages = carImages.slice(sliderFirstIndex,sliderFirstIndex + sliderMaxCount).map((item:any) => {
        return (
            <ImageSelectorThumbnail src={item} border={item == curImage ? true : false} onClick={()=> thumbnailClick(item)} />
        )
    });


    return (
        <MainContainer>
            {isloading && (
                <>

                    <Row justify="space-between">
                        <Col lg={20} md={24} sm={24} xs={24}>
                            <MainImageHolder>
                                <MainImage src={curImage} />
                            </MainImageHolder>
                        </Col>
                        <Col lg={4} md={0} sm={0} xs={0}>
                            <ImageSelector direction="column">
                                <ImageSelectorArrow>
                                    <UpCircleFilled style={{ fontSize: '20px', color: '#f0da13' }} onClick={()=> sliderUpClick()}/>
                                </ImageSelectorArrow>

                                {thumbnailImages}

                                <ImageSelectorArrow>
                                    <DownCircleFilled style={{ fontSize: '20px', color: '#f0da13' }} onClick={()=> sliderDownClick()}/>
                                </ImageSelectorArrow>
                    
                            </ImageSelector>
                        </Col>
                    </Row>
                    <Row justify="space-between">
                        <Col lg={0} md={24} sm={24} xs={24}>
                            <ImageSelector direction="row">
                                <ImageSelectorArrow>
                                    <UpCircleFilled style={{ fontSize: '20px', color: '#f0da13' }} onClick={()=> sliderUpClick()}/>
                                </ImageSelectorArrow>

                                {thumbnailImages}

                                <ImageSelectorArrow>
                                    <DownCircleFilled style={{ fontSize: '20px', color: '#f0da13' }} onClick={()=> sliderDownClick()}/>
                                </ImageSelectorArrow>
                    
                            </ImageSelector>
                        </Col>
                    </Row>
                </>
            )}    
        </MainContainer>
    )

}

export default withTranslation()(Gallery)