import React from "react";

import { Button } from "./Button";
import * as S from "../style-components";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../style-themes";
import { Logo } from "./Logo";
import { IconName } from "../style-components";

export interface IconProps {
  iconName: S.IconName;
  width?: string;
  height?: string;
  viewBox?: string;
  onClick: () => void;
}

export const Icon: React.FC<IconProps> = ({
  width = "10",
  height = "10",
  viewBox = "0 0 12 12",
  iconName,
  ...props
}) => {
  switch (iconName) {
    case IconName.LOGINICON:
      return <S.LoginIcon/>;
    default:
      return <S.LoginIcon/>;
  }
  return (
  <ThemeProvider theme={defaultTheme}>
    <S.Div>
      <S.Svg width={width} height={height} viewBox={viewBox}></S.Svg>
    </S.Div>
  </ThemeProvider>
)};
