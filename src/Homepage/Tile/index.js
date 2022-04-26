import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepositories, resetState, selectError, selectLoading, selectRepositories } from "../homepageSlice";
import { Wrapper, Title, Tile, Description, LinksSection, Link, LinksDescription } from "./styled";



export const TilesSection = () => {
    const dispatch = useDispatch();

    const data = useSelector(selectRepositories);
    const isLoading = useSelector(selectLoading);
    const isError = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchRepositories());
        return () => resetState();
    }, [dispatch])

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