import React from "react";

import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, Content2Xl, ContentWithVerticalPadding } from "components/misc/Layouts";

import Hero from "components/hero/TwoColumnWithInput.js";

export default function Home () {
    return (
       
        <AnimationRevealPage disabled>
            <Container tw="bg-gray-100 -mx-8 -mt-8 pt-8 px-8">
                <Hero roundedHeaderButton={true} />
            </Container>
        </AnimationRevealPage>

    );
}