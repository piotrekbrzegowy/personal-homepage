import styled from "styled-components";

export const Wrapper = styled.footer`
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        gap: 12px;
    }
`;

export const SmallText = styled.p`
    color: ${({ theme }) => theme.text.secondary};
    font-size: 12px;
    font-weight: 700;
    margin: 120px 0 0 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        margin: 48px 0 0 0;
    }
`;

export const TitleLink = styled.a`
    font-size: 32px;
    font-weight: 900;
    margin: 0;
    text-decoration: none;
    color: ${({ theme }) => theme.text.primary};

    &:hover{
    color: ${({ theme }) => theme.text.contrast};
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        font-size: 18px;
    }
`;

export const Description = styled.p`
    font-size: 18px;
    line-height: 140%;
    margin: 0;
    color: ${({ theme }) => theme.text.primary};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        font-size: 14px;
    }
`;