import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 1216px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        grid-template-columns: 1fr;
    }
`;

export const Tile = styled.div`
    max-width: 592px;
    background-color: ${({ theme }) => theme.background.secondary};
    border: 6px solid ${({ theme }) => theme.border};
    box-shadow: ${({ theme }) => theme.boxShadow};
    border-radius: 4px;
    padding: 56px;

    &:hover {
    border: 6px solid rgba(3, 102, 214, 0.2);
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        max-width: none;
        padding: 24px;
    }
`;

export const Title = styled.h2`
    color: ${({ theme }) => theme.tile.title};
    margin: 0 0 24px 0;
    font-size: 24px;
    word-break: break-word;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        font-size: 16px;
        margin: 0 0 16px 0;
    }
`;

export const Description = styled.p`
    font-size: 18px;
    color: ${({ theme }) => theme.text.secondary};
    line-height: 140%;
    margin: 0 0 16px 0;
    word-break: break-word;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
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
    color: ${({ theme }) => theme.text.contrast};
    margin: 8px 0 0 0px;
    word-break: break-word;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        font-size: 14px;
    }
`;