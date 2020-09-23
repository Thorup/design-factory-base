import styled from 'styled-components';
import { IThemeParagraph } from '../style-themes';

export interface IParagraph {
    theme: IThemeParagraph
}

export const P = styled.p`
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    margin: 1em 0;
`