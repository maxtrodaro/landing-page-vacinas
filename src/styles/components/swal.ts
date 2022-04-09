import { css, DefaultTheme } from 'styled-components';

const styles = (theme: DefaultTheme): any => css`
  .swal2-container {
    z-index: 99999 !important;
  }
  .swal2-styled:focus {
    box-shadow: none;
  }

  .swal2-html-container {
    padding-top: 2rem !important;
  }

  .swal2-popup {
    border-radius: 12px !important;
  }

  .swal2-actions {
    padding-bottom: 1rem !important;

    button {
      font-size: 0.9rem !important;
      font-weight: bold;
      padding: 0.7rem 1.5rem;
      border-width: 0;

      border-radius: 10px !important;
      font-weight: 600;
      cursor: pointer;
      transition: 0.3s;
    }

    button.swal2-cancel {
      background: transparent !important;
      color: ${theme.colors.extraDarkVariation02.color};
      border: 1px solid ${theme.colors.extraDarkVariation02.color};
      font-weight: normal;
      text-transform: uppercase;
    }
    button.swal2-confirm {
      background: transparent !important;
      color: ${theme.colors.extraDarkVariation02.color};
      border: 1px solid ${theme.colors.extraDarkVariation02.color};
      font-weight: 700;
      text-transform: uppercase;
    }

    button.error-message-button {
      background: transparent !important;
      color: ${theme.colors.extraDarkVariation02.color};
      border: 1px solid ${theme.colors.extraDarkVariation02.color};
      font-weight: 700;
      text-transform: uppercase;
    }
  }
`;

export default styles;
