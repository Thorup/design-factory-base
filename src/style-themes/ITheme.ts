import { ThemeButtonProps, ThemeDivProps, ThemeParagraphProps } from "./ThemeProps";

export interface IThemeButton {
    [ThemeButtonProps.BUTTONSTYLES]: {
        [ThemeButtonProps.FONTFAMILY]: string;
        [ThemeButtonProps.FONTWEIGHT]: string;
        [ThemeButtonProps.LINEHEIGHT]: string;
        [ThemeButtonProps.BORDER]: string;
        [ThemeButtonProps.BORDERRADIUS]: string;
        [ThemeButtonProps.CURSOR]: string;
        [ThemeButtonProps.BUTTONPRIMARY]: {
            [ThemeButtonProps.COLOR]: string;
            [ThemeButtonProps.BACKGROUNDCOLOR]: string;
            [ThemeButtonProps.BOXSHADOW]: string;
        },
        [ThemeButtonProps.BUTTONSECONDARY]: {
            [ThemeButtonProps.COLOR]: string;
            [ThemeButtonProps.BACKGROUNDCOLOR]: string;
            [ThemeButtonProps.BOXSHADOW]: string;
        }
    }
}

export interface IThemeParagraph {
    [ThemeParagraphProps.PARAGRAPHSTYLES]: {
        [ThemeParagraphProps.FONTFAMILY]: string;
        [ThemeParagraphProps.FONTWEIGHT]: string;
        [ThemeParagraphProps.COLOR]: string;
        [ThemeParagraphProps.MARGIN]: string;
    },
}

export interface IThemeDiv {
    [ThemeDivProps.DIVSTYLES]: {
        [ThemeDivProps.DIVTEXTAREA]: {
            [ThemeDivProps.BACKGROUNDCOLOR]: string;
        }
    }
}

export type ITheme = IThemeButton & IThemeParagraph & IThemeDiv