import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import 'fontsource-roboto';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import SuppliersList from 'components/SuppliersList';
import SupplierPage from 'components/SupplierPage';

import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';

import { makeStyles } from '@material-ui/styles';
import { IData } from 'interfaces';

const useStyles = makeStyles((theme) => ({
  button: {
    padding: 20,
    borderRight: '1px solid rgba(0, 0, 0, 0.12)',
    opacity: 0.5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
  navbar: {
    marginBottom: 50,
  },
  navTitleBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
  },
  navTitle: {
    fontWeight: 'bold',
  }
}));


const App = () => {
  const classes = useStyles();
  const [data, setData] = useState<IData>({});
  const [activeSupplierId, setActiveSupplierId] = useState('');

  const getSuppliers = () => {
    return fetch('http://localhost:3001/suppliers')
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.error(err))
  }

  useEffect(() => {
    getSuppliers().then(data => {
      setData(data)
    })
  }, []);

  return (

    <Router basename="/">
      <div>
        <nav className={classes.navbar}>
          <Grid container>
            <Grid item xs={12}>
              <Paper square>
                <Grid container>
                  <Grid item>
                    <Link to="/" className={classes.button}>
                      <ArrowLeftIcon/>
                    </Link>  
                  </Grid>
                  <Grid item className={classes.navTitleBox}>
                    <Typography className={classes.navTitle}>
                      {data[activeSupplierId]?.company}
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </nav>

        <Switch>
          <Route
            exact
            path="/"
            component={
              (props:any) => 
                <SuppliersList 
                  {...props}
                  data={data} 
                  setActiveSupplier={setActiveSupplierId}
                  activeSupplier={activeSupplierId}
                />
              }
            />
          <Route
            exact
            path="/supplier/:id"
            component={
              (props: any) =>
                <SupplierPage
                  {...props}
                  data={data}
                  setActiveSupplier={setActiveSupplierId}
                />
              }
            />
        </Switch>
      </div>
    </Router>
  )
}
 

export default App;
