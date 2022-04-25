import styled from "styled-components";
import { theme } from "../../theme";

export const Wrapper = styled.footer`
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media(max-width: ${() => theme.breakpoints.mobileMax}px){
        gap: 12px;
    }
`;

export const SmallText = styled.p`
    color: ${() => theme.colors.slateGray};
    font-size: 12px;
    font-weight: 700;
    margin: 120px 0 0 0;

    @media(max-width: ${() => theme.breakpoints.mobileMax}px){
        margin: 48px 0 0 0;
    }
`;

export const Title = styled.h2`
    font-size: 32px;
    font-weight: 900;
    margin: 0;

    &:hover{
    color: ${() => theme.colors.scienceBlue};
    }

    @media(max-width: ${() => theme.breakpoints.mobileMax}px){
        font-size: 18px;
    }
`;

export const Description = styled.p`
    font-size: 18px;
    line-height: 140%;
    margin: 0;

    @media(max-width: ${() => theme.breakpoints.mobileMax}px){
        font-size: 14px;
    }
`;