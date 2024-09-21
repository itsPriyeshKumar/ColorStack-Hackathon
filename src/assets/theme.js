import { createTheme } from "@mui/material";
import { blue, indigo } from "@mui/material/colors";

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#005A43",
        },
      },
    },
  },
  palette: {
    type: "",
    primary: {
      main: "#333333",
    },
    secondary: {
      main: blue[300],
    },
  },
  typography: {
    fontFamily: "Roboto",
    fontSize: 15,
  },
});
export default theme;
