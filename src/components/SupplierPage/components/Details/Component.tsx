import { FunctionComponent } from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'

import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import { makeStyles } from '@material-ui/core/styles';
import { numberWithCommas, getShortNumber } from 'helpers'

import { ISupplier } from 'interfaces';


const useStyles = makeStyles((theme) => ({
  details: {
    borderRight: '1px solid rgba(0, 0, 0, 0.12)',
    padding: 40
  },
  detailsHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 30,
  },
  companyDetails: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 20
  },
  companyName: {
    fontWeight: 'bold',
  },
  companyLogo: {
    height: 75,
    width: 'auto',
  },
  socialMedia: {
    display: 'flex',
  },
  detailsBody: {
    display: 'flex',
  },
  titlesColumn: {
    opacity: 0.5
  },
  socialLink: {
    color: 'black'
  },
  icon: {
    marginRight: 10,
    opacity: 0.3,
  },
  text: {
    fontSize: 14,
    marginBottom: 15,
    fontWeight: 'bold'
  },
}));

const Details:FunctionComponent<{supplier: ISupplier}> = ({supplier}) => {
  const classes = useStyles();

  return (
    <>
      <Grid container>
        <Paper elevation={0} square className={classes.details}>
          <Grid item xs={12}>
            <Grid item className={classes.detailsHeader}>
              <img src={supplier.logo_url} alt="company logo" className={classes.companyLogo}/>
              <div className={classes.companyDetails}>
                <Typography variant="h6" className={classes.companyName}>
                  {supplier.company}
                </Typography>
                <div className={classes.socialMedia}>
                  {supplier.twitter_url && (
                    <Typography component="a" href={'#'} className={classes.socialLink }>
                      <TwitterIcon className={classes.icon} />
                    </Typography>
                  )}

                  {supplier.facebook_url && (
                    <Typography component="a" href={'#'} className={classes.socialLink} >
                      <FacebookIcon className={classes.icon} />
                    </Typography>
                  )}

                  {supplier.linkedin_url && (
                    <Typography component="a" href={'#'} className={classes.socialLink}>
                      <LinkedInIcon className={classes.icon} />
                    </Typography>
                  )}
                </div>
              </div>
            </Grid>
            <Grid>
              <Grid item xs={12} className={classes.detailsBody}>
                <Grid item xs={6} className={classes.titlesColumn}>
                  {supplier.phone && (
                    <Typography className={classes.text}>
                      Office Phone
                    </Typography>
                  )}
                  {supplier.industry && (
                    <Typography className={classes.text}>
                      Industry
                    </Typography>
                  )}
                  {supplier.employee_count && (
                    <Typography className={classes.text}>
                      Employees
                    </Typography>
                  )}
                  {supplier.revenue && (
                    <Typography className={classes.text}>
                      Estimated Revenue
                    </Typography>
                  )}
                  {supplier.founded_year && (
                    <Typography className={classes.text}>
                      Founded Year
                    </Typography>
                  )}
                  {supplier.type && (
                    <Typography className={classes.text}>
                      Type
                    </Typography>
                  )}
                  {supplier.locations && (
                    <Typography className={classes.text}>
                      Locations
                    </Typography>
                  )}
                  {supplier.hq_city && (
                    <Typography className={classes.text}>
                      Headquarters
                    </Typography>
                  )}
                  <Typography className={classes.text}>
                    Description
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  {supplier.phone && (
                    <Typography className={classes.text}>
                      +39 035 605 2090
                    </Typography>
                  )}
                  {supplier.industry && (
                    <Typography className={classes.text}>
                      {supplier.industry}
                    </Typography>
                  )}
                  {supplier.employee_count && (
                    <Typography className={classes.text}>
                      {numberWithCommas(supplier.employee_count)}
                    </Typography>
                  )}
                  {supplier.revenue && (
                    <Typography className={classes.text}>
                      {getShortNumber(supplier.revenue)}
                    </Typography>
                  )}
                  {supplier.founded_year && (
                    <Typography className={classes.text}>
                      {supplier.founded_year}
                    </Typography>
                  )}
                  {supplier.type && (
                    <Typography className={classes.text}>
                      {supplier.type}
                    </Typography>
                  )}
                  {supplier.locations && (
                    <Typography className={classes.text}>
                      1
                    </Typography>
                  )}
                  {supplier.hq_city && (
                    <Typography className={classes.text}>
                      {supplier.hq_city}
                    </Typography>
                  )}
                </Grid>
              </Grid>
              <Typography className={classes.text}>
                {supplier.description}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  )
}

export default Details;
