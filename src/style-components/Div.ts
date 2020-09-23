import styled, { css } from 'styled-components';
import { IThemeDiv, ThemeDivProps } from '../style-themes';

export interface IDiv {
    theme: IThemeDiv;
    type: DivType;
}

export enum DivType {
    TRANSPARENT = 'transparent',
    TEXTAREA = 'textarea'
}

const transparent = css`
    background-color: transparent;
`;

const textArea = css`
    background-color: ${(props: IDiv) => props.theme[ThemeDivProps.DIVSTYLES][ThemeDivProps.DIVTEXTAREA][ThemeDivProps.BACKGROUNDCOLOR]};
`;

export const Div = styled.div`
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 15px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    button + button {
        margin-left: 10px;
    }
    ${
        (props: IDiv) =>
            { switch(props.type) {
                    case DivType.TEXTAREA:
                        return textArea;
                    case DivType.TRANSPARENT:
                        return transparent;
                    default:
                        return transparent;
                }
            }
    }
`;

export const DivTip = styled.div`
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
`