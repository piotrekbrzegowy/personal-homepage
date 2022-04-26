import styled from "styled-components";
import { theme } from "../../theme";

export const Wrapper = styled.div`
    max-width: 1216px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;

    @media(max-width: ${() => theme.breakpoints.mobileMax}px){
        grid-template-columns: 1fr;
    }
`;

export const Tile = styled.div`
    max-width: 592px;
    background-color: ${() => theme.colors.white};
    border: 6px solid rgba(209, 213, 218, 0.3);
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border-radius: 4px;
    padding: 56px;

    &:hover {
    border: 6px solid rgba(3, 102, 214, 0.2);
    }

    @media(max-width: ${() => theme.breakpoints.mobileMax}px){
        max-width: none;
        padding: 24px;
    }
`;

export const Title = styled.h2`
    color: ${() => theme.colors.scienceBlue};
    margin: 0 0 24px 0;
    font-size: 24px;
    word-break: break-word;

    @media(max-width: ${() => theme.breakpoints.mobileMax}px){
        font-size: 16px;
        margin: 0 0 16px 0;
    }
`;

export const Description = styled.p`
    font-size: 18px;
    color: ${() => theme.colors.slateGray};
    line-height: 140%;
    margin: 0 0 16px 0;
    word-break: break-word;

    @media(max-width: ${() => theme.breakpoints.mobileMax}px){
        font-size: 14px;
        margin: 0 0 8px 0;
    }
`;

export const LinksDescription = styled(Description)`
    margin: 8px 0 0 0;
    line-height: 120%;
    word-break: unset;
`;

export const LinksSection = styled.div`
    display: flex;
    gap: 8px;
`;

export const Link = styled.a`
    font-size: 18px;
    color: ${() => theme.colors.scienceBlue};
    margin: 8px 0 0 0px;
    word-break: break-word;

    @media(max-width: ${() => theme.breakpoints.mobileMax}px){
        font-size: 14px;
    }
`;