import { Wrapper, Title, Tile, Description, LinksSection, Link, LinksDescription } from "./styled";

export const TilesSection = ({ title, description, demoLink, codeLink }) => {
    return (
        <>
            <Wrapper>
                <Tile>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                    <LinksSection><LinksDescription>Demo:</LinksDescription><Link target="_blank" rel="noreferrer" href="">{demoLink}</Link></LinksSection>
                    <LinksSection><LinksDescription>Code:</LinksDescription><Link target="_blank" rel="noreferrer" href="">{codeLink}</Link></LinksSection>
                </Tile>
            </Wrapper>
        </>
    )
};