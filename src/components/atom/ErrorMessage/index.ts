import styled from 'styled-components';

const Error = styled.p.attrs({
  className: 'error',
})`
  display: block;

  color: ${({ theme }) => theme.colors.danger.color} !important;
  font-size: 0.7rem !important;
  line-height: 1rem;
  font-weight: bold;

  padding: 0.3rem;
  margin-bottom: 0;

  span {
    color: inherit !important;
  }
`;

export default Error;
