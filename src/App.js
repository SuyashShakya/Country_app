import React, {createContext} from 'react';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import {Header, Body} from './components';

export const ThemeWrapper = createContext("theme");

const App = () => {
	const [darkMode, setDarkMode] = React.useState(false)
	const primaryTheme = createTheme({
		palette: {
			primary: {
			main: "#ffff",
			},
			text: {
				primary: 'rgb(45, 55, 72)'
			}
		}
  	})

	const darkTheme = createTheme({
		palette: {
			type: 'dark',
			primary: {
				light: 'hsl(207, 26%, 17%)',
				main: 'hsl(200, 15%, 8%)',
			},

			text: {
				primary: "#ffffff",
			},
		}
	})

	const toggleTheme = () => {
		setDarkMode(!darkMode)
	};

  const theme = darkMode ? darkTheme : primaryTheme
  return(
    <ThemeWrapper.Provider
      value={{
        toggleTheme: toggleTheme,
        darkMode: darkMode,
        theme,
      }}
    >
      <ThemeProvider theme={theme}>
        <Header />
		<Body />
      </ThemeProvider>
    </ThemeWrapper.Provider>
    )
} 

export default App;