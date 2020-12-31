import {createContext} from 'react';

const fetch_apiData = createContext( 
    async function fetchData() { 
        const responseApi = await fetch('https://restcountries.eu/rest/v2/all')
        let data = await responseApi.json()
        Object.keys(data).map(obj => {
            console.log(data[obj].population)
        })
    }
);

export default fetch_apiData;