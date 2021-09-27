import React from 'react';
import { getAllCountries } from '../api/apiCalls';
import Box from '@material-ui/core/Box';
import CommonCard from './common/commonCard';

const Body = () => {
    const [data, setData] = React.useState();
    React.useEffect(() => {
        const fetchData = async () => {
            const data = await getAllCountries();
            data && setData(data?.data)
        }
        fetchData();    
    }, [])
    console.log('data', data)
    return (
        <Box display='flex' flexWrap='wrap'>
            {data && data.map((item, key) => (
                <CommonCard image={item?.flags[0]} countryName={item?.name} countryPopulation={item?.population} countryRegion={item?.region} countryCapital={item?.capital}/>
            ))}
        </Box>
    )
}

export default Body;