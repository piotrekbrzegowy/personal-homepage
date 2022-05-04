import styled from "styled-components";
import { css } from "styled-components";
import { ReactComponent as SunIcon } from "./img/sun-icon.svg";

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const Text = styled.div`
    font-size: 12px;
    color: ${({ theme }) => theme.text.secondary};
    font-weight: 700;
    margin: 0 13px 0 0;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
    outline-offset: 8px;
    color: inherit;
`;

export const Box = styled.span`
    background-color: ${({ theme }) => theme.background.primary};
    width: 48px;
    padding: 3px;
    border: 1px solid ${({ theme }) => theme.background.switch};
    border-radius: 12px;
    display: flex;
`;

export const IconWrapper = styled.div`
    padding: 3px;
    display: flex;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.background.switch};
    transition: transform 0.3s;

    ${({ moveToRight }) => moveToRight && css`
        transform: translateX(20px);
    `}
`;

export const Icon = styled(SunIcon)`
    color: ${({ theme }) => theme.icon};
`;