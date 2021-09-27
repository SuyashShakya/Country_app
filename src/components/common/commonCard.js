import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography'

const CommonCard = ({image, countryName, countryPopulation, countryRegion, countryCapital}) => {
    return (
        <Box display='flex' flexDirection='column' width={200} height={400}>
            <img src={image} alt={countryName} />
            <Typography>{countryName}</Typography>
            <Typography>Population: {countryPopulation}</Typography>
            <Typography>Region: {countryRegion}</Typography>
            <Typography>Capital: {countryCapital}</Typography>
        </Box>    
    )
}

export default CommonCard;