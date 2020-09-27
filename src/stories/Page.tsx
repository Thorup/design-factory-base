import React from "react";

import { Header } from "./Header";
import * as S from "../style-components";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../style-themes";

export interface PageProps {
  user?: {};
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Page: React.FC<PageProps> = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}) => (
  <ThemeProvider theme={defaultTheme}>
    <article>
      <Header
        user={user}
        onLogin={onLogin}
        onLogout={onLogout}
        onCreateAccount={onCreateAccount}
      />

      <S.Section>
        <S.H2>Pages in Storybook</S.H2>
        <S.P>
          We recommend building UIs with a{" "}
          <S.Link
            href="https://componentdriven.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>component-driven</strong>
          </S.Link>{" "}
          process starting with atomic components and ending with pages.
        </S.P>
        <S.P>
          Render pages with mock data. This makes it easy to build and review
          page states without needing to navigate to them in your app. Here are
          some handy patterns for managing page data in Storybook:
        </S.P>
        <S.UnorderedList>
          <S.ListItem>
            Use a higher-level connected component. Storybook helps you compose
            such data from the "args" of child component stories
          </S.ListItem>
          <S.ListItem>
            Assemble data in the page component from your services. You can mock
            these services out using Storybook.
          </S.ListItem>
        </S.UnorderedList>
        <S.P>
          Get a guided tutorial on component-driven development at{" "}
          <S.Link
            href="https://www.learnstorybook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Storybook
          </S.Link>
          . Read more in the{" "}
          <S.Link
            href="https://storybook.js.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            docs
          </S.Link>
          .
        </S.P>
        <S.Div type={S.DivType.TIPCONTAINER} className="tip-wrapper">
          <S.Tip className="tip">Tip</S.Tip> Adjust the width of the canvas with
          the{" "}
          <S.Svg
            width="10"
            height="10"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <path
                d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
                id="a"
                fill="#999"
              />
            </g>
          </S.Svg>
          Viewports addon in the toolbar
        </S.Div>
      </S.Section>
    </article>
  </ThemeProvider>
);
