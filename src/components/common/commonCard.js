import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
    root: (isMediumScreen) => ({
        margin: isMediumScreen ? 25 : 50,
        minWidth: isMediumScreen ? 310 : 350,
        maxWidth: isMediumScreen ? 310 : 350,
        backgroundColor: theme.palette.primary.light,
    })
}))

const CommonCard = ({image, countryName, countryPopulation, countryRegion, countryCapital, onClick}) => {
    const muiTheme = useTheme();
	const isMediumScreen = useMediaQuery(muiTheme.breakpoints.down('md'));
    const classes = useStyles(isMediumScreen);
    return (
        <Card
            className={classes.root}
            onClick={onClick}
        >
            <CardMedia
                component="img"
                alt={countryName}
                image={image}
            />
            <CardContent>
                <Typography><b>{countryName}</b></Typography>
                <br />
                <Typography variant='subtitle2'>Population: {countryPopulation}</Typography>
                <Typography variant='subtitle2'>Region: {countryRegion}</Typography>
                <Typography variant='subtitle2'>Capital: {countryCapital}</Typography> 
            </CardContent>    
    </Card>    
    )
}

export default CommonCard;