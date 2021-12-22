import React, {useContext} from 'react';
import isEmpty from 'lodash/isEmpty';
import { getAllCountries, searchCountryWithName, searchCountryWithRegion } from '../api/apiCalls';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CommonCard from './common/commonCard';
import {ThemeWrapper} from '../App';
import Search from './search';
import Filter from './filter';

const Body = ({history}) => {
    const [data, setData] = React.useState();
    const [searchCountry, setSearchCountry] = React.useState();
    const [filteredRegion, setFilteredRegion] = React.useState();
    const {theme} = useContext(ThemeWrapper);
    const muiTheme = useTheme();
	const isMediumScreen = useMediaQuery(muiTheme.breakpoints.down('md'));
    const isSmallScreen = useMediaQuery(muiTheme.breakpoints.down('sm'));

    React.useEffect(() => {
        if(searchCountry){
            const fetchData = async () => {
                const data = await searchCountryWithName({name: searchCountry});
                data && setData(data?.data)
            }
            fetchData();  
        } else if(filteredRegion){
            const fetchData = async () => {
                const data = await searchCountryWithRegion({region: filteredRegion});
                data && setData(data?.data)
            }
            fetchData();  
        } else {
            const fetchData = async () => {
                const data = await getAllCountries();
                data && setData(data?.data)
            }
            fetchData();  
        }
    }, [searchCountry, filteredRegion])
    

    const searchText = (e) => {
        e.preventDefault();
        setSearchCountry(e.target.value)
    }

    const filterResult = (e) => {
        e.preventDefault();
        setFilteredRegion(e.target.value)
    }

    if(isEmpty(data)){
        return (
            <Box display='flex' height='100vh' alignItems='center' justifyContent='center'>
                Loading &nbsp;&nbsp;<CircularProgress size={15} color='secondary'/>
            </Box>
        )  
    } 
    
    return (
        <Box p={isMediumScreen ? 1 : 5} bgcolor={theme.palette.primary.main}>
            <Box 
                display='flex' 
                ml={!isMediumScreen ? 5 : (!isMediumScreen && !isSmallScreen) ? 1 : 0} 
                mr={!isMediumScreen ? 8 : 1} 
                p={1} 
                flexDirection={isMediumScreen ? 'column' : 'row'} 
                justifyContent='space-between'
            >
                <Search onChange={searchText} />
                <br />
                <Filter handleChange={filterResult}/>
            </Box>
            {data?.status === 404 ?
                <Box display='flex' height='100vh' alignItems='center' justifyContent='center'>
                    <center>Not Found &nbsp;&nbsp;<CircularProgress size={15} color='secondary'/></center>
                </Box> 
                :
                <Box display='flex' flexWrap='wrap'>
                    { data?.map((item) => (
                            <CommonCard key={item?.name?.common} image={item?.flags?.png} countryName={item?.name?.common} countryPopulation={item?.population} countryRegion={item?.region} countryCapital={item?.capital} onClick={() => history.push(`/${item?.name?.common}`)}/>
                    ))}
                </Box>
            }    
        </Box>
    )
}

export default Body;