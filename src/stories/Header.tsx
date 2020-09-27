import React from "react";

import { Button } from "./Button";
import * as S from "../style-components";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../style-themes";
import { Logo } from "./Logo";

export interface HeaderProps {
  user?: {};
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}) => (
  <ThemeProvider theme={defaultTheme}>
    <header>
      <S.Div type={S.DivType.TRANSPARENTCONTAINER}>
        <Logo label={"Logo"} />
        <div>
          {user ? (
            <Button
              size={S.ButtonSize.SMALL}
              onClick={onLogout}
              label="Log out"
            />
          ) : (
            <>
              <Button
                size={S.ButtonSize.SMALL}
                onClick={onLogin}
                label="Log in"
              />
              <Button
                type={S.ButtonType.PRIMARY}
                size={S.ButtonSize.SMALL}
                onClick={onCreateAccount}
                label="Sign up"
              />
            </>
          )}
        </div>
      </S.Div>
    </header>
  </ThemeProvider>
);
