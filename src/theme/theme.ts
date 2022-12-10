import { createTheme } from "@mui/material/styles";

import Jalnan from "../assets/fonts/Jalnan.ttf";
import JUA from "../assets/fonts/BMJUA.ttf";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#1997F5",
    },
    secondary: {
      main: "#1E4DB6",
    },
  },
  // typography: {
  //   fontFamily: "JUA",
  //   body1: {
  //     fontWeight: 300,
  //   },
  // },
  // components: {
  //   MuiCssBaseline: {
  //     styleOverrides: `
  //       @font-face {
  //         font-family: 'JUA';
  //         src: url(${JUA})
  //       }
  //     `,
  //   },
  // },
});

export default theme;
