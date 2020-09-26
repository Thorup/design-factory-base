import styled, { css } from 'styled-components';
import { IThemeButton, IThemeGlobal } from '../style-themes';

export interface IStyledButton {
  theme: IThemeButton & IThemeGlobal;
  type: ButtonType;
  size: ButtonSize;
}

export enum ButtonType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  OUTLINE = 'outline',
  SUCCESS = 'success',
  ALERT = 'alert',
  INFO = 'info'
}

export enum ButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large'
}

const ButtonPrimary = css`
  color: ${(props: IStyledButton) => props.theme.buttonStyles.contentColor};
  background-color: ${(props: IStyledButton) =>
    props.theme.globalStyles.primary.color.default};
`;

const ButtonSecondary = css`
  color: ${(props: IStyledButton) => props.theme.buttonStyles.contentColor};
  background-color: ${(props: IStyledButton) =>
    props.theme.globalStyles.secondary.color.default};
`;

const ButtonOutline = css`
  color: rgb(0, 0, 0);
  background-color: transparent;
`;

const ButtonSuccess = css`
  color: ${(props: IStyledButton) => props.theme.buttonStyles.contentColor};
  background-color: ${(props: IStyledButton) =>
    props.theme.globalStyles.success.color.default};
`;

const ButtonAlert = css`
  color: ${(props: IStyledButton) => props.theme.buttonStyles.contentColor};
  background-color: ${(props: IStyledButton) =>
    props.theme.globalStyles.alert.color.default};
`;

const ButtonInfo = css`
  color: ${(props: IStyledButton) => props.theme.buttonStyles.contentColor};
  background-color: ${(props: IStyledButton) =>
    props.theme.globalStyles.info.color.default};
`;

const ButtonSmall = css`
  font-size: 12px;
  padding: 10px 16px;
`;

const ButtonMedium = css`
  font-size: 14px;
  padding: 11px 20px;
`;

const ButtonLarge = css`
  font-size: 16px;
  padding: 12px 24px;
`;

const ButtonConstraints = css`
  display: inline-block;
`;

export const Button = styled.button<IStyledButton>`
  ${ButtonConstraints};
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
        return ButtonSmall;
      }
      case ButtonSize.MEDIUM: {
        return ButtonMedium;
      }
      case ButtonSize.LARGE: {
        return ButtonLarge;
      }
      default: {
        return ButtonMedium;
      }
    }
  }};
  ${(props: IStyledButton) => {
    switch (props.type) {
      case ButtonType.PRIMARY: {
        return ButtonPrimary;
      }
      case ButtonType.SECONDARY: {
        return ButtonSecondary;
      }
      case ButtonType.OUTLINE: {
        return ButtonOutline;
      }
      case ButtonType.SUCCESS: {
        return ButtonSuccess;
      }
      case ButtonType.ALERT: {
        return ButtonAlert;
      }
      case ButtonType.INFO: {
        return ButtonInfo;
      }
      default: {
        return ButtonOutline;
      }
    }
  }};
`;
