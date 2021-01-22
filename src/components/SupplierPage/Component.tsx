import { useEffect, useState, FunctionComponent } from 'react';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import Details from './components/Details';
import MapTab from './components/MapTab';
import ContactsTab from './components/ContactsTab';

import { ISupplier, IData } from 'interfaces';

import { useStyles } from './styles'; 

const initialSupplierState = {
  "company": '',
  "company_id": '',
  "description": '',
  "employee_count": '',
  "hq_city": '',
  "hq_country": '',
  "hq_line1": '',
  "hq_line2": '',
  "industry":'',
  "linkedin_url": '',
  "logo_url": '',
  "revenue": '',
  "type": '',
  "website": '',
};

enum Tabs {
  mapTab,
  contactsTab,
};

const getTab = (tab:number) => {
  switch(tab) {
    case Tabs.mapTab:
      return <MapTab />
    case Tabs.contactsTab:
      return <ContactsTab />
  }
};

const SupplierPage:FunctionComponent<{match:any, data:IData, setActiveSupplier:any}> = ({match, data, setActiveSupplier}) => {
  const classes = useStyles();

  const [supplier, setSupplier] = useState<ISupplier>(initialSupplierState);

  const [tab, setTab] = useState(Tabs.mapTab);

  const { id } = match.params

  useEffect(() => {
    if (data[id]) {
      setSupplier(data[id]);
      setActiveSupplier(id);
    };
  }, [])

  const openMapTab = () => {
    setTab(Tabs.mapTab);
  };

  const openContactsTab = () => {
    setTab(Tabs.contactsTab);
  };

  return (
    <>
      <CssBaseline/>
      <Container maxWidth="lg">
        <Paper elevation={3}>
          <Grid container>
            <Grid item xs={12} md={4}>
              <Details supplier={supplier}/>
            </Grid>
            <Grid item xs={12} md={8}>
              <Paper elevation={0} square className={classes.header}>
                <Container>
                  <Button onClick={openMapTab} className={`${classes.button} ${(tab === Tabs.mapTab && classes.active) || ''}`}>Company Profile</Button>
                  <Button onClick={openContactsTab} className={`${classes.button} ${(tab === Tabs.contactsTab && classes.active) || ''}`}>Contacts</Button>
                </Container>
              </Paper>
              <Divider variant="inset" className={classes.divider}/>
              <Grid>
                {getTab(tab)}
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default SupplierPage;
