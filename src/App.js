import React, {createContext} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import {Header, Body, DetailedComponent} from './components';

export const ThemeWrapper = createContext("theme");

const App = () => {
	const [darkMode, setDarkMode] = React.useState(false)
	const primaryTheme = createTheme({
		palette: {
			primary: {
				main: 'hsl(0, 0%, 98%)',	
				light: 'hsl(0, 0%, 100%)',
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
				main: 'hsl(207, 26%, 17%)',
				light: 'hsl(209, 23%, 22%)',
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
				<Router>
					<Header />
					<Switch>
						<Route path='/' exact component={Body} />
						<Route path='/:country' component={DetailedComponent} />
					</Switch>	
				</Router>
			</ThemeProvider>
		</ThemeWrapper.Provider>
		)
} 

export default App;