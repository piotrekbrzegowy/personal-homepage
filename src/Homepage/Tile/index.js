import { Wrapper, Title, Tile, Description, LinksSection, Link, LinksDescription } from "./styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepositories, resetState, selectError, selectLoading, selectRepositories } from "../homepageSlice";
import { StateChecker } from "../StateChecker";

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
            <StateChecker isLoading={isLoading} isError={isError}>
                <Wrapper>{data.map(({ id, name, description, homepage, html_url }) => (
                    <Tile key={id}>
                        <Title>{name}</Title>
                        {description && <Description>{description}</Description>}
                        {homepage && <LinksSection><LinksDescription>Demo:</LinksDescription><Link target="_blank" rel="noreferrer" href={homepage}>{homepage}</Link></LinksSection>}
                        {html_url && <LinksSection><LinksDescription>Code:</LinksDescription><Link target="_blank" rel="noreferrer" href={html_url}>{html_url}</Link></LinksSection>}
                    </Tile>
                ))}
                </Wrapper>
            </StateChecker>
        </>
    )
};