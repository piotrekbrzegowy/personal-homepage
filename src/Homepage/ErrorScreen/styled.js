import styled from "styled-components";
import { ReactComponent as Error } from "./img/error.svg";
import { theme } from "../../theme";

export const Wrapper = styled.div`
    max-width: 1216px;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
`;

export const ErrorIcon = styled(Error)`
    width: 37px;
    height: auto;
    margin: 96px 0 0 0;
`;

export const Title = styled.h2`
    font-size: 24px;
    margin: 23px 0 32px 0;

    @media(max-width: ${() => theme.breakpoints.mobileMax}px){
        font-size: 18px ;
        margin: 18px 0 24px 0;
    }
`;

export const Description = styled.p`
    font-size: 20px;
    margin: 0 0 32px 0;
    text-align: center;

    @media(max-width: ${() => theme.breakpoints.mobileMax}px){
        font-size: 17px;
        margin: 0 0 24px 0;
    }
`;

export const ButtonLink = styled.a`
    width: 154px;
    height: 49px;
    font-size: 20px;
    line-height: 230%;
    padding: 0px;
    background-color: ${() => theme.colors.scienceBlue};
    color: ${() => theme.colors.white};
    border: 1px solid rgba(209, 213, 218, 0.3);
    border-radius: 4px;
    text-align: center;
    text-decoration: none;
    margin: 0 0 140px 0;

    &:hover {
    box-shadow: 2px -2px 0px #8CC2FF, -2px 2px 0px #8CC2FF, 2px 2px 0px #8CC2FF, -2px -2px 0px #8CC2FF;
    }

    @media(max-width: ${() => theme.breakpoints.mobileMax}px){
        width: 138px;
        height: 46px;
        font-size: 18px;
        margin: 0 0 100px 0;
    }
`;