import { DefaultTheme } from 'styled-components';

import { ITheme, AvailableThemes } from './types';

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

export const getTheme = (key: AvailableThemes, theme: DefaultTheme): ITheme => {
  const themes = {
    primary: {
      background: theme.colors.primary.color,
      borderColor: theme.colors.primary.color,
      front: theme.colors.primary.contrast,
    },
    secondary: {
      background: theme.colors.secondary.color,
      borderColor: theme.colors.secondary.color,
      front: theme.colors.secondary.contrast,
    },

    blue01: {
      background: theme.colors.blue01.color,
      borderColor: theme.colors.blue01.color,
      front: theme.colors.blue01.contrast,
    },
    blue02: {
      background: theme.colors.blue02.color,
      borderColor: theme.colors.blue02.color,
      front: theme.colors.blue02.contrast,
    },
    blue03: {
      background: theme.colors.blue03.color,
      borderColor: theme.colors.blue03.color,
      front: theme.colors.blue03.contrast,
    },
    orange01: {
      background: theme.colors.orange01.color,
      borderColor: theme.colors.orange01.color,
      front: theme.colors.orange01.contrast,
    },
    wine01: {
      background: theme.colors.wine01.color,
      borderColor: theme.colors.wine01.color,
      front: theme.colors.wine01.contrast,
    },
    pink01: {
      background: theme.colors.pink01.color,
      borderColor: theme.colors.pink01.color,
      front: theme.colors.pink01.contrast,
    },

    light: {
      background: theme.colors.light.color,
      borderColor: theme.colors.light.color,
      front: theme.colors.light.contrast,
    },
    medium: {
      background: theme.colors.medium.color,
      borderColor: theme.colors.medium.color,
      front: theme.colors.medium.contrast,
    },
    dark: {
      background: theme.colors.dark.color,
      borderColor: theme.colors.dark.color,
      front: theme.colors.dark.contrast,
    },
    extraDarkVariation01: {
      background: theme.colors.extraDarkVariation01.color,
      borderColor: theme.colors.extraDarkVariation01.color,
      front: theme.colors.extraDarkVariation01.contrast,
    },
    extraDarkVariation02: {
      background: theme.colors.extraDarkVariation02.color,
      borderColor: theme.colors.extraDarkVariation02.color,
      front: theme.colors.extraDarkVariation02.contrast,
    },

    confirmation: {
      background: theme.colors.confirmation.color,
      borderColor: theme.colors.confirmation.color,
      front: theme.colors.confirmation.contrast,
    },
    danger: {
      background: theme.colors.danger.color,
      borderColor: theme.colors.danger.color,
      front: theme.colors.danger.contrast,
    },
    warning: {
      background: theme.colors.warning.color,
      borderColor: theme.colors.warning.color,
      front: theme.colors.warning.contrast,
    },
    information: {
      background: theme.colors.information.color,
      borderColor: theme.colors.information.color,
      front: theme.colors.information.contrast,
    },
    white: {
      background: theme.colors.white,
      borderColor: theme.colors.white,
      front: theme.colors.primary.color,
    },
    'white-bordered': {
      background: theme.colors.white,
      borderColor: theme.colors.medium.color,
      front: theme.colors.dark.color,
    },
  };

  return themes[key];
};
