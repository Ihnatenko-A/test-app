import { FunctionComponent } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import GoogleMapReact from 'google-map-react';

import { useStyles } from './styles';

const MapTab:FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Container>
        <Grid className={classes.locationBlock}>
          <Typography className={classes.heading}>
            Locations
          </Typography>
          <div style={{ height: '360px', width: '100%' }}>
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
        <Grid>
          <Typography className={classes.heading}>
            Additional Info
          </Typography>
        </Grid>
      </Container>
    </Grid>
  );
};

export default MapTab;
