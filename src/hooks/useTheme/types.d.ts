/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-shadow */
// eslint-disable-next-line unused-imports/no-unused-imports
import { DefaultTheme } from 'styled-components/native';

type ColorType = {
  color: string;
  contrast: string;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
      default: string;
      title: string;
    };
    colors: {
      primary: ColorType;
      secondary: ColorType;

      // Auxiliary Colors
      blue01: ColorType;
      blue02: ColorType;
      blue03: ColorType;
      orange01: ColorType;
      wine01: ColorType;
      pink01: ColorType;

      white: string;
      black: strig;

      // Texts
      title: string;
      texts: string;

      border: string;

      // Alerts
      confirmation: ColorType;
      danger: ColorType;
      information: ColorType;
      warning: ColorType;

      // Backgrounds
      light: ColorType;
      medium: ColorType;
      dark: ColorType;
      extraDarkVariation01: ColorType;
      extraDarkVariation02: ColorType;
    };
  }
}
