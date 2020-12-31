import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { useEffect, useState, useContext } from 'react';
import PieChart from '../pieChart';
import { lightBlue, lightGreen } from '@material-ui/core/colors';
import BarChart from '../BarChart';
import fetch_apiData from '../context/GlobalState';
import { Pie } from 'react-chartjs-2';


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



export const CountryDetails = (props) => {
    const classes = useStyles();
    const {name, flag, population} = props;
    return (
        <div>
            <Grid container spacing={3}>
                   <Grid item xs={12} sm={4} >
                        <Paper className={classes.paper} elevation={3}>
                            <strong>{name}</strong>
                            <img className={classes.img1} src={flag} width="30" height="30" /><br /><br />
                            Population:{population} <br />
                        </Paper>
                    </Grid>

            )   
            </Grid>
        </div>
    )
}
