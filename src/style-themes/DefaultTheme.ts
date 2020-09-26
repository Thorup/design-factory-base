import { ITheme } from './ITheme';
import {
  ThemeButtonProps,
  ThemeCategoryProps,
  ThemeColorProps,
  ThemeDivProps,
  ThemeGlobalProps,
  ThemeParagraphProps
} from './ThemeProps';

export const defaultTheme: ITheme = {
  [ThemeGlobalProps.GLOBALSTYLES]: {
    [ThemeGlobalProps.FONTFAMILY]:
      '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    [ThemeCategoryProps.PRIMARY]: {
      [ThemeCategoryProps.COLOR]: {
        [ThemeColorProps.DEFAULT]: 'rgb(0, 150, 136)',
        [ThemeColorProps.DARKONE]: 'rgb(0, 133, 120)',
        [ThemeColorProps.DARKTWO]: 'rgb(0, 118, 106)',
        [ThemeColorProps.DARKTHREE]: 'rgb(0, 104, 93)',
        [ThemeColorProps.DARKFOUR]: 'rgb(0, 89, 80)',
        [ThemeColorProps.DARKFIVE]: 'rgb(0, 74, 67)',
        [ThemeColorProps.LIGHTONE]: 'rgb(0, 220, 198)',
        [ThemeColorProps.LIGHTTWO]: 'rgb(38, 255, 233)',
        [ThemeColorProps.LIGHTTHREE]: 'rgb(110, 255, 241)',
        [ThemeColorProps.LIGHTFOUR]: 'rgb(183, 255, 248)',
        [ThemeColorProps.LIGHTFIVE]: 'rgb(233, 255, 253)'
      }
    },
    [ThemeCategoryProps.SECONDARY]: {
      [ThemeCategoryProps.COLOR]: {
        [ThemeColorProps.DEFAULT]: 'rgb(97, 97, 97)',
        [ThemeColorProps.DARKONE]: 'rgb(87, 87, 87)',
        [ThemeColorProps.DARKTWO]: 'rgb(78, 78, 78)',
        [ThemeColorProps.DARKTHREE]: 'rgb(68, 68, 68)',
        [ThemeColorProps.DARKFOUR]: 'rgb(58, 58, 58)',
        [ThemeColorProps.DARKFIVE]: 'rgb(48, 48, 48)',
        [ThemeColorProps.LIGHTONE]: 'rgb(129, 129, 129)',
        [ThemeColorProps.LIGHTTWO]: 'rgb(160, 160, 160)',
        [ThemeColorProps.LIGHTTHREE]: 'rgb(192, 192, 192)',
        [ThemeColorProps.LIGHTFOUR]: 'rgb(223, 223, 223)',
        [ThemeColorProps.LIGHTFIVE]: 'rgb(246, 246, 246)'
      }
    },
    [ThemeCategoryProps.SUCCESS]: {
      [ThemeCategoryProps.COLOR]: {
        [ThemeColorProps.DEFAULT]: 'rgb(76, 175, 80)',
        [ThemeColorProps.DARKONE]: 'rgb(69, 156, 72)',
        [ThemeColorProps.DARKTWO]: 'rgb(61, 139, 64)',
        [ThemeColorProps.DARKTHREE]: 'rgb(53, 122, 56)',
        [ThemeColorProps.DARKFOUR]: 'rgb(46, 104, 48)',
        [ThemeColorProps.DARKFIVE]: 'rgb(38, 87, 40)',
        [ThemeColorProps.LIGHTONE]: 'rgb(110, 192, 113)',
        [ThemeColorProps.LIGHTTWO]: 'rgb(147, 207, 149)',
        [ThemeColorProps.LIGHTTHREE]: 'rgb(183, 223, 184)',
        [ThemeColorProps.LIGHTFOUR]: 'rgb(219, 239, 220)',
        [ThemeColorProps.LIGHTFIVE]: 'rgb(244, 250, 244)'
      }
    },
    [ThemeCategoryProps.ALERT]: {
      [ThemeCategoryProps.COLOR]: {
        [ThemeColorProps.DEFAULT]: 'rgb(244, 67, 54)',
        [ThemeColorProps.DARKONE]: 'rgb(243, 38, 23)',
        [ThemeColorProps.DARKTWO]: 'rgb(225, 26, 12)',
        [ThemeColorProps.DARKTHREE]: 'rgb(197, 23, 10)',
        [ThemeColorProps.DARKFOUR]: 'rgb(169, 20, 9)',
        [ThemeColorProps.DARKFIVE]: 'rgb(141, 16, 7)',
        [ThemeColorProps.LIGHTONE]: 'rgb(246, 102, 92)',
        [ThemeColorProps.LIGHTTWO]: 'rgb(249, 141, 133)',
        [ThemeColorProps.LIGHTTHREE]: 'rgb(251, 179, 174)',
        [ThemeColorProps.LIGHTFOUR]: 'rgb(253, 217, 214)',
        [ThemeColorProps.LIGHTFIVE]: 'rgb(254, 244, 243)'
      }
    },
    [ThemeCategoryProps.INFO]: {
      [ThemeCategoryProps.COLOR]: {
        [ThemeColorProps.DEFAULT]: 'rgb(255, 152, 0)',
        [ThemeColorProps.DARKONE]: 'rgb(230, 138, 0)',
        [ThemeColorProps.DARKTWO]: 'rgb(204, 122, 0)',
        [ThemeColorProps.DARKTHREE]: 'rgb(179, 107, 0)',
        [ThemeColorProps.DARKFOUR]: 'rgb(153, 92, 0)',
        [ThemeColorProps.DARKFIVE]: 'rgb(128, 77, 0)',
        [ThemeColorProps.LIGHTONE]: 'rgb(255, 173, 51)',
        [ThemeColorProps.LIGHTTWO]: 'rgb(255, 194, 102)',
        [ThemeColorProps.LIGHTTHREE]: 'rgb(255, 214, 153)',
        [ThemeColorProps.LIGHTFOUR]: 'rgb(255, 235, 204)',
        [ThemeColorProps.LIGHTFIVE]: 'rgb(255, 249, 240)'
      }
    }
  },
  [ThemeButtonProps.BUTTONSTYLES]: {
    [ThemeButtonProps.FONTWEIGHT]: '700',
    [ThemeButtonProps.LINEHEIGHT]: '1',
    [ThemeButtonProps.BORDER]: '1px solid',
    [ThemeButtonProps.BORDERRADIUS]: '10px',
    [ThemeButtonProps.CURSOR]: 'pointer',
    [ThemeButtonProps.CONTENTCOLOR]: 'rgb(255, 255, 255)'
  },
  [ThemeParagraphProps.PARAGRAPHSTYLES]: {
    [ThemeParagraphProps.FONTWEIGHT]: 'inherit',
    [ThemeParagraphProps.COLOR]: 'inherit',
    [ThemeParagraphProps.MARGIN]: '1em 0'
  },
  [ThemeDivProps.DIVSTYLES]: {
    [ThemeDivProps.DIVTEXTAREA]: {
      [ThemeDivProps.BACKGROUNDCOLOR]: 'white'
    }
  }
};
