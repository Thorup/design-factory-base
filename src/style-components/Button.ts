import styled, { css } from 'styled-components';
import { IThemeButton, ThemeButtonProps } from '../style-themes';

export interface IButton {
    theme: IThemeButton;
    primary: boolean;
    size: ButtonSize;
}

export enum ButtonSize {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large'
}

const ButtonPrimary = css`
    color: ${(props: IButton) => props.theme[ThemeButtonProps.BUTTONSTYLES][ThemeButtonProps.BUTTONPRIMARY][ThemeButtonProps.COLOR]};
    background-color: ${(props: IButton) => props.theme[ThemeButtonProps.BUTTONSTYLES][ThemeButtonProps.BUTTONPRIMARY][ThemeButtonProps.BACKGROUNDCOLOR]};
`

const ButtonSecondary = css`
    color: ${(props: IButton) => props.theme[ThemeButtonProps.BUTTONSTYLES][ThemeButtonProps.BUTTONSECONDARY][ThemeButtonProps.COLOR]};
    background-color: ${(props: IButton) => props.theme[ThemeButtonProps.BUTTONSTYLES][ThemeButtonProps.BUTTONSECONDARY][ThemeButtonProps.BACKGROUNDCOLOR]};
    box-shadow: ${(props: IButton) => props.theme[ThemeButtonProps.BUTTONSTYLES][ThemeButtonProps.BUTTONSECONDARY][ThemeButtonProps.BOXSHADOW]};
`

const ButtonSmall = css`
    font-size: 12px;
    padding: 10px 16px;
`

const ButtonMedium = css`
    font-size: 14px;
    padding: 11px 20px;
`

const ButtonLarge = css`
    font-size: 16px;
    padding: 12px 24px;
`

export const Button = styled.button<IButton>`
    font-family: ${(props: IButton) => props.theme[ThemeButtonProps.BUTTONSTYLES][ThemeButtonProps.FONTFAMILY]};
    font-weight: ${(props: IButton) => props.theme[ThemeButtonProps.BUTTONSTYLES][ThemeButtonProps.FONTWEIGHT]};
    border: ${(props: IButton) => props.theme[ThemeButtonProps.BUTTONSTYLES][ThemeButtonProps.BORDER]};
    border-radius: ${(props: IButton) => props.theme[ThemeButtonProps.BUTTONSTYLES][ThemeButtonProps.BORDERRADIUS]};
    cursor: ${(props: IButton) => props.theme[ThemeButtonProps.BUTTONSTYLES][ThemeButtonProps.CURSOR]};
    display: inline-block;
    line-height: ${(props: IButton) => props.theme[ThemeButtonProps.BUTTONSTYLES][ThemeButtonProps.LINEHEIGHT]};
    ${(props: IButton) => 
        { switch(props.size) {
                case ButtonSize.SMALL:  {
                    return ButtonSmall;
                }
                case ButtonSize.MEDIUM: {
                    return ButtonMedium;
                }
                case ButtonSize.LARGE: {
                    return ButtonLarge
                }
                default: {
                    return ButtonMedium;
                }
            }
        }
    };
    ${(props: IButton) => props.primary ? ButtonPrimary : ButtonSecondary};
`;