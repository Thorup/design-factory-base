import React from 'react';
import { ThemeProvider } from 'styled-components';
import * as S from '../style-components';
import { defaultTheme } from '../style-themes';

export interface IButton {
  type?: S.ButtonType;
  size?: S.ButtonSize;
  label: string;
  onClick: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<IButton> = ({
  type = S.ButtonType.OUTLINE,
  size = S.ButtonSize.MEDIUM,
  label,
  ...props
}) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      {
        // TODO: Fix warning: "No overload matches this call."
        // This warning does not break the project, but remains a possible problem until fixed.
      }
      <S.Button type={type} size={size} {...props}>
        {label}
      </S.Button>
    </ThemeProvider>
  );
};
