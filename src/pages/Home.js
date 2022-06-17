import React from "react";
import tw from "twin.macro";

import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, Content2Xl, ContentWithVerticalPadding } from "components/misc/Layouts";

import Hero from "components/hero/TwoColumnWithVideo.js";
import Hero2 from "components/hero/BackgroundAsImage.js";
import Features from "components/features/ThreeColSimple.js";
import TabGrid from "components/cards/TabCardGrid.js";


import chefIconImageSrc from "images/chef-icon.svg";


export default function Home () {

    const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
    const imageCss = tw`rounded-4xl w-128 h-128`;

    console.log(chefIconImageSrc);
    console.log(process.env.PUBLIC_URL + "/assets/svg/shop-icon.svg");

    const serviceCards = [
        {
          imageSrc: process.env.PUBLIC_URL + "/assets/svg/support-icon.svg" ,
          title: "Sell your car",
          description: "Lorem ipsum donor amet siti ceali placeholder text",
          url: "https://google.com"
        },
        {
          imageSrc: process.env.PUBLIC_URL + "/assets/svg/support-icon.svg",
          title: "Browse Our Stocks",
          description: "Lorem ipsum donor amet siti ceali placeholder text",
          url: "https://timerse.com"
        },
        {
          imageSrc: process.env.PUBLIC_URL + "/assets/svg/support-icon.svg",
          title: "Book Your Service",
          description: "Lorem ipsum donor amet siti ceali placeholder text",
          url: "https://reddit.com"
        }
    ]
    

    return (
       
        <AnimationRevealPage disabled>
            <Container tw="bg-gray-100 -mx-8 -mt-8 pt-8 px-8">
               
                <Hero
                    heading={<>You Can Sell Your Car<HighlightedText>Just One Click!</HighlightedText></>}
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    imageSrc= {process.env.PUBLIC_URL + "/assets/images/banner01.jpg"} 
                    imageCss={imageCss}
                    imageDecoratorBlob={true}
                    primaryButtonText="Order Now"
                    watchVideoButtonText=""
                />

                <Features
                    heading={
                    <>
                        Amazing <HighlightedText>Services.</HighlightedText>
                    </>
                    }
                    cards={serviceCards}
        
                    imageContainerCss={tw`p-2!`}
                    imageCss={tw`w-40! h-40!`}
                />

                <TabGrid
                    heading={
                    <>
                        Checkout <HighlightedText>Our Vehicles</HighlightedText>
                    </>
                    }
                />

            </Container>
        </AnimationRevealPage>

    );
}