import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { useEffect, useState } from 'react';
import BarChart from '../BarChart';
import { Pie } from 'react-chartjs-2';

import '../App.css';
import NumberFormat from 'react-number-format';





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
    },
}));

export default function InfoPanel({search}) {
    const classes = useStyles();
    const [countries, setCountries] = useState([])
    //--Fetching APi Data----------
    let [isFetching, setFetching] = useState(false);

    //const [search, setSearch] = useState('')
    //const [filteredCountries, setFilteredCountries] = useState([]);

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

    /* useEffect(() => {
        setFilteredCountries(countries.filter((country) =>
            country.name.toLowerCase().includes(search[0].toLowerCase())

        )
        );
    }, [search[0], countries]);
 */
    if (isFetching) {
        return <div>Api Fetching Data ...</div>
    }


    const filteredCountries = countries.filter( country => {
        return country.name.toLowerCase().includes(search[0].toLowerCase()) })

    return (
        <div className={classes.root}>
            
            <BarChart panelData={countries} />
            <span>*Mouse effect on Flag & PieChart</span>
            <Grid container spacing={3}>
                {filteredCountries.map((key, idx) =>
                    (<Grid item xs={12} sm={4} key={idx}>
                        <Paper className={classes.paper} elevation={3}>
                            <strong >{key.name}</strong><br />
                            {key.capital} <br />
                            {key.languages[0].name} 
                            ({key.languages[0].nativeName})
                            <div className="zoom"><img className={classes.img1} src={key.flag} width="30" height="30" alt="Flag" /></div><br /><br />
                            <div className="zoom1" ><Pie data={{
                                labels: [
                                    [key.name, "has", ((key.population / 7794798739) * 100).toPrecision(2), "%", "of"],
                                    ['World Total Population:(7,79,47,98,739)']
                                ],
                                datasets: [{
                                    data: [((key.population / 7794798739) * 100).toFixed(2), (100 - ((key.population / 7794798739) * 100)).toFixed(2)],
                                    backgroundColor: [
                                        '#FF6384',
                                        '#36A2EB',
                                        '#FFCE56'
                                    ],
                                    hoverBackgroundColor: [
                                        '#FF6384',
                                        '#36A2EB',
                                        '#FFCE56'
                                    ]
                                }]
                            }}
                            /></div>
                            <strong>{key.name}</strong> total population:
                            <strong>
                                <NumberFormat value={key.population} displayType={'text'} thousandSeparator={true} />
                            </strong> <br />
                        </Paper>
                    </Grid>

                    )
                )}
            </Grid>
        </div>

    );
}