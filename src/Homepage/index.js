import { Header } from "./Header";
import { Skills } from "./Section";
import { skillsData } from "./skillsData";
import { Wrapper } from "./styled";

export const Homepage = () => {
    return (
        <Wrapper>
            <Header />
            <Skills title={"My skillset includes"} skills={skillsData}/>
        </Wrapper>
    )
}