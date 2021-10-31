import React, {useContext} from 'react';
import Box from '@material-ui/core/Box';
import Button  from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {getCountryDetail} from '../api/apiCalls';
import {ThemeWrapper} from '../App';

const useStyles = makeStyles((theme) => ({
    buttonStyle: {
        backgroundColor: theme.palette.primary.light,
        textTransform: 'none',
        margin: 5
    },
    imageStyle: {
        maxWidth: 700,
        [theme.breakpoints.down('lg')]: {
            maxWidth: 600 
        },
        [theme.breakpoints.down('md')]: {
            maxWidth: 500 
        },
        [theme.breakpoints.down('sm')]: {
            maxWidth: 400 
        },
        [theme.breakpoints.down('xs')]: {
            maxWidth: 300 
        },
    }
}))

const DetailedComponent = ({history, match}) => {
    const classes = useStyles()
    const {theme} = useContext(ThemeWrapper);
    const muiTheme = useTheme();
    const isSmallScreen = useMediaQuery(muiTheme.breakpoints.down('sm'))
    const [data, setData] = React.useState();
    const name = match?.params?.country
    
    React.useEffect(() => {
        const fetchData = async () => {
            const data = await getCountryDetail({name});
            data && setData(data?.data[0])
        }
        fetchData();  
    }, [name])

    const nativeName = data?.name?.nativeName[Object.keys(data?.name?.nativeName)[0]]
    const currency = data?.currencies[Object.keys(data?.currencies)[0]]
    const languages = () => {
        const objectLength = data?.languages && Object.keys(data?.languages).length - 1;
        let language = '';
        for(var i = 0; i <= objectLength; i++){
            language = language ? `${language}, ${data?.languages[Object.keys(data?.languages)[i]]}` : data?.languages[Object.keys(data?.languages)[i]]
        }
        return language
    }
    const language = languages();

    const Border = () => {
     
        return(
            <>
                {data?.borders ? data?.borders.map((item) => {
                    return (
                        <Button key={item} variant='contained' className={classes.buttonStyle} onClick={() => history.push(`/${item}`)}>
                           <Typography color='textPrimary' variant='subtitle2'>{item}</Typography>  
                        </Button>   
                    )
                })
                :
                <>None</>
                }
            </>
        )
    }
  
    return (
        <Box p={5} height='100vh' bgcolor={theme.palette.primary.main}>
            <Button
                variant="contained"
                startIcon={<ArrowBackIcon />}
                className={classes.buttonStyle}
                onClick={() => history.push('/')}
                color='primary'
            >
                <Typography color='textPrimary' variant='subtitle2'>Back</Typography>   
            </Button>
            <br /> <br /> <br />
            {data ? 
                <Grid container spacing={8}>
                    <Grid item sm={12} md={6}>
                        <img src={data?.flags?.svg} className={classes.imageStyle} alt={data?.name?.common} />
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <Typography color='textPrimary' variant='h4'><b>{data?.name?.common}</b></Typography>
                        <br /> <br />
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={6}>
                                <Typography color='textPrimary' variant='subtitle2'>Official Name: {nativeName?.common}</Typography>
                                <Typography color='textPrimary' variant='subtitle2'>Population: {data?.population}</Typography>
                                <Typography color='textPrimary' variant='subtitle2'>Region: {data?.region}</Typography>
                                <Typography color='textPrimary' variant='subtitle2'>Sub Region: {data?.subregion}</Typography>
                                <Typography color='textPrimary' variant='subtitle2'>Capital: {data?.capital[0]}</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography color='textPrimary' variant='subtitle2'>Top level Domain: {data?.tld[0]}</Typography>
                                <Typography color='textPrimary' variant='subtitle2'>Currencies: {currency?.name}</Typography>
                                <Typography color='textPrimary' variant='subtitle2'>Language: {language}</Typography>
                            </Grid>
                        </Grid> 
                        <br /> <br />
                        <Typography color='textPrimary' variant='subtitle2'>Border Countries: {isSmallScreen && <br />}<Border /></Typography>   
                    </Grid>
                </Grid>
                :
                <Typography>No country found </Typography> 
            }         
        </Box>
    )
}

export default DetailedComponent;