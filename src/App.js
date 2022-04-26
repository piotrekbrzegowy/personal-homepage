import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import store from "./store";
import { GlobalStyle } from "./GlobalStyle";
import { Homepage } from "./Homepage";
import { theme } from "./theme";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Homepage />
      </ThemeProvider>
    </Provider>
  );
}

export default App;