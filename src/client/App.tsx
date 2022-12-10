import { ThemeProvider } from "@emotion/react";
import { Container, CssBaseline } from "@mui/material";
import React from "react";
import { Provider } from "react-redux";
import Routes from "./Routes";
import store from "../redux/store";
import theme from "../theme/theme";

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}
