import styled, { css } from "styled-components";
import { IThemeGlobal } from "../style-themes";

export interface IStyledArticle {
  theme: IThemeGlobal;
}

const ConstraintsGlobal = css``;

export const Article = styled.article<IStyledArticle>`
  ${ConstraintsGlobal}
`;
