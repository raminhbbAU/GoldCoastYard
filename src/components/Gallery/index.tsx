import { Col, Row } from 'antd';
import React,{useState,useEffect} from 'react';
import { withTranslation } from "react-i18next";

import { ImageSelector, MainContainer, MainImage, MainImageHolder,ImageSelectorArrow, ImageSelectorThumbnail } from './styles';
import { UpCircleFilled,DownCircleFilled} from '@ant-design/icons';


const Gallery = ({t,carInfo}:any) => {


    const [isloading,setIsLoading] = useState(false);
    const [carImages,setCarImages] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13]);
    const [imageId,setImageId] = useState(1);


    useEffect( () => {
        setIsLoading(true);       
    },[])



    const findImage = (carID:any,imageID:any) => {
        let path = process.env.PUBLIC_URL + `/img/asset/${carID}/gallery${imageID}.jpg`;
        console.log(path);
        return path;
    }

    const thumbnailImages = carImages.slice(0,4).map((id:any) => {
        return (
            <ImageSelectorThumbnail src={findImage(carInfo.id,id)} border={id == imageId ? true : false} onClick={()=> setImageId(id)} />
        )
    });


    return (
        <MainContainer>
            {isloading && (
                <>

                    <Row justify="space-between">
                        <Col lg={20} md={20} sm={20} xs={20}>
                            <MainImageHolder>
                                <MainImage src={findImage(carInfo.id,imageId)} />
                            </MainImageHolder>
                        </Col>
                        <Col lg={4} md={4} sm={4} xs={4}>
                            <ImageSelector>
                                <ImageSelectorArrow>
                                    <UpCircleFilled style={{ fontSize: '20px', color: '#f0da13' }}/>
                                </ImageSelectorArrow>

                                {thumbnailImages}

                                <ImageSelectorArrow>
                                    <DownCircleFilled style={{ fontSize: '20px', color: '#f0da13' }}/>
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