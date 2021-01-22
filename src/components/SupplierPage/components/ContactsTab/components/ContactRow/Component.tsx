import { FunctionComponent } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'

import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import { useStyles } from './styles';

const ContactRow:FunctionComponent<{
  name: string,
  location: string,
  email: string,
  phone: string,
}> = ({name, location, email, phone}) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.row}>
      <Grid item xs={2}>
        <Typography className={classes.nameText}>
          {name}
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography className={classes.smallText}>
          <LocationOnOutlinedIcon className={classes.rowIcon}/>
          {location}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography className={classes.smallText}>
          <MailOutlineIcon className={classes.rowIcon}/>
          {email}
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography className={classes.smallText}>
          <PhoneIcon className={classes.rowIcon}/>
          {phone}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default ContactRow;
