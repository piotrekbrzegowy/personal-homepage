import { Wrapper, Image, SmallText, Title, Content, Description, Button, ButtonIcon } from "./styled";
import profilePhoto from "./img/photo.jpg";

export const Header = () => {
	return (
		<>
			<Wrapper>
				<Image src={profilePhoto} />
				<Content>
					<SmallText>This is</SmallText>
					<Title>Piotrek Brzegowy</Title>
					<Description>I'm a passionate Junior Frontend Developer, currently looking for new job opportunities.</Description>
					<Button><ButtonIcon/>Hire me</Button>
				</Content>
			</Wrapper>
		</>
	)
}