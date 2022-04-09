import styled, { css } from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.primary.contrast} 0% 0% no-repeat padding-box;
  width: 100%;
  height: 2.5rem;
  display: flex;
  touch-action: manipulation;
  justify-content: center;
  box-shadow: 0px 1px 4px #00000029;
  border: 1px solid #cccccc;
  border-radius: 10px;

  svg {
    width: 0.7rem !important;
    height: 0.7rem !important;
    color: ${({ theme }) => theme.colors.primary.contrast};
  }
`;

export const Sign = styled.button<{ disabled?: boolean }>`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: auto;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary.color};

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.25;
      cursor: default;
    `}
`;

export const NumberLabel = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  color: #777777;
`;
