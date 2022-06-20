import { Row } from 'antd';
import React,{ lazy,useEffect,useState } from 'react';
import { withTranslation } from "react-i18next";

import Container from '../../components/common/Container';
import { SvgIcon } from '../../components/common/SvgIcon';

import { Warning,CardSection } from "./styles";

function NotFound({ t }: any) {

  return (
    <Container>
        <CardSection>
                <SvgIcon src={'illustration_404.svg'} width="450px" height="450px"/>
                {/* <Warning>{"Something Wrong happened Page Not Found!"}</Warning>          */}
        </CardSection>     
    </Container>
  );
}

export default withTranslation()(NotFound);
