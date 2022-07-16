import { Col, Row } from 'antd';
import React,{useState,useEffect} from 'react';
import { withTranslation } from "react-i18next";

import { ImageSelector, MainContainer, MainImage, MainImageHolder,ImageSelectorArrow, ImageSelectorThumbnail, MainImageNavigator, ImageSelectorArrowHorizontal } from './styles';
import { CaretUpOutlined,CaretDownOutlined,LeftCircleOutlined,RightCircleOutlined,CaretLeftOutlined,CaretRightOutlined } from '@ant-design/icons';
import { loadCarPictures } from '../../API/api';


const Gallery = ({t,carInfo}:any) => {

    // the required distance between touchStart and touchEnd to be detected as a swipe
    const minSwipeDistance = 50 

    const [isloading,setIsLoading] = useState(false);
    const [pageWidth,setPageWidth] = useState(window.innerWidth);
    const [carImages,setCarImages] = useState<Array<String>>([]);
    const [curImage,setCurImage] = useState<String>('');
    const [curImageID,setCurImageID] = useState(-1);
    const [sliderFirstIndex,setSliderFirstIndex] = useState(0);
    const [sliderMaxCount,setSliderMaxCount] = useState(0);
    const [touchStart, setTouchStart] = useState(null)
    const [touchEnd, setTouchEnd] = useState(null)

    useEffect( () => {

        window.addEventListener("resize", handleResize)
        handleResize();

        if (carImages.length==0){
            setCarImages(loadCarPictures(carInfo.id));
        }
        else
        {
            setCurImage(carImages[0]);
            setCurImageID(0);
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

    //choose the screen size 
    const handleResize = () => {
        setPageWidth(window.innerWidth)

        if (window.innerWidth <= 768){
            if (carImages.length < 4)
            {
                setSliderMaxCount(carImages.length);
            }
            else
            {
                setSliderMaxCount(3);
            }
        }
    }


    const thumbnailClick = (item:any) => {
        setCurImage(item);
        setCurImageID(carImages.findIndex(x => x === item));
    }

    const showSpecificImage = (id:any) => {
        setCurImage(carImages[id]);
        setCurImageID(id);
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

    const showNextImage = () => {
        if (curImageID < (carImages.length-1) ){
            showSpecificImage(curImageID+1);
        }
    }

    const showPreviousImage = () => {
        if (curImageID > 0 ){
            showSpecificImage(curImageID-1);
        }
    }

    const thumbnailImages = carImages.slice(sliderFirstIndex,sliderFirstIndex + sliderMaxCount).map((item:any) => {
        return (
            <ImageSelectorThumbnail src={item} border={item == curImage ? true : false} alt={carInfo.title} onClick={()=> thumbnailClick(item)} />
        )
    });

    const onTouchStart = (e:any) => {
        setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
        setTouchStart(e.targetTouches[0].clientX)
    }

    const onTouchMove = (e:any) => setTouchEnd(e.targetTouches[0].clientX)

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return
        const distance = touchStart - touchEnd
        const isLeftSwipe = distance > minSwipeDistance
        const isRightSwipe = distance < -minSwipeDistance

        if (!isLeftSwipe && isRightSwipe) {
            showPreviousImage();         
        }
        if (isLeftSwipe && !isRightSwipe) {
            showNextImage();
        } 
      }

    return (
        <MainContainer>
            {isloading && (
                <>
                    <Row justify="space-between">
                        <Col lg={20} md={24} sm={24} xs={24}>
                            <MainImageHolder onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
                                <MainImage src={curImage} alt={carInfo.title} />
                                <MainImageNavigator left={"15px"}><LeftCircleOutlined style={{ fontSize: '20px', color: '#f0da13' }} onClick={()=> showPreviousImage()}/></MainImageNavigator> 
                                <MainImageNavigator right={"15px"}><RightCircleOutlined style={{ fontSize: '20px', color: '#f0da13' }} onClick={()=> showNextImage()}/></MainImageNavigator>
                            </MainImageHolder>
                        </Col>
                        <Col lg={4} md={0} sm={0} xs={0}>
                            <ImageSelector direction="column">
                                <ImageSelectorArrow>
                                    <CaretUpOutlined style={{ fontSize: '20px', color: '#f0da13' }} onClick={()=> sliderUpClick()}/>
                                </ImageSelectorArrow>

                                {thumbnailImages}

                                <ImageSelectorArrow>
                                    <CaretDownOutlined style={{ fontSize: '20px', color: '#f0da13' }} onClick={()=> sliderDownClick()}/>
                                </ImageSelectorArrow>
                    
                            </ImageSelector>
                        </Col>
                    </Row>
                    <Row justify="space-between">
                        <Col lg={0} md={24} sm={24} xs={24}>
                            <ImageSelector direction="row">
                                <ImageSelectorArrowHorizontal>
                                    <CaretLeftOutlined style={{ fontSize: '20px', color: '#f0da13' }} onClick={()=> sliderUpClick()}/>
                                </ImageSelectorArrowHorizontal>

                                {thumbnailImages}

                                <ImageSelectorArrowHorizontal>
                                    <CaretRightOutlined style={{ fontSize: '20px', color: '#f0da13' }} onClick={()=> sliderDownClick()}/>
                                </ImageSelectorArrowHorizontal>
                    
                            </ImageSelector>
                        </Col>
                    </Row>
                </>
            )}    
        </MainContainer>
    )

}

export default withTranslation()(Gallery)