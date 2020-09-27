import styled, { css } from "styled-components";
import { IThemeDiv, IThemeGlobal } from "../style-themes";

export enum DivType {
  TRANSPARENTCONTAINER = "transparentContainer",
  TEXTCONTAINER = "textContainer",
  TIPCONTAINER = "tipContainer",
}

export interface IStyledDiv {
  theme: IThemeDiv & IThemeGlobal;
  type: DivType;
}

const ConstraintsTransparentContainer = css`
  background-color: transparent;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button + button {
    margin-left: 10px;
  }
`;

const ConstraintsTextContainer = css`
  background-color: ${(props: IStyledDiv) =>
    props.theme.globalStyles.primary.color.lightOne};
`;

const ConstraintsTip = css`
  font-size: 13px;
  line-height: 20px;
  margin-top: 40px;
  margin-bottom: 40px;
  svg {
    display: inline-block;
    height: 12px;
    width: 12px;
    margin-right: 4px;
    vertical-align: top;
    margin-top: 3px;
  }
  svg path {
    fill: #1ea7fd;
  }
`;

const ConstraintsGlobal = css``;

export const Div = styled.div`
  ${ConstraintsGlobal}
  ${(props: IStyledDiv) => {
    switch (props.type) {
      case DivType.TRANSPARENTCONTAINER:
        return ConstraintsTransparentContainer;
      case DivType.TEXTCONTAINER:
        return ConstraintsTextContainer;
      case DivType.TIPCONTAINER:
        return ConstraintsTip;
      default:
        return ConstraintsTransparentContainer;
    }
  }};
`;
