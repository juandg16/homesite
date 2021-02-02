import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import TIForm from './TIForm';
import TIGames from './TIGames';
import './TIApp.scss'
import { orange } from '@material-ui/core/colors';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#03e9f4',
    },
    secondary: orange,
    action: {
      hover: '#03e9f4',
    }
  },
});
  
function TIApp() {
    return (
        <div className="ti-app">
            <ThemeProvider theme={darkTheme}>            
                <h1>TI Data Tracker</h1>
                <TIGames/>
            </ThemeProvider>  
        </div>  
    );
}

export default TIApp;