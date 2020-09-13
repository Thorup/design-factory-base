import React from 'react';
import * as S from '../style-components';

export interface IButton extends S.IButton  {
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
backgroundColor,
label,
...props
}) => {
return (
  <S.Button
    primary={primary}
    size={size}
    backgroundColor={backgroundColor}
    {...props}
  >
    {label}
  </S.Button>
);
};