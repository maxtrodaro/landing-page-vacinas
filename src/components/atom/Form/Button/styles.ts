/* eslint-disable no-nested-ternary */
import { darken } from 'polished';
import styled, { css } from 'styled-components';

import { ButtonProps, AContainerProps } from './types';

const defaultProps = (props: ButtonProps): any => {
  const {
    buttonTheme: { background, front, borderColor },
    fontSize,
    iconPosition,
    isIconOnly,
    hasShadow,
    hasBorder,
    isSuperRounded,
    isBig,
  } = props;

  return css`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    background: ${background};

    color: ${front};

    font-weight: normal;

    border-width: 0;

    border-radius: ${isSuperRounded ? '35px' : '6px'};
    cursor: pointer;
    transition: 0.3s;

    ${isBig
      ? css`
          padding: 1.4rem 2.4rem;
          font-size: 1.2rem;
          text-transform: uppercase;
          font-weight: 700;
        `
      : css`
          padding: 0.6rem 1.6rem;
          font-size: ${fontSize || 1}rem;
        `}

    ${hasShadow &&
    css`
      box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
    `};

    ${hasBorder &&
    borderColor &&
    css`
      border: 1px solid ${borderColor};
    `};

    &:hover {
      background: ${darken(0.05, background)};

      a {
        text-decoration: none;
      }
    }

    &:disabled {
      opacity: 0.5;
    }

    svg {
      margin: ${isIconOnly ? '0' : iconPosition === 'left' ? '0 0.6rem 0 0' : '0 0 0 0.6rem'};
      color: ${front};
    }
  `;
};

export const ButtonContainer = styled.button<ButtonProps>`
  ${({
    fontSize,
    iconPosition,
    isIconOnly,
    hasShadow,
    hasBorder,
    buttonTheme,
    isSuperRounded,
    isBig,
  }) =>
    defaultProps({
      fontSize,
      iconPosition,
      isIconOnly,
      hasShadow,
      hasBorder,
      buttonTheme,
      isSuperRounded,
      isBig,
    })}
`;

export const AContainer = styled.a<AContainerProps>`
  ${({
    fontSize,
    iconPosition,
    isIconOnly,
    hasShadow,
    hasBorder,
    buttonTheme,
    isSuperRounded,
    isBig,
  }) =>
    defaultProps({
      fontSize,
      iconPosition,
      isIconOnly,
      hasShadow,
      hasBorder,
      buttonTheme,
      isSuperRounded,
      isBig,
    })}

  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

export const SimpleGrayButton = styled.button`
  background-color: ${({ theme }) => theme.colors.light.color};
  border: 1px solid ${({ theme }) => theme.colors.dark.color};
  padding: 0.4rem 1.6rem;
  border-radius: 6px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.extraDarkVariation02.color};
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.medium.color};
  }
`;
