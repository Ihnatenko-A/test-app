import { FunctionComponent } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import GoogleMapReact from 'google-map-react';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '40px 60px'
  },
  heading: {
    fontWeight: 'bold',
    marginBottom: 12,
  },
  locationBlock: {
    marginBottom: 40,
  },
  InfoBlock: {

  }
  
}));

const MapTab:FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Grid className={classes.locationBlock}>
        <Typography className={classes.heading}>
          Locations
        </Typography>
        <div style={{ height: '400px', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyBrjNa777KvbqZgKOeFdh4tIL1xJJObpa4' }}
            yesIWantToUseGoogleMapApiInternals
            defaultCenter={
              {
                lat: 59.95,
                lng: 30.33
              }
            }
            defaultZoom={11}
          >
          </GoogleMapReact>
        </div>
      </Grid>
      <Grid className={classes.InfoBlock}>
        <Typography className={classes.heading}>
          Additional Info
        </Typography>
      </Grid>
    </Grid>
  );
};

export default MapTab;
