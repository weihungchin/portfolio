import styled from "styled-components";
import { keyframes  } from "styled-components";

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;

const typingAnimation = keyframes`
  from {
    width: 0;
  }
`;

const blinkCaretAnimation = keyframes`
  50% {
    border-color: #34ccda;
  }

  100% {
    border-color: transparent;
  }
`;

export const Hello = styled.div`
  white-space: nowrap;
  overflow: hidden;
  border-right: 0.2em solid transparent;
  width: 5ch;
  animation: ${typingAnimation} 0.8s steps(5, end), ${blinkCaretAnimation} 0.5s step-end 8 alternate;
`;

export const Intro = styled.div`
  width: 100%;
  border: 1px solid white;
  font-size: 24px;
  text-align: center;
  padding: 36px 16px;
  letter-spacing: 4px;
  margin-bottom: 56px;
`;
