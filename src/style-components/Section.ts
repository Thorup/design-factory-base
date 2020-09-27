import styled, { css } from "styled-components";
import { IThemeGlobal } from "../style-themes";

export interface IStyledSection {
  theme: IThemeGlobal;
}

const ConstraintsGlobal = css`
  font-family: ${(props: IStyledSection) =>
    props.theme.globalStyles.fontFamily};
  color: ${(props: IStyledSection) =>
    props.theme.globalStyles.secondary.color.darkFour};
`;

export const Section = styled.section`
  ${ConstraintsGlobal};
  font-size: 14px;
  line-height: 24px;
  padding: 48px 20px;
  margin: 0 auto;
  max-width: 600px;
`;
