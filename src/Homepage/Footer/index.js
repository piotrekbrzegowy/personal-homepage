import { SocialIcons } from "./SocialIcons";
import { Description, SmallText, Title, Wrapper } from "./styled";

export const Footer = () => {
    return (
        <>
            <Wrapper>
                <SmallText>LET'S TALK!</SmallText>
                <Title>brzegowypiotrek@gmail.com</Title>
                <Description>I’m always open to new projects whenever I have the time. If you want to create a website and need some help to make your ideas come to life, feel free to contact me</Description>
                <SocialIcons />
            </Wrapper>
        </>
    )
};