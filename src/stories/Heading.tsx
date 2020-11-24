import React from "react";
import { ThemeProvider } from "styled-components";
import * as S from "../style-components";
import { defaultTheme } from "../style-themes";

export enum HeadingType {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
}
export interface IHeading {
  type: HeadingType;
  text: string;
}

/**
 * Primary UI component for user interaction
 */
export const Heading: React.FC<IHeading> = ({ type, text }) => {
  const fetchHeading = (type: HeadingType, label: string): JSX.Element => {
    switch (type) {
      case HeadingType.H1:
        return <S.H1>{text}</S.H1>;
      case HeadingType.H2:
        return <S.H2>{text}</S.H2>;
      case HeadingType.H3:
        return <S.H3>{text}</S.H3>;
      default:
        return <S.H2>{text}</S.H2>;
    }
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      {fetchHeading(type, text)}
    </ThemeProvider>
  );
};
