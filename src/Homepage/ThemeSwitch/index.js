import { useDispatch, useSelector } from "react-redux"
import { selectIsDarkTheme, toggleTheme } from "../../themeSlice";
import { Text, Wrapper, Button, Box, Icon, IconWrapper } from "./styled"

export const ThemeSwitch = () => {
    const isDarkTheme = useSelector(selectIsDarkTheme);
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <Button onClick={() => dispatch(toggleTheme())}>
                <Text>DARK MODE {isDarkTheme ? "ON" : "OFF"}</Text>
                <Box>
                    <IconWrapper moveToRight={isDarkTheme}>
                        <Icon />
                    </IconWrapper>
                </Box>
            </Button>
        </Wrapper>
    )
}