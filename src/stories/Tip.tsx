import React from "react";
import { ThemeProvider } from "styled-components";
import * as S from "../style-components";
import { defaultTheme } from "../style-themes";

export interface ITip {
  label: string;
}

/**
 * Primary UI component for user interaction
 */
export const Tip: React.FC<ITip> = ({ label }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <S.Span type={S.SpanType.TIP}>{label}</S.Span>
    </ThemeProvider>
  );
};
