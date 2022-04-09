import styled, { css } from 'styled-components';

interface ContainerProps {
  hasBorder: boolean;
  hasError: boolean;
  isSmall: boolean;
}

export const Container = styled.span<ContainerProps>`
  line-height: 0.6rem;
  display: block;
  width: 100%;

  label {
    margin-right: 0.3rem;
    width: 100%;

    ${({ hasBorder }) =>
      hasBorder &&
      css`
        border: 1px solid ${({ theme }) => theme.colors.border};
        padding: 0.4rem;
        border-radius: 3px;
      `}

    svg {
      width: 0.6rem;
    }

    .chakra-checkbox__label {
      font-size: ${({ isSmall }) => (isSmall ? 0.8 : 1)}rem;
      line-height: 1.2rem;
      color: ${({ theme }) => theme.colors.extraDarkVariation01.color};
    }

    .chakra-checkbox__control {
      margin-top: 0.2rem;
      border: 1px solid
        ${({ theme, hasError }) => (hasError ? theme.colors.danger.color : theme.colors.border)} !important;
      background: ${({ theme }) => theme.colors.light.color};
      outline: 0;
      box-shadow: none;
    }
    .chakra-checkbox__control[data-checked] {
      background: ${({ theme }) => theme.colors.light.color};
      svg {
        color: ${({ theme }) => theme.colors.primary.color};
      }
    }

    div:nth-of-type(2) {
      border-width: 0;
      display: flex;
      flex-direction: row;
      align-items: center;

      span {
        font-size: 0.8rem;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.primary};
      }
      svg {
        width: 0.9rem;
        color: ${({ theme }) => theme.colors.primary};
        margin-right: 0.3rem;
      }
    }

    @media (max-width: 991px) {
      width: 100%;
    }
  }

  .error {
    margin-top: 0.5rem;
  }
`;
