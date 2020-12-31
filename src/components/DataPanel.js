import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { useEffect, useState, useContext } from 'react';
import PieChart from '../pieChart';
import { lightBlue, lightGreen } from '@material-ui/core/colors';
import BarChart from '../BarChart';
import fetch_apiData from '../context/GlobalState';
import { Pie } from 'react-chartjs-2';
import { CountryDetails } from './CountryDetails';



const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1000,
        margin: '0 auto',
        marginTop: 50
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: 'lightBlue'
    },
    img1: {
        padding: 10,
        float: 'right'
    }
}));






export default function InfoPanel() {
    const classes = useStyles();
    const [countries, setCountries] = useState([])
    //--Fetching APi Data----------
    let [isFetching, setFetching] = useState(false);

    const [search, setSearch] = useState('')
    const [filteredCountries, setFilteredCountries] = useState([]);

    useEffect(() => {
        async function fetchData() {
            setFetching(true)
            const responseApi = await fetch('https://restcountries.eu/rest/v2/all')
            let data1 = await responseApi.json()
            console.log("Panel Data", data1);
            setCountries(data1)
            setFetching(false)
        }
        fetchData()

    }, [])
    useEffect(() => {
        setFilteredCountries(countries.filter((country) =>
            country.name.toLowerCase().includes(search.toLowerCase())
        )
        );
    }, [search, countries]);

    if (isFetching) {
        return <div>Api Fetching Data ...</div>
    }


    


    return (
        <div className={classes.root}>
            
            <input
                type="text"
                placeholder="Search Countries"
                onChange={(e) => setSearch(e.target.value)}
            />
            
            <BarChart panelData={countries} />
            <Grid container spacing={3}>
                {filteredCountries.map((key, idx) =>
                         (<Grid item xs={12} sm={4} key={idx}>
                        <Paper className={classes.paper} elevation={3}>
                            <strong>{key.name}</strong>
                            <img className={classes.img1} src={key.flag} width="30" height="30" /><br /><br />
                            {/* const pieData = []
                            pieData = apiData[key].population
                            <Pie data={pieData} /> */}
                            Population:{key.population} <br />
                        </Paper>
                    </Grid>

                    )
                )}
            </Grid>
        </div>

    );
}
