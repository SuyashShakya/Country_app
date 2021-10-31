import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import makeStyles from '@material-ui/core/styles/makeStyles';


const useStyles = makeStyles((theme) => ({
    form: {
        width: 200,
        backgroundColor: theme.palette.primary.light,
        borderRadius: 10
    }
}))

const Filter = ({handleChange}) => {
    const classes = useStyles()
    return (
        <FormControl className={classes.form}>
                <InputLabel id="demo-controlled-open-select-label">Filter by Region</InputLabel>
            <Select
                MenuProps={{
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "left"
                },
                getContentAnchorEl: null
                }}
                onChange={handleChange}
            >
                <MenuItem value='Africa'>Africa</MenuItem>
                <MenuItem value='Americas'>America</MenuItem>
                <MenuItem value='Asia'>Asia</MenuItem>
                <MenuItem value='Europe'>Europe</MenuItem>
                <MenuItem value='Oceania'>Oceania</MenuItem>
            </Select>
        </FormControl>
    )
}

export default Filter;