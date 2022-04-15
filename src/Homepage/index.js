import { Header } from "./Header";
import { Skills } from "./Section";
import { futureSkillsData, skillsData } from "./skillsData";
import { Wrapper } from "./styled";
import { SubHeader } from "./SubHeader";

export const Homepage = () => {
    return (
        <Wrapper>
            <Header />
            <Skills title={"My skillset includes"} skills={skillsData} />
            <Skills title={"What I want to learn next"} skills={futureSkillsData} />
            <SubHeader />
        </Wrapper>
    )
}