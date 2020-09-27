import styled, { css } from "styled-components";
import { IThemeGlobal } from "../style-themes";

export enum SpanType {
  TIP = "tip",
}

export interface IStyledSpan {
  theme: IThemeGlobal;
  type: SpanType;
}

const ConstraintsGlobal = css`
  font-family: ${(props: IStyledSpan) => props.theme.globalStyles.fontFamily};
`;

const Tip = css`
  background: ${(props: IStyledSpan) =>
    props.theme.globalStyles.info.color.darkOne};
  color: rgb(255, 255, 255);
  display: inline-block;
  border-radius: 1em;
  font-size: 11px;
  line-height: 12px;
  font-weight: 700;
  padding: 4px 12px;
  margin-right: 10px;
  vertical-align: top;
`;

export const Span = styled.span`
  ${ConstraintsGlobal}
  ${(props: IStyledSpan) => {
    switch (props.type) {
      case SpanType.TIP:
        return Tip;
      default:
        return Tip;
    }
  }};
`;
