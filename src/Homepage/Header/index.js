import { Wrapper, Image, SmallText, Title, Content, Description, ButtonLink, ButtonIcon } from "./styled";
import profilePhoto from "./img/photo.jpg";
import { email } from "../email";

export const Header = () => {
	return (
		<>
			<Wrapper>
				<Image src={profilePhoto} alt="profile photo" />
				<Content>
					<SmallText>This is</SmallText>
					<Title>Piotrek Brzegowy</Title>
					<Description>I'm a passionate Junior Frontend Developer, currently looking for new job opportunities.</Description>
					<ButtonLink href={`mailto:${email}`} title={email}><ButtonIcon/>Hire me</ButtonLink>
				</Content>
			</Wrapper>
		</>
	)
}