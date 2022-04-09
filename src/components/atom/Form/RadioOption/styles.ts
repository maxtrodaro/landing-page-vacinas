import { darken } from 'polished';
import styled from 'styled-components';

type ContainerProps = {
  isSmall: boolean;
  colorSchema?: string;
};

export const Container = styled.div<ContainerProps>`
  padding: 0.5rem 0;

  .chakra-radio {
    .chakra-radio__control {
      cursor: pointer;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      height: ${({ isSmall }) => (isSmall ? 1 : 1.5)}rem !important;
      width: ${({ isSmall }) => (isSmall ? 1 : 1.5)}rem !important;

      background: linear-gradient(
        180deg,
        ${({ theme }) => theme.colors.white} 0%,
        ${({ theme }) => darken(0.01, theme.colors.white)} 100%
      );
      border: 1px solid ${({ theme }) => darken(0.1, theme.colors.medium.color)};
      box-sizing: border-box;
      box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);

      &:hover {
        background: linear-gradient(
          180deg,
          ${({ theme }) => theme.colors.white} 0%,
          ${({ theme }) => darken(0.01, theme.colors.white)} 100%
        );
      }

      &:before {
        width: 1rem;
        height: 1rem;
      }
    }

    span[data-checked=''] {
      color: ${({ colorSchema }) => colorSchema || 'unset'};
    }

    .chakra-radio__control[data-checked] {
      border-color: ${({ colorSchema, theme }) => colorSchema || theme.colors.primary.color};

      &:before {
        height: ${({ isSmall }) => (isSmall ? 0.5 : 1)}rem !important;
        width: ${({ isSmall }) => (isSmall ? 0.5 : 1)}rem !important;
        background-color: ${({ colorSchema, theme }) => colorSchema || theme.colors.primary.color};
      }
    }

    .chakra-radio__label {
      cursor: pointer;
      font-size: ${({ isSmall }) => (isSmall ? 0.8 : 1)}rem;
    }
  }
`;
