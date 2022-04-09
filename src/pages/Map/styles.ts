import styled from 'styled-components';

export const Main = styled.main`
  padding-bottom: 3.5rem;
  display: flex;
  flex-direction: column;

  width: 100%;

  .footnotes {
    max-width: 940px;
    width: 100%;
    margin: 0 auto;
  }
`;

export const MapSection = styled.section`
  width: 100%;
  height: 100%;
  min-height: 500px;

  display: flex;
  margin-bottom: 3.5rem;
  position: relative;
  @media screen and (max-width: 762px) {
    flex-direction: column;
  }

  div.results {
    max-width: 444px;
    width: 100%;
    padding: 1rem 0 0 1rem;
    display: flex;
    flex-direction: column;
    position: relative;
    border: 1px solid #ccc;
    & + div {
      border: 1px solid #ccc;
    }
    > button {
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 0;
    }
    button {
      margin-top: auto;
      width: 100%;
    }
    @media screen and (max-width: 762px) {
      max-width: 100%;
      padding: 0;
      button {
        border-radius: 0;
      }
      .chakra-accordion {
        display: none;
      }
    }
  }

  .chakra-accordion {
    max-height: 500px;
    padding-right: 20px;
    overflow-y: auto;
  }
`;
export const HeaderResults = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-top: 50px;
  @media screen and (max-width: 762px) {
    display: none;
  }
  p {
    margin: 0;
  }
  .filter {
    img {
      cursor: pointer;
    }
    button {
      width: auto !important;
      margin: 0 !important;
      color: #888b8d;
      &:hover {
        background: transparent;
      }
    }
  }
`;

export const HeaderMessages = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: #e40046;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 1rem;
    @media screen and (max-width: 762px) {
      padding: 1rem;
      margin-bottom: 0;
    }
  }
`;
