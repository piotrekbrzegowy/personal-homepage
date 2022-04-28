import styled from "styled-components";
import { ReactComponent as EnvelopeIcon } from "./img/envelope.svg";

export const Wrapper = styled.header`
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 66px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        grid-template-columns: 1fr;
        gap: 16px;
    }
`;

export const Image = styled.img`
    max-width: 398px;
    border-radius: 50%;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        max-width: 132px;
    }
`;

export const Content = styled.div`

`;

export const SmallText = styled.p`
    font-size: 12px;
    font-weight: 700;
    margin: 64px 0 12px 0;
    text-transform: uppercase;
    color: ${({ theme }) => theme.text.secondary};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        margin: 0 0 8px 0;
    }
`;

export const Title = styled.h1`
    font-size: 38px;
    font-weight: 900;
    margin: 0px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        font-size: 22px;
    }
`;

export const Description = styled.p`
    font-size: 20px;
    margin: 35px 0px 32px 0px;
    color: ${({ theme }) => theme.text.secondary};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        font-size: 17px;
        margin: 16px 0px 24px 0px;
    }
`;

export const ButtonLink = styled.a`
    width: 154px;
    height: 49px;
    font-size: 20px;
    line-height: 110%;
    padding: 0px;
    background-color: ${({ theme }) => theme.button.background};
    color: ${({ theme }) => theme.button.text};
    border: 1px solid rgba(209, 213, 218, 0.3);
    border-radius: 4px;
    display: flex;
    align-items: center;
    text-decoration: none;

    &:hover {
    box-shadow: 2px -2px 0px #8CC2FF, -2px 2px 0px #8CC2FF, 2px 2px 0px #8CC2FF, -2px -2px 0px #8CC2FF;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        width: 138px;
        height: 46px;
        font-size: 18px;
    }
`;

export const ButtonIcon = styled(EnvelopeIcon)`
    width: 19px;
    margin: 0 18px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        width: 16px;
        margin: 0 16px;
    }
`;
