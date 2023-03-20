import { createTheme, ThemeProvider } from "@mui/system";
import { red } from "@mui/material/colors";
import { useParams } from "react-router";

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

const Item = () => {
  const { name } = useParams();
  console.log(name);

  return (
    <ThemeProvider theme={theme}>
      <div>{name}</div>
    </ThemeProvider>
  );
};

export default Item;
