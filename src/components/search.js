import React,{useContext} from 'react';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import SearchIcon from "@material-ui/icons/Search";
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {ThemeWrapper} from '../App';

const Search = ({onChange}) => {
    const muiTheme = useTheme();
	const isMediumScreen = useMediaQuery(muiTheme.breakpoints.down('md'));
    const {theme} = useContext(ThemeWrapper);
    return (
        <Box display='flex' alignItems='center' p={1} boxShadow={1} width={isMediumScreen ? 330 : 500} borderRadius={5}  bgcolor={theme.palette.primary.light}>
            <SearchIcon /> &nbsp;
            <TextField hiddenLabel placeholder='Search for a country' variant="standard" InputProps={{disableUnderline: true}} fullWidth onChange={onChange} />
        </Box>
    )
}

export default Search;