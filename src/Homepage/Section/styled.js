import styled from "styled-components";
import { theme } from "../../theme";
import { ReactComponent as Bullet } from "./img/bullet.svg";

export const Section = styled.section`
    background-color: ${() => theme.colors.white};
    padding: 32px;
    margin: 63px 0 0 0;

    @media(max-width: ${() => theme.breakpoints.mobileMax}px){
        padding: 16px;
        margin: 48px 0 0 0;
    }
`;

export const Title = styled.h2`
    margin: 0 0 32px 0;
    font-size: 30px;
    font-weight: 900;
    padding: 0 0 15px 0;
    border-bottom: 1px solid rgba(209, 213, 218, 0.3);

    @media(max-width: ${() => theme.breakpoints.mobileMax}px){
        margin: 0 0 12px 0;
        font-size: 18px;
        padding: 0 0 12px 0;
    }
`;

export const List = styled.ul`
    padding: 0;
    margin: 0;
    list-style-type: none;
    font-size: 18px;
    color: ${() => theme.colors.slateGray};
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;

    @media(max-width:${() => theme.breakpoints.tabletVerticalMax}px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width:${() => theme.breakpoints.mobileMax}px){
        grid-template-columns: 1fr;
        font-size: 14px;
    }
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
`;

export const ListBullet = styled(Bullet)`
    width: 9px;
    height: 9px;
    margin: 0 16px 0 0;

    @media(max-width: ${() => theme.breakpoints.mobileMax}px){
        width: 6px;
        height: 6px;
        margin: 0 8px 0 0;
    }
`;