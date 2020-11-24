import {
  ThemeButtonProps,
  ThemeCategoryProps,
  ThemeColorProps,
  ThemeGlobalProps,
  ThemeParagraphProps
} from './ThemeProps';
export interface IThemeColor {
  [ThemeColorProps.DEFAULT]: string;
  [ThemeColorProps.DARKONE]: string;
  [ThemeColorProps.DARKTWO]: string;
  [ThemeColorProps.DARKTHREE]: string;
  [ThemeColorProps.DARKFOUR]: string;
  [ThemeColorProps.DARKFIVE]: string;
  [ThemeColorProps.LIGHTONE]: string;
  [ThemeColorProps.LIGHTTWO]: string;
  [ThemeColorProps.LIGHTTHREE]: string;
  [ThemeColorProps.LIGHTFOUR]: string;
  [ThemeColorProps.LIGHTFIVE]: string;
}

export interface IThemeGlobal {
  [ThemeGlobalProps.GLOBALSTYLES]: {
    [ThemeCategoryProps.PRIMARY]: {
      [ThemeCategoryProps.COLOR]: IThemeColor;
    };
    [ThemeCategoryProps.SECONDARY]: {
      [ThemeCategoryProps.COLOR]: IThemeColor;
    };
    [ThemeCategoryProps.SUCCESS]: {
      [ThemeCategoryProps.COLOR]: IThemeColor;
    };
    [ThemeCategoryProps.ALERT]: {
      [ThemeCategoryProps.COLOR]: IThemeColor;
    };
    [ThemeCategoryProps.INFO]: {
      [ThemeCategoryProps.COLOR]: IThemeColor;
    };
  };
}

export interface IThemeButton {
  [ThemeButtonProps.BUTTONSTYLES]: {
    [ThemeButtonProps.FONTWEIGHT]: string;
    [ThemeButtonProps.LINEHEIGHT]: string;
    [ThemeButtonProps.BORDER]: string;
    [ThemeButtonProps.BORDERRADIUS]: string;
    [ThemeButtonProps.CURSOR]: string;
    [ThemeButtonProps.CONTENTCOLOR]: string;
  };
}

export interface IThemeParagraph {
  [ThemeParagraphProps.PARAGRAPHSTYLES]: {
    [ThemeParagraphProps.FONTFAMILY]: string;
    [ThemeParagraphProps.FONTWEIGHT]: string;
    [ThemeParagraphProps.COLOR]: string;
    [ThemeParagraphProps.MARGIN]: string;
  };
}

export type ITheme = IThemeGlobal & IThemeButton & IThemeParagraph;
