import { FunctionComponent } from 'react';

import { Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 80,
    height: 80
  },
  cardLinks: {
    width: 250,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  media: {
    padding: '20px 50px',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  heading: {
    display: 'flex',
  },
  socialMedia: {
    display: 'flex',
    marginLeft: 10,
  },
  socialLink: {
    color: 'black'
  },
  location: {
    display: 'flex',
    alignItems: 'center',
  },
  description: {
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    overflow: 'hidden',
  },
  details: {
    display: 'flex',
  },
  detail: {
    display: 'flex',
    alignItems: 'center',
    marginRight: 25
  },
  icon: {
    marginRight: 10,
    opacity: 0.3,
  },
  profileButton: {
    marginBottom: 20,
    textDecoration: 'none',
  }
});

const SupplierCard:FunctionComponent<{supplier:ISupplier}> = ({ supplier }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
        <Card elevation={3} className={classes.card}>
          <div className={classes.media}>
            <Hidden xsDown>
              <CardMedia className={classes.cardMedia} image={supplier.logo_url} title="card picture"/>
            </Hidden>
          </div>
          <div className={classes.cardDetails}>
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
          </div>

          <div className={classes.cardLinks}>
            <Link to={`/supplier/${supplier.company_id}`} className={classes.profileButton}>
              <Button variant="contained" color="primary">
                Profile
              </Button>
            </Link>

            <Button variant="contained" color="secondary" href={supplier.website} target="_blank">
              Website
            </Button>
          </div>
        </Card>
    </Grid>
  )
}

export default SupplierCard;
