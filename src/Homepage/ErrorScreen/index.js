import { github } from "../links";
import { ButtonLink, Description, ErrorIcon, Title, Wrapper } from "./styled";

export const ErrorScreen = () => {
    return (
        <>
            <Wrapper>
                <ErrorIcon />
                <Title>Ooops! Something went wrong...</Title>
                <Description>Sorry, failed to load Github projects. <br />You can check them directly on Github.</Description>
                <ButtonLink href={github}>Go to Github</ButtonLink>
            </Wrapper>
        </>
    )
};