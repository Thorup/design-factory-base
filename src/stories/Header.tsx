import React from 'react';

import { Button } from './Button';
import * as S from '../style-components';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../style-themes';

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
  onCreateAccount
}) => (
  <ThemeProvider theme={defaultTheme}>
    <header>
      <S.Div type={S.DivType.TRANSPARENT}>
        <div>
          <S.Svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <path
                d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
                fill="#FFF"
              />
              <path
                d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
                fill="#555AB9"
              />
              <path
                d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
                fill="#91BAF8"
              />
            </g>
          </S.Svg>
          <S.H1>Acme</S.H1>
        </div>
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
