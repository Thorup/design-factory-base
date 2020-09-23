import { ITheme } from "./ITheme";
import { ThemeButtonProps, ThemeDivProps, ThemeParagraphProps } from "./ThemeProps";

export const defaultTheme: ITheme = {
    [ThemeButtonProps.BUTTONSTYLES]: {
        [ThemeButtonProps.FONTFAMILY]: '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
        [ThemeButtonProps.FONTWEIGHT]: '700',
        [ThemeButtonProps.LINEHEIGHT]: '1',
        [ThemeButtonProps.BORDER]: '0',
        [ThemeButtonProps.BORDERRADIUS]: '3em',
        [ThemeButtonProps.CURSOR]: 'pointer',
        [ThemeButtonProps.BUTTONPRIMARY]: {
            [ThemeButtonProps.COLOR]: '#333',
            [ThemeButtonProps.BACKGROUNDCOLOR]: 'rgb(150, 150, 150)',
            [ThemeButtonProps.BOXSHADOW]: 'none'
        },
        [ThemeButtonProps.BUTTONSECONDARY]: {
            [ThemeButtonProps.COLOR]: 'none',
            [ThemeButtonProps.BACKGROUNDCOLOR]: 'transparent',
            [ThemeButtonProps.BOXSHADOW]: 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset'
        }
    },
    [ThemeParagraphProps.PARAGRAPHSTYLES]: {
        [ThemeParagraphProps.FONTFAMILY]: 'inherit',
        [ThemeParagraphProps.FONTWEIGHT]: 'inherit',
        [ThemeParagraphProps.COLOR]: 'inherit',
        [ThemeParagraphProps.MARGIN]: '1em 0'
    },
    [ThemeDivProps.DIVSTYLES]: {
        [ThemeDivProps.DIVTEXTAREA]: {
            [ThemeDivProps.BACKGROUNDCOLOR]: 'white'
        }
    }
}