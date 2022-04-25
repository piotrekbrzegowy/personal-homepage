import { Wrapper, Title, Tile, Description, LinksSection, Link, LinksDescription } from "./styled";

export const TilesSection = () => {
    return (
        <>
            <Wrapper>
                <Tile>
                    <Title>Movies Browser</Title>
                    <Description>Project description, e.g. website where you can search for favourite movies and people. Project description, e.g. website where you can search.</Description>
                    <LinksSection><LinksDescription>Demo:</LinksDescription><Link target="_blank" rel="noreferrer" href="">wejdztu.pl</Link></LinksSection>
                    <LinksSection><LinksDescription>Code:</LinksDescription><Link target="_blank" rel="noreferrer" href="">kodtu.pl</Link></LinksSection>
                </Tile>
                <Tile>
                    <Title>Movies Browser</Title>
                    <Description>Project description, e.g. website where you can search for favourite movies and people. Project description, e.g. website where you can search.</Description>
                    <LinksSection><LinksDescription>Demo:</LinksDescription><Link>wejdztu.pl</Link></LinksSection>
                </Tile>
                <Tile>
                    <Title>Movies Browser</Title>
                    <Description>Project description, e.g. website where you can search for favourite movies and people. Project description, e.g. website where you can search.</Description>
                    <LinksSection><LinksDescription>Demo:</LinksDescription><Link>wejdztu.pl</Link></LinksSection>
                </Tile>
            </Wrapper>
        </>
    )
};