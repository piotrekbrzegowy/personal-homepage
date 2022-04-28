import styled from "styled-components";
import { ReactComponent as SpinnerIcon } from "./img/spinner.svg";

export const Wrapper = styled.div`
    max-width: 1216px;
    display: flex;
    align-content: center;
    flex-direction: column;
    align-items: center;
`;

export const Description = styled.p`
    font-size: 20px;
    color: ${({ theme }) => theme.text.primary};
    margin: 88px 0 48px 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
      font-size: 17px;
    }
`;

export const Spinner = styled(SpinnerIcon)`
    width: 160px;
    height: auto;
    animation: rotate 2s linear infinite;
    margin: 0 0 140px 0;

    @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
    width: 100px;
    margin: 0 0 100px 0;
  }
`;