import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";

import PURPLE from "@material-ui/core/colors/deepPurple";
import indigo from "@material-ui/core/colors/indigo";

const accent = PURPLE[100];

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: PURPLE,
    secondary: indigo,
  },
  overrides: {
    MuiListItem: {
      root: {
        border: `1px solid ${accent}`,
        borderRadius: 4,
        marginBottom: "10px",
      },
    },
    MuiListItemText: {
      primary: {
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflowX: "hidden",
      },
    },
  },
  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The default props to change
      disableRipple: true, // No more ripple, on the whole application 💣!
    },
  },
});

const provider: React.FC<{}> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default provider;
