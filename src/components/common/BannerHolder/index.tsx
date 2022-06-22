import React from 'react';

import { StyledBanner } from "./styles";

export const BannerHolder = ({
    height,
    width,
    background,
    children
  }:any) => (
    <StyledBanner height={height} width={width} background={background}>
      {children}
    </StyledBanner>
  );
  