import { FunctionComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';

import { makeStyles } from '@material-ui/core/styles';

import Modal from './components/CreateContactModal';
import ContactRow from './components/ContactRow';

const contacts = [
  {
    name: 'Sven Sven',
    location: 'Curnovec, SI',
    email: 'sven@brembo.com',
    phone: '+1 12314123',
    additional: 'Here',
    id: '1',
  },
  {
    name: 'Sven Sven',
    location: 'Curnovec, SI',
    email: 'sven@brembo.com',
    phone: '+1 12314123',
    additional: 'Here',
    id: '2',
  },
  {
    name: 'Sven Sven',
    location: 'Curnovec, SI',
    email: 'sven@brembo.com',
    phone: '+1 12314123',
    additional: 'Here',
    id: '3',
  },
  {
    name: 'Sven Sven',
    location: 'Curnovec, SI',
    email: 'sven@brembo.com',
    phone: '+1 12314123',
    additional: 'Here',
    id: '4',
  },
  {
    name: 'Sven Sven',
    location: 'Curnovec, SI',
    email: 'sven@brembo.com',
    phone: '+1 12314123',
    additional: 'Here',
    id: '5',
  },
  {
    name: 'Sven Sven',
    location: 'Curnovec, SI',
    email: 'sven@brembo.com',
    phone: '+1 12314123',
    additional: 'Here',
    id: '6',
  },
  {
    name: 'Sven Sven',
    location: 'Curnovec, SI',
    email: 'sven@brembo.com',
    phone: '+1 12314123',
    additional: 'Here',
    id: '7',
  },
  {
    name: 'Sven Sven',
    location: 'Curnovec, SI',
    email: 'sven@brembo.com',
    phone: '+1 12314123',
    additional: 'Here',
    id: '8',
  },
  {
    name: 'Sven Sven',
    location: 'Curnovec, SI',
    email: 'sven@brembo.com',
    phone: '+1 12314123',
    additional: 'Here',
    id: '9',
  },
  {
    name: 'Sven Sven',
    location: 'Curnovec, SI',
    email: 'sven@brembo.com',
    phone: '+1 12314123',
    additional: 'Here',
    id: '10',
  },
  {
    name: 'Sven Sven',
    location: 'Curnovec, SI',
    email: 'sven@brembo.com',
    phone: '+1 12314123',
    additional: 'Here',
    id: '11',
  },
  {
    name: 'Sven Sven',
    location: 'Curnovec, SI',
    email: 'sven@brembo.com',
    phone: '+1 12314123',
    additional: 'Here',
    id: '12',
  },
]

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '20px 60px'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
  },
  heading: {
    fontWeight: 'bold',
  },

  divider: {
    marginLeft: 0
  },
  locationBlock: {
    marginBottom: 40,
  },
  body: {
    maxHeight: 500,
    overflowY: 'scroll',
    paddingTop: 0,
    paddingBottom: 0
  },
  additional: {
    fontSize: 11,
    opacity: 0.5
  }
}));

const ContactsTab:FunctionComponent = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <Grid  className={classes.header}>
        <Typography component="h5" className={classes.heading}>
          My Contacts
        </Typography>
        <Modal/>
      </Grid>
      <Divider variant="inset" className={classes.divider}/>
      <List className={classes.body}>
        {contacts.map((contact) => (
          <div key={contact.id}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  SS
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <ContactRow
                    name={contact.name}
                    location={contact.location}
                    email={contact.email}
                    phone={contact.phone} 
                  />
                }
                secondary={
                  <Typography className={classes.additional}>
                    {contact.additional}
                  </Typography>
                } 
              />
            </ListItem>
            <Divider variant="inset" className={classes.divider}/>
          </div>
        ))}
      </List>
    </Grid>
  )
}

export default ContactsTab;
