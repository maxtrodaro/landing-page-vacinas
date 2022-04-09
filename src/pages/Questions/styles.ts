import styled from 'styled-components';

export const Main = styled.main`
  padding: 2.5rem 1.5rem 3.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 940px;
  width: 100%;
  margin: 0 auto;

  p.info-label {
    margin: 0;
    padding: 5px 3rem;
    position: relative;
    background: #004f71;
    color: white;
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 700;
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    @media screen and (min-width: 940px) {
      width: 60%;
    }
    &::before {
      content: '';
      width: 100%;
      height: 2px;
      position: absolute;
      top: 50%;
      bottom: 50%;
      background: #004f71;
      right: 100%;
      display: none;
      @media screen and (min-width: 940px) {
        width: 40%;
        display: block;
      }
    }
    &::after {
      content: '';
      width: 7%;
      height: 2px;
      position: absolute;
      top: 50%;
      bottom: 50%;
      background: #004f71;
      left: 100%;
      display: none;
      @media screen and (min-width: 940px) {
        width: 40%;
        display: block;
      }
    }
  }
`;
export const InitialSection = styled.section`
  margin: 1.5rem 1rem;

  * {
    font-size: 0.875rem;
    color: #222731;
  }

  li {
    list-style: disc;
    margin-left: 1rem;
  }

  sup {
    vertical-align: super;
    font-size: smaller;
  }
`;

export const QuestionsSection = styled.section`
  &.last-child {
    margin-bottom: 5rem;
  }
  margin-top: 5rem;
  & + section {
    margin: 2.5rem 1rem 0 1rem;
  }

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    color: #009cde;
    font-size: 1.125rem;
    line-height: 1.625rem;
    margin-bottom: 2rem;
    text-align: center;
    text-transform: uppercase;
  }

  li {
    margin-left: 1rem;
    list-style: disc;
    font-size: 0.875rem;
    color: #888b8d;
  }
  sup {
    vertical-align: super;
    font-size: smaller;
  }
`;

export const MapSection = styled.section`
  margin: 2.5rem 1rem 2.5rem 1rem;
  max-width: 550px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > p {
    color: #222731;
    font-size: 1rem;
  }

  div.loc {
    display: flex;
    justify-content: space-between;
    max-width: 350px;
    width: 100%;

    p {
      color: #009cde;
      font-size: 0.75rem;
      text-transform: uppercase;
    }
  }

  .input-cep {
    max-width: 350px;
    width: 100%;
  }

  div.slider-container {
    border-radius: 4px;
    max-width: 350px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem 0.9rem;
    border: 1px solid #cbc8c4;

    span {
      color: #888b8d;
      opacity: 0.9;
      font-size: 0.75rem;
      text-transform: uppercase;
      margin: 0 20px 0 0;
    }
    .slider {
      width: 50%;
      display: flex;

      span {
        color: #009cde;
      }

      #slider-thumb-22 {
        background: #009cde;
      }
    }
  }

  .btn-search {
    margin: 1.5rem 1.5rem 5rem 1.5rem;
  }
  .btn-questions {
    width: 100%;
    height: 80px;
    font-weight: bold;
    position: relative;
    padding-bottom: 1.5rem;
    &::after {
      content: 'CLIQUE AQUI';
      display: block;
      position: absolute;
      bottom: 20px;
      font-size: 0.75rem;
    }
  }
`;

export const ReferencesSection = styled.section`
  padding: 4rem 2rem;
  background-color: rgba(100, 204, 201, 0.45);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    max-width: 940px;
    width: 100%;
    margin: auto;
    font-size: 0.75rem;
  }

  ol {
    max-width: 940px;
    width: 100%;
    margin: auto;
    list-style-type: decimal;
    li {
      font-size: 0.75rem;
      margin-bottom: 0;
    }
  }
`;
