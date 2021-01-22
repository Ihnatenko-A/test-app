import { FunctionComponent } from 'react';

import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';

import { ISuppliersData } from 'interfaces';

import { useStyles } from './styles';

const NavBar:FunctionComponent<{suppliersData: ISuppliersData, activeSupplierId: string}> = ({suppliersData, activeSupplierId}) =>  {
  const classes = useStyles();

  return (
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
                  {suppliersData[activeSupplierId]?.company}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </nav>
  );
};

export default NavBar;
