import React, {useContext} from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {ReactComponent as DarkModeOff} from '../assets/images/darkModeOff.svg'
import {ReactComponent as DarkModeOn} from '../assets/images/darkModeOn.svg'
import {ThemeWrapper} from '../App';

const useStyles = makeStyles((theme) => ({
    darkModeText: {
        textTransform: 'none'
    }
}))

const Header = () => {
    const {toggleTheme, darkMode, theme} = useContext(ThemeWrapper);
    const classes = useStyles();
    const muiTheme = useTheme();
	const isSmallScreen = useMediaQuery(muiTheme.breakpoints.down('md'));
    return (
        <Box display='flex' py={2} px={isSmallScreen? 2 :7} justifyContent='space-between' alignItems='center' boxShadow={1} bgcolor={theme.palette.primary.light}>
            <Typography variant={isSmallScreen ? 'subtitle1' :'h5'} color='textPrimary'><b>Where is the world?</b></Typography>
            <Button startIcon={darkMode ? <DarkModeOn /> : <DarkModeOff />} onClick={toggleTheme}>
                <Typography variant={isSmallScreen ? 'caption' :'subtitle2'} className={classes.darkModeText}>
                    <b>Dark Mode</b>
                </Typography>    
            </Button>
        </Box>
    )
}

export default Header;