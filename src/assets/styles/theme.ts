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
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          color: Colors.green
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          '&.appbar-button': {
            color: 'primary.main',
            fontSize: '1rem',
            textTransform: 'none',
            transition: 'color 0.3s',
            '&:hover': {
              color: Colors.beige,
              backgroundColor: 'transparent'
            }
          }
        }
      }
    }
  }
});

export default theme;
