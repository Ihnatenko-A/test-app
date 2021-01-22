import React from 'react';
import { FunctionComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import Modal from './components/CreateContactModal';
import ContactRow from './components/ContactRow';

import { contacts } from './utils';
import { useStyles } from './styles';

const ContactsTab:FunctionComponent = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <Container>
        <Grid  className={classes.header}>
          <Typography component="h5" className={classes.heading}>
            My Contacts
          </Typography>
          <Modal/>
        </Grid>
        <Hidden xsDown>
          <Divider variant="inset" className={classes.divider}/>
        </Hidden>
        <List className={classes.body}>
          {contacts.map((contact) => (
            <React.Fragment key={contact.id}>
              <Hidden xsDown>
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
              </Hidden>
              
              <Hidden smUp>
                <Card className={classes.mobileCard} variant="outlined">
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      {contact.name}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      here
                    </Typography>
                    <Typography variant="body2" component="p" className={classes.text}>
                      <LocationOnOutlinedIcon className={classes.rowIcon}/>
                      {contact.location}
                    </Typography>
                  
                    <Typography variant="body2" component="p" className={classes.text}>
                      <MailOutlineIcon className={classes.rowIcon}/>
                      {contact.email}
                    </Typography>
                  
                    <Typography variant="body2" component="p" className={classes.text}>
                      <PhoneIcon className={classes.rowIcon}/>
                      {contact.phone}
                    </Typography>
                  </CardContent>
                </Card>
              </Hidden>

            </React.Fragment>
          ))}
        </List>
      </Container>
    </Grid>
  )
}

export default ContactsTab;
