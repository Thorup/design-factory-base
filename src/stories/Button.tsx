import React from "react";
import { ThemeProvider } from "styled-components";
import * as S from "../style-components";
import { DivType } from "../style-components";
import { IconName } from "../style-components/Icon";
import { defaultTheme } from "../style-themes";

export interface IButton {
  type?: S.ButtonType;
  size?: S.ButtonSize;
  icon?: IconName;
  label?: string;
  onClick: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<IButton> = ({
  type = S.ButtonType.OUTLINE,
  size = S.ButtonSize.MEDIUM,
  icon,
  label,
  ...props
}) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      {
        // TODO: Fix warning: "No overload matches this call."
        // This warning does not break the project, but remains a possible problem until investigated and fixed.
      }
      <S.Button type={type} size={size} {...props}>
        <S.Div type={DivType.TRANSPARENTCONTAINER}>
          {icon ? <Icon iconType /> : null}
        </S.Div>
      </S.Button>
    </ThemeProvider>
  );
};
