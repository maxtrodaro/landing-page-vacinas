import { css, DefaultTheme } from 'styled-components';

const styles = (theme: DefaultTheme): any => css`
  .chakra-popover__popper {
    & > section {
      border-color: ${theme.colors.border};
    }

    button {
      border-width: 0;
      background-color: transparent;
    }

    .chakra-popover__header {
      font-weight: bold;
      font-size: 0.9rem;
      text-align: center;
      color: ${theme.colors.texts};
    }
    .chakra-popover__body {
      font-size: 0.8rem;
      line-height: 1rem;
      color: ${theme.colors.texts};
    }
  }
`;

export default styles;
