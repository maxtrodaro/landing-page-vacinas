import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: center;

  align-items: flex-end;
  background: #009de1;
  padding: 1rem 1rem 0 1rem;
  width: 100%;

  @media screen and (max-width: 762px) {
    align-items: center;
    flex-direction: column;
  }
  image {
    flex: 1;
  }
  img {
    width: 165px;
    height: 148px;
  }
  p {
    color: white;
    font-size: 1.25rem;
    line-height: 1.875rem;
    margin: 2rem 1.5rem;
    width: 207px;
    @media screen and (max-width: 762px) {
      margin: 1rem 0;
      text-align: center;
    }
  }
`;
