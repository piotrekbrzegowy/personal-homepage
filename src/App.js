import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { Homepage } from "./Homepage";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Homepage />
    </ThemeProvider>
  );
}

export default App;