import { Section, Title, List, ListBullet, Item } from "./styled";

export const Skills = ({ title, skills }) => {
    return (
        <>
            <Section>
                <Title>{title}</Title>
                <List>
                    {skills.map((skill) => (
                        <Item key={skill}>
                            <ListBullet />{skill}
                        </Item>))}
                </List>
            </Section>
        </>
    )
}