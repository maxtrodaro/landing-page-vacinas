import styled from 'styled-components';

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;

  &.reset-positioning {
    position: fixed;
    inset: 0;
  }
`;
