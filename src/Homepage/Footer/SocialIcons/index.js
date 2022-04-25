import { Item, List, Link } from "./styled";
import { socials } from "./socials";

export const SocialIcons = () => (
    <List>
        {socials.map(({ name, url, Icon }) => (
            <Item key={name}>
                <Link href={url} title={name} target="_blank" rel="noreferrer">
                    <Icon />
                </Link>
            </Item>
        ))}
    </List>
)