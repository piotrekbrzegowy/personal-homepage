import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import store from "./store";
import { GlobalStyle } from "./GlobalStyle";
import { Homepage } from "./Homepage";
import { lightTheme } from "./theme";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Homepage />
      </ThemeProvider>
    </Provider>
  );
}

export default App;