import styled, { css } from 'styled-components';

export interface IButton {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: ButtonSize;
}

export enum ButtonSize {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large'
}

const ButtonPrimary = css`
    color: white;
    background-color: #1ea7fd;
`

const ButtonSecondary = css`
    color: #333;
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
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
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    border: 0;
    border-radius: 3em;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
    background-color: ${(props: IButton) => props.backgroundColor ? props.backgroundColor + ' !important' : ''};
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