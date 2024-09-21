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
      main: indigo[900],
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
