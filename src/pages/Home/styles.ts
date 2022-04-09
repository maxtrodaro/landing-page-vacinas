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
    margin: 0 0 2.875rem;
    padding: 5px 3.5rem;
    position: relative;
    background: #004f71;
    color: white;
    font-size: 1.25rem;
    line-height: 1.75rem;

    text-align: center;
    @media screen and (min-width: 940px) {
      width: 33.33333333%;
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
        width: 100%;
        display: block;
      }
    }
    &::after {
      content: '';
      width: 14.5%;
      height: 2px;
      position: absolute;
      top: 50%;
      bottom: 50%;
      background: #004f71;
      left: 100%;
      display: none;
      @media screen and (min-width: 940px) {
        width: 100%;
        display: block;
      }
    }
  }

  section {
    margin: 0 1rem 0 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 767px) {
      &.info {
        flex-direction: column-reverse;
      }
    }

    div.info-container {
      max-width: 550px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

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

        #slider-thumb-1 {
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
      margin-bottom: 5rem;

      @media (max-width: 767px) {
        margin-bottom: 3rem;
      }

      &::after {
        content: 'CLIQUE AQUI';
        display: block;
        position: absolute;
        bottom: 20px;
        font-size: 0.75rem;
      }
    }
  }
`;
