import { ITheme } from './ITheme';
import { alertColors, infoColors, primaryColors, secondaryColors, successColors } from './theme-colors';
import { buttonStyles, paragraphStyles } from './theme-styles';
import {
  ThemeButtonProps,
  ThemeCategoryProps,
  ThemeGlobalProps,
  ThemeParagraphProps
} from './ThemeProps';

export const defaultTheme: ITheme = {
  [ThemeGlobalProps.GLOBALSTYLES]: {
    [ThemeCategoryProps.PRIMARY]: {
      [ThemeCategoryProps.COLOR]: primaryColors
    },
    [ThemeCategoryProps.SECONDARY]: {
      [ThemeCategoryProps.COLOR]: secondaryColors
    },
    [ThemeCategoryProps.SUCCESS]: {
      [ThemeCategoryProps.COLOR]: successColors
    },
    [ThemeCategoryProps.ALERT]: {
      [ThemeCategoryProps.COLOR]: alertColors
    },
    [ThemeCategoryProps.INFO]: {
      [ThemeCategoryProps.COLOR]: infoColors
    }
  },
  [ThemeButtonProps.BUTTONSTYLES]: buttonStyles,
  [ThemeParagraphProps.PARAGRAPHSTYLES]: paragraphStyles
};
