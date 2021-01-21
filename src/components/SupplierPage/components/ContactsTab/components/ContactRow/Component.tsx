import { FunctionComponent } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'

import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  row: {
    display: 'flex',
  },
  nameText: {
    fontSize: 12,
    display: 'flex',
    alignItems: 'center'
  },
  smallText: {
    fontSize: 12,
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    top: 6
  },
  rowIcon: {
    fontSize: 15,
    opacity: 0.5,
    marginRight: 5,
  }
}));

const ContactRow:FunctionComponent<{
  name: string,
  location: string,
  email: string,
  phone: string,
}> = ({name, location, email, phone}) => {
  const classes = useStyles();
  return (
    <Grid className={classes.row}>
      <Grid item xs={3}>
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
      <Grid item xs={3}>
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
