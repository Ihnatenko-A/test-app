import { FunctionComponent } from 'react';

import { Link } from "react-router-dom";

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';

import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import BusinessIcon from '@material-ui/icons/Business';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import FlagOutlinedIcon from '@material-ui/icons/FlagOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';

import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import { numberWithCommas, getShortNumber, getLocation } from 'helpers';

import { ISupplier } from 'interfaces';

import { useStyles } from './styles';

const SupplierCard:FunctionComponent<{supplier:ISupplier}> = ({ supplier }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
        <Card elevation={3} className={classes.card}>
          <Grid container>
            <Grid item xs={12} sm={3} md={2} className={classes.media}>
              <Hidden >
                <CardMedia className={classes.cardMedia} image={supplier.logo_url} title="card picture"/>
              </Hidden>
            </Grid>
            <Grid item sm={6} md={7}>
              <CardContent>
                <div className={classes.heading}>
                  <Typography variant="h6">
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
                      <Typography component="a" href={supplier.linkedin_url} className={classes.socialLink}>
                        <LinkedInIcon className={classes.icon} />
                      </Typography>
                    )}
                  </div>
                </div>
                <div className={classes.location}>
                  <LocationOnOutlinedIcon className={classes.icon}/>
                  <Typography variant="subtitle1" color="textSecondary">
                    {getLocation(supplier)}
                  </Typography>
                </div>
                <div className={classes.description} >
                  <Typography variant="subtitle1" paragraph>
                    {supplier.description}
                  </Typography>
                </div>
                <div className={classes.details}>
                  <Typography className={classes.detail} paragraph>
                    <BusinessIcon className={classes.icon} />
                    {supplier.type}
                  </Typography>

                  <Typography className={classes.detail} paragraph>
                    <AccountCircleOutlinedIcon className={classes.icon} />
                    {numberWithCommas(supplier.employee_count)}
                  </Typography>

                  {supplier.year && (
                    <Typography className={classes.detail} paragraph>
                      <FlagOutlinedIcon className={classes.icon} />
                      {supplier.year}
                    </Typography>
                  )}

                  {supplier.revenue && (
                    <Typography className={classes.detail} paragraph>
                      <MonetizationOnOutlinedIcon className={classes.icon} />
                      {getShortNumber(supplier.revenue)}
                    </Typography>
                  )}

                  <Typography paragraph>
                    <BusinessCenterIcon className={classes.icon} />
                    {supplier.industry}
                  </Typography>
                </div>
              </CardContent>
            </Grid>

            <Grid item xs={12} sm={3} md={3} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Grid container justify="center" alignItems="center" spacing={3} style={{padding: '10px 0'}}>
                <Grid item xs={3} sm={12} className={classes.buttonWrapper}>
                  <Button component={Link} to={`/supplier/${supplier.company_id}`} variant="contained" style={{backgroundColor: '#cfe2f3'}}>
                    Profile
                  </Button>
                </Grid>
                
                <Grid item xs={3} sm={12} className={classes.buttonWrapper}>
                  <Button component="a" variant="contained" href={supplier.website} target="_blank" style={{backgroundColor: 'transparent', boxShadow: 'none', border: '2px solid #f1f1f1'}}>
                    Website
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Card>
    </Grid>
  );
};

export default SupplierCard;
