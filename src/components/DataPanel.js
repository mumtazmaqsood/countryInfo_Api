import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { useEffect, useState } from 'react';
import PieChart from '../pieChart';
import { lightBlue, lightGreen } from '@material-ui/core/colors';



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
        float:'right'
    }
}));

export default function InfoPanel() {
    const classes = useStyles();
    const [apiData, setApiData] = useState([{}])
    //--Fetching APi Data----------

    let [isFetching, setFetching] = useState(false);
    useEffect(() => {
        async function fetchData() {
            setFetching(true)
            const responseApi = await fetch('https://restcountries.eu/rest/v2/all')
            let data = await responseApi.json()
            console.log(data);
            setApiData(data)
            setFetching(false)
        }
        fetchData();
    }, [])

    if (isFetching) {
        return <div>Api Fetching Data ...</div>
    }

    //-----------------------------

    /*
    <ul>
            {apiData.map((countryObj, ind) => {
              return (
                <li key={ind}>
                  <PieChart />
                  <img src={countryObj.flag} width="20" height="20" /><br />
                  <strong>{countryObj.name}</strong><br />
                  Native Name:{countryObj.nativeName} <br />
                  Region:{countryObj.region} <br />
                  Population:{countryObj.population}
                </li>)
            })}
          </ul>
    */

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {Object.keys(apiData).map( (key, index) => {
                    return (<Grid item xs={12} sm={4} key={index}>
                        <Paper className={classes.paper} elevation={3}>
                            {/*<PieChart />*/}
                            <strong>{apiData[key].name}</strong>
                            <img className={classes.img1} src={apiData[key].flag} width="30" height="30" /><br /><br />
                            Population:{apiData[key].population} <br />
                        </Paper>
                    </Grid>

                    )
                })}
            </Grid>
        </div>
    );
}
