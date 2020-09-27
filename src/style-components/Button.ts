import styled, { css } from "styled-components";
import { IThemeButton, IThemeGlobal } from "../style-themes";

export enum ButtonType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  OUTLINE = "outline",
  SUCCESS = "success",
  ALERT = "alert",
  INFO = "info",
}

export enum ButtonSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

export interface IStyledButton {
  theme: IThemeButton & IThemeGlobal;
  type: ButtonType;
  size: ButtonSize;
}

const ConstraintsPrimary = css`
  color: ${(props: IStyledButton) => props.theme.buttonStyles.contentColor};
  background-color: ${(props: IStyledButton) =>
    props.theme.globalStyles.primary.color.default};
  &:hover {
    background-color: ${(props: IStyledButton) =>
      props.theme.globalStyles.primary.color.darkThree};
  }
  &:focus {
    background-color: ${(props: IStyledButton) =>
      props.theme.globalStyles.primary.color.darkThree};
  }
`;

const ConstraintsSecondary = css`
  color: ${(props: IStyledButton) => props.theme.buttonStyles.contentColor};
  background-color: ${(props: IStyledButton) =>
    props.theme.globalStyles.secondary.color.default};
  &:hover {
    background-color: ${(props: IStyledButton) =>
      props.theme.globalStyles.secondary.color.darkThree};
  }
  &:focus {
    background-color: ${(props: IStyledButton) =>
      props.theme.globalStyles.secondary.color.darkThree};
  }
`;

const ConstraintsOutline = css`
  color: rgb(0, 0, 0);
  background-color: initial;
  transition-duration: 0s;
  &:hover {
    box-shadow: 0px 2px 4px;
  }
  &:focus {
    transition-duration: 0s;
    box-shadow: 0px 1px 2px;
  }
`;

const ConstraintsSuccess = css`
  color: ${(props: IStyledButton) => props.theme.buttonStyles.contentColor};
  background-color: ${(props: IStyledButton) =>
    props.theme.globalStyles.success.color.default};
  &:hover {
    background-color: ${(props: IStyledButton) =>
      props.theme.globalStyles.success.color.darkThree};
  }
  &:focus {
    background-color: ${(props: IStyledButton) =>
      props.theme.globalStyles.success.color.darkThree};
  }
`;

const ConstraintsAlert = css`
  color: ${(props: IStyledButton) => props.theme.buttonStyles.contentColor};
  background-color: ${(props: IStyledButton) =>
    props.theme.globalStyles.alert.color.default};
  &:hover {
    background-color: ${(props: IStyledButton) =>
      props.theme.globalStyles.alert.color.darkThree};
  }
  &:focus {
    background-color: ${(props: IStyledButton) =>
      props.theme.globalStyles.alert.color.darkThree};
  }
`;

const ConstraintsInfo = css`
  color: ${(props: IStyledButton) => props.theme.buttonStyles.contentColor};
  background-color: ${(props: IStyledButton) =>
    props.theme.globalStyles.info.color.default};
  &:hover {
    background-color: ${(props: IStyledButton) =>
      props.theme.globalStyles.info.color.darkThree};
  }
  &:focus {
    background-color: ${(props: IStyledButton) =>
      props.theme.globalStyles.info.color.darkThree};
  }
`;

const ConstraintsSmall = css`
  font-size: 12px;
  padding: 10px 16px;
`;

const ConstraintsMedium = css`
  font-size: 14px;
  padding: 11px 20px;
`;

const ConstraintsLarge = css`
  font-size: 16px;
  padding: 12px 24px;
`;

const ConstraintsGlobal = css`
  display: inline-block;
  transition-duration: 0.5s;
  outline: none;
`;

export const Button = styled.button<IStyledButton>`
  ${ConstraintsGlobal}
  font-family: ${(props: IStyledButton) => props.theme.globalStyles.fontFamily};
  font-weight: ${(props: IStyledButton) => props.theme.buttonStyles.fontWeight};
  border: ${(props: IStyledButton) => props.theme.buttonStyles.border};
  border-radius: ${(props: IStyledButton) =>
    props.theme.buttonStyles.borderRadius};
  cursor: ${(props: IStyledButton) => props.theme.buttonStyles.cursor};
  line-height: ${(props: IStyledButton) => props.theme.buttonStyles.lineHeight};
  ${(props: IStyledButton) => {
    switch (props.size) {
      case ButtonSize.SMALL: {
        return ConstraintsSmall;
      }
      case ButtonSize.MEDIUM: {
        return ConstraintsMedium;
      }
      case ButtonSize.LARGE: {
        return ConstraintsLarge;
      }
      default: {
        return ConstraintsMedium;
      }
    }
  }};
  ${(props: IStyledButton) => {
    switch (props.type) {
      case ButtonType.PRIMARY: {
        return ConstraintsPrimary;
      }
      case ButtonType.SECONDARY: {
        return ConstraintsSecondary;
      }
      case ButtonType.OUTLINE: {
        return ConstraintsOutline;
      }
      case ButtonType.SUCCESS: {
        return ConstraintsSuccess;
      }
      case ButtonType.ALERT: {
        return ConstraintsAlert;
      }
      case ButtonType.INFO: {
        return ConstraintsInfo;
      }
      default: {
        return ConstraintsOutline;
      }
    }
  }};
`;
