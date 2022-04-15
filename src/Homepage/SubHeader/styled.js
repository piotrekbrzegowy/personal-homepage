import styled from "styled-components";
import { theme } from "../../theme";
import { ReactComponent as GithubIcon } from "./img/github-icon.svg";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 72px 0 0 0;
`;

export const Icon = styled(GithubIcon)`
    width: 40px;
`;

export const Title = styled.h2`
    font-size: 30px;
    font-weight: 900;
    margin: 13px 0 8px 0;
`;

export const Description = styled.p`
    font-size: 20px;
    color: ${() => theme.colors.mineShaft};
    margin: 0 0 24px 0;
`;