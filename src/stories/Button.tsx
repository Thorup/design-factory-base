import React from 'react';
import { ThemeProvider } from 'styled-components';
import * as S from '../style-components';
import { defaultTheme } from '../style-themes';

export interface IButton {
  primary?: boolean;
  size?: S.ButtonSize;
  /**
   * Button contents
   */
  label?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
* Primary UI component for user interaction
*/
export const Button: React.FC<IButton> = ({
primary = false,
size = S.ButtonSize.MEDIUM,
label,
...props
}) => {
return (
  <ThemeProvider theme={defaultTheme}>
    <S.Button
      primary={primary}
      size={size}
      {...props}
    >
      {label}
    </S.Button>
  </ThemeProvider>
);
};