import styled from 'styled-components';

export const Container = styled.span`
  line-height: 0.6rem;
  display: block;
  margin-bottom: 0.8rem;

  .chakra-switch {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: ${({ theme }) => theme.colors.texts};
    cursor: pointer;
  }

  .chakra-switch__track,
  .chakra-switch__track[data-focus] {
    box-shadow: none;
  }

  .chakra-switch__track[aria-checked='true'],
  .chakra-switch__track[data-checked] {
    background-color: ${({ theme }) => theme.colors.primary.color};
  }

  .chakra-switch__thumb {
    border: 1px solid ${({ theme }) => theme.colors.medium.color};
    box-sizing: border-box;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
    transform: scale(1.4);
  }

  .chakra-switch__thumb[aria-checked='true'],
  .chakra-switch__thumb[data-checked] {
    transform: scale(1.4) translateX(60%);
  }
`;
