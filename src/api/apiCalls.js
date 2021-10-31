import axios from 'axios';

const baseUrl = 'https://restcountries.com/v3.1';

export const getAllCountries = async () => {
    try {
        const data = await axios.get(`${baseUrl}/all`)
        return data;
    } catch(e) {
        console.error('Error:', e)
    }
}

export const searchCountryWithName = async ({name}) => {
    try {
        const data = await axios.get(`${baseUrl}/name/${name}`)
        return data;
    } catch(e) {
        console.error('Error:', e)
    }
}

export const searchCountryWithRegion = async ({region}) => {
    try {
        const data = await axios.get(`${baseUrl}/region/${region}`)
        return data;
    } catch(e) {
        console.error('Error:', e)
    }
}

export const getCountryDetail = async ({name}) => {
    try {
        const data = await axios.get(`${baseUrl}/name/${name}`)
        return data;
    } catch(e) {
        console.error('Error:', e)
    }
}

export const getName = async ({code}) => {
    try {
        const data = await axios.get(`${baseUrl}/alpha/${code}`)
        return data;
    } catch(e) {
        console.error('Error:', e)
    }
}
