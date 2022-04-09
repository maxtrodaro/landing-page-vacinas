import { darken, lighten } from 'polished';
import styled from 'styled-components';

export const MainContainer = styled.div`
  margin-bottom: 0.5rem;
  .custom-input-wrapper-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    .error-icon {
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        color: ${({ theme }) => theme.colors.danger.color};

        width: 1.5rem !important;
        height: 1.5rem !important;
      }
    }
  }

  .error {
    margin-top: 0 !important;
  }
`;

type ContainerProps = {
  hasError?: string;
  isWhiteBackground?: boolean;
};

export const Container = styled.label<ContainerProps>`
  display: flex;
  position: relative;
  width: 100%;

  input:focus,
  input:active,
  input {
    width: 100%;
    height: 100%;
    background-color: ${({ theme, isWhiteBackground }) =>
      isWhiteBackground ? theme.colors.white : theme.colors.light.color};
    border: 1px solid
      ${({ hasError, theme }) => (hasError ? theme.colors.danger.color : theme.colors.border)};
    border-radius: 6px;
    font-size: 0.75rem;
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.colors.extraDarkVariation01.color};
    padding: 0.8rem 0.9rem;
    box-shadow: none;

    &::placeholder {
      font-size: 0.75rem;
      font-family: 'Roboto', sans-serif;
      text-transform: uppercase;
      color: ${({ theme }) => lighten(0.1, theme.colors.extraDarkVariation01.color)};
    }
  }
  input:disabled {
    font-weight: bold;
  }
`;

export const PreText = styled.p`
  margin-bottom: 0;
  font-weight: bold; ;
`;

export const Label = styled.span`
  position: relative;

  display: block;
  margin-bottom: 0.5rem;

  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.2rem;
  color: ${({ theme }) => theme.colors.texts};
`;

type PasswordIconContainerType = {
  hasLabel: boolean;
};
export const PasswordIconContainer = styled.button<PasswordIconContainerType>`
  position: absolute;
  z-index: 10;
  right: 0;

  height: 100%;

  min-width: 1px !important;

  display: flex;
  align-items: center;
  padding: 1.25rem;

  background: none;
  border-width: 0;

  svg {
    color: ${({ theme }) => theme.colors.dark.color};
    width: 1.4rem !important;
    height: 1.4rem !important;
    opacity: 0.8;
  }
`;

export const IconContainer = styled.div<ContainerProps>`
  position: relative;
  flex: 1;

  & > div {
    position: absolute;
    z-index: 10;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 1.25rem;

    svg {
      color: ${({ hasError, theme }) => (hasError ? theme.colors.danger : theme.colors.dark.color)};
      width: 1rem !important;
      height: 1rem !important;
    }
  }

  input:focus,
  input:active,
  input {
    padding-left: 3rem;
  }
`;

export const FieldRulesContainer = styled.div<ContainerProps>`
  position: absolute;
  z-index: 100;
  top: 100%;
  width: 100%;
  margin-top: -0.5rem;

  background-color: ${({ theme }) => theme.colors.medium.color};

  padding: 0.5rem 1rem;

  p:last-of-type {
    margin-bottom: 0;
  }

  p,
  span,
  strong {
    color: ${({ theme }) => theme.colors.dark.color};

    font-size: 0.8rem;
    line-height: 1rem;
  }

  border: 1px solid
    ${({ hasError, theme }) =>
      hasError ? theme.colors.danger : darken(0.15, theme.colors.medium.color)};
  border-top-width: 0;

  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
