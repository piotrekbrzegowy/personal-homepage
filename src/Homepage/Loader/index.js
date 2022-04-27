import { Description, Spinner, Wrapper } from "./styled";

export const Loader = () => {
    return (
        <>
            <Wrapper>
                <Description>Please wait, projects are being loaded...</Description>
                <Spinner />
            </Wrapper>
        </>
    )
};