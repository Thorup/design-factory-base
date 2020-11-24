import styled, { css } from 'styled-components';
import { IThemeGlobal } from '../style-themes';
import { Login } from '@styled-icons/boxicons-regular/LogIn';

export enum IconName {
    LOGINICON = 'loginIcon'
}

export interface IStyledSvg {
  theme: IThemeGlobal;
  width: string;
  height: string;
}

const ConstraintsGlobal = css`
  width: ${(props: IStyledSvg): string => props.width};
  height: ${(props: IStyledSvg): string => props.height};
`;

export const Svg = styled.svg`
  display: inline-block;
  vertical-align: top;
`;

export const LoginIcon = styled(Login)``;