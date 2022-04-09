import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  @media (min-width: 991px) {
    border: 1px solid ${({ theme }) => theme.colors.medium.color};
    border-radius: 6px;
    margin-bottom: 1rem;

    & > div {
      border-width: 0;
      margin: 0;
    }

    .custom-input-container {
      position: relative;

      .error {
        position: absolute;
        bottom: 0;
        right: 1rem;
      }
    }

    .custom-input {
      margin: 0;
    }

    .custom-select__menu-list,
    .custom-select__single-value,
    .custom-select__value-container,
    .custom-select__option,
    .custom-select__control {
      background-color: ${({ theme }) => theme.colors.light.color} !important;
    }

    .custom-select__control {
      border-radius: 0 !important;
      border-color: ${({ theme }) => theme.colors.light.color} !important;
      border-right-color: ${({ theme }) => theme.colors.medium.color} !important;
    }

    .custom-select__option--is-selected {
      color: ${({ theme }) => theme.colors.light.contrast} !important;
    }

    input {
      border-width: 0 !important;
    }
  }

  .error-icon {
    display: none !important;
  }
`;

export default Container;
