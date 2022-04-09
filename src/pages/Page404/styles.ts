import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 1.25rem;
  max-width: 940px;
  margin: 0 auto;
  gap: 50px;

  & > div {
    width: 100%;
    max-width: 25rem;

    padding: 1.25rem;

    text-align: center;

    h4 {
      font-size: 24px;
    }

    button {
      margin: 1.25rem auto 0 auto;
      text-transform: uppercase;
    }
  }
`;
