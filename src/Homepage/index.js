import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepositories, resetState, selectError, selectLoading, selectRepositories } from "./homepageSlice";
import { Header } from "./Header";
import { Skills } from "./Section";
import { futureSkillsData, skillsData } from "./skillsData";
import { Wrapper } from "./styled";
import { SubHeader } from "./SubHeader";
import { TilesSection } from "./Tile";
import { Footer } from "./Footer";

export const Homepage = () => {
    const dispatch = useDispatch();

    const data = useSelector(selectRepositories);
    const isLoading = useSelector(selectLoading);
    const isError = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchRepositories());
        return () => resetState();
    }, [dispatch])

    html_url: 
    name:
    return (
        <Wrapper>
            <Header />
            <Skills title={"My skillset includes"} skills={skillsData} />
            <Skills title={"What I want to learn next"} skills={futureSkillsData} />
            <SubHeader />
            <TilesSection title={"Movies Browser"} description={"Project description, e.g. website where you can search for favourite movies and people. Project description, e.g. website where you can search."} demoLink={"wejdztu.pl"} codeLink={"kodtu.pl"} />
            <Footer />
        </Wrapper>
    )
}