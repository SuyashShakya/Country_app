import axios from 'axios';

const baseUrl = 'https://restcountries.com/v2';

export const getAllCountries = async () => {
    try {
        const data = await axios.get(`${baseUrl}/all`)
        return data;
    } catch(e) {
        console.error('Error:', e)
    }
}