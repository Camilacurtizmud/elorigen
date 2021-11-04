import { ThemeProvider } from '@emotion/react';
import { createMuiTheme } from '@mui/material';
import { brown } from '@mui/material/colors';
import './App.css';
import Catalogo from './components/catalogo/catalogo';
import NavBar from './components/navbar/navbar';
  
const theme = createMuiTheme({
  palette: {
    primary: {
      main: brown[200]
    },
    secondary: {
      main: brown[300]
    },
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <NavBar/>
      <Catalogo />
      </div>

      </ThemeProvider>
  );
}

export default App;
