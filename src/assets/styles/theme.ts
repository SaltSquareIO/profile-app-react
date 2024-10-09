import { createTheme } from '@mui/material';
import { Colors } from './colors';

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.darkGreen
    },
    secondary: {
      main: Colors.green
    },
    background: {
      paper: Colors.gray
    },
    text: {
      primary: Colors.darkGreen,
      secondary: Colors.black
    }
  }
});

export default theme;
