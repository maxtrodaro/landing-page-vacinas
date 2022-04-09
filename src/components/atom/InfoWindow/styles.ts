import styled from 'styled-components';

export const InfoWindowContent = styled.section`
  position: absolute;
  width: 320px;
  background-color: #009cde;
  left: 0;
  right: -32%;
  top: 25%;
  margin: 0 auto;
  box-shadow: 0 2px 7px 1px rgba(0, 0, 0, 0.3);
  padding: 24px;
  font-size: 14px;
  z-index: 100;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 762px) {
    right: 0;
    top: 30%;
  }

  h2,
  p {
    color: #fff;
    margin: 0;
  }

  h2 {
    font-size: 14px;
  }

  > p {
    margin-bottom: 1rem;
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  .close-window {
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
  }
`;

export const InfoWindowInfo = styled.div`
  margin-bottom: 1rem;
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const InfoWindowLinks = styled.div`
  a {
    display: block;
    align-items: center;
    justify-content: center;
    background: transparent;
    border-color: #fff;
    font-weight: normal;
    border-width: 0;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.3s;
    font-size: 1rem;
    text-align: center;

    &:first-child {
      margin: 1rem 0;
    }
  }
`;
