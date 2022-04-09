import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  font: {
    default: `'Roboto', sans-serif`,
    title: `'Montserrat', sans-serif`,
  },
  colors: {
    // Colors
    primary: {
      color: '#377CB5',
      contrast: '#FFFFFF',
    },
    secondary: {
      color: '#071B45',
      contrast: '#FFFFFF',
    },

    // Auxiliary Colors
    blue01: {
      color: '#004F71',
      contrast: '#FFFFFF',
    },
    blue02: {
      color: '#00A3DE',
      contrast: '#FFFFFF',
    },
    blue03: {
      color: '#28AECA',
      contrast: '#FFFFFF',
    },
    orange01: {
      color: '#ED484F',
      contrast: '#FFFFFF',
    },
    wine01: {
      color: '#901F49',
      contrast: '#FFFFFF',
    },
    pink01: {
      color: '#E3467D',
      contrast: '#FFFFFF',
    },

    white: '#FFFFFF',
    black: '#000000',

    // Texts
    title: '#000000',
    texts: '#000000',

    border: '#CBC8C4',

    // Alerts
    confirmation: {
      color: '#29A97E',
      contrast: '#FFFFFF',
    },
    danger: {
      color: '#E91E54',
      contrast: '#FFFFFF',
    },
    information: {
      color: '#007bff',
      contrast: '#FFFFFF',
    },
    warning: {
      color: '#FD9827',
      contrast: '#FFFFFF',
    },

    // Backgrounds
    light: {
      color: '#EEEDEB',
      contrast: '#071B45',
    },
    medium: {
      color: '#DCDAD8',
      contrast: '#071B45',
    },
    dark: {
      color: '#CBC8C4',
      contrast: '#FFFFFF',
    },
    extraDarkVariation01: {
      color: '#A8A39D',
      contrast: '#FFFFFF',
    },
    extraDarkVariation02: {
      color: '#696969',
      contrast: '#FFFFFF',
    },
  },
};

export default theme;
