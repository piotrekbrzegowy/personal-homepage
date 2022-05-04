import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { Homepage } from "./Homepage";
import { darkTheme, lightTheme } from "./theme";
import { selectIsDarkTheme } from "./themeSlice";

function App() {
  const isDarkTheme = useSelector(selectIsDarkTheme);
  return (
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Homepage />
      </ThemeProvider>
  );
}

export default App;