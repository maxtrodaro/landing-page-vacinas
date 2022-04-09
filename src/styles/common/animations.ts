import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  0% {
    opacity: 0; 
  } 
  100% {
    opacity: 1;
  }
`;

export const fadeInFromTop = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-1rem);
  } 
  100% {
    opacity: 1;
    transform: translateY(0rem);
  }
`;
