import styled, { css } from "styled-components";
import { IThemeGlobal } from "../style-themes";

export interface IStyledHeading {
  theme: IThemeGlobal;
}

const HeadingConstraints = css`
  font-family: ${(props: IStyledHeading) =>
    props.theme.globalStyles.fontFamily};
  font-weight: 900;
  line-height: 1;
  display: inline-block;
  vertical-align: top;
`;

export const H1 = styled.h1`
  ${HeadingConstraints}
  font-size: 20px;
  margin: 6px 0 6px 10px;
`;

export const H2 = styled.h2`
  ${HeadingConstraints}
  font-size: 32px;
  margin: 0 0 4px;
`;
