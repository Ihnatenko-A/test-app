import { useEffect, useState, FunctionComponent } from 'react';

import { RouteComponentProps } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import { makeStyles } from '@material-ui/core/styles';

import Details from './components/Details';
import MapTab from './components/MapTab';
import ContactsTab from './components/ContactsTab';

import { getSupplier } from './utils'; 

import { ISupplier } from 'interfaces';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // flexWrap: 'wrap',
    // flexDirection: 'column',
    width: '100%'
  },
  header: {
    padding: '20px 50px 0 50px'
  },
  button: {
    boxSizing: 'border-box',
    padding: '15px 8px',
    textTransform: 'capitalize',
    borderRadius: 0,
    borderBottom: '2px solid transparent'
  },
  divider: {
    marginLeft: 0,
  },
  active: {
    borderBottom: '2px solid black',
  }
}));

type TParams = { id: string };

const getTab = (tab:string) => {

  switch(tab) {
    case '1':
      return <MapTab />
    case '2':
      return <ContactsTab />
  }
};

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
}

const SupplierPage:FunctionComponent<any> = ({ match }: RouteComponentProps<TParams>) => {
  const classes = useStyles();

  const [supplier, setSupplier] = useState<ISupplier>(initialSupplierState);

  const [tab, setTab] = useState('1');

  const { id } = match.params

  useEffect(() => {
    getSupplier(id).then((res: any) => {
      setSupplier(res);
    });
  },[id])

  const handleClick = (e: any) => {
    setTab(e.currentTarget.dataset.tab);
  }

  return (
    <>
      <CssBaseline/>
      <Container maxWidth="lg">
        <Paper elevation={3}>
          <div className={classes.root}>
            <Grid item xs={4}>
              <Details supplier={supplier}/>
            </Grid>
            <Grid item xs={8}>
              <Paper elevation={0} square className={classes.header}>
                <Button data-tab='1' onClick={handleClick} className={`${classes.button} ${tab === '1' && classes.active}`}>Company Profile</Button>
                <Button data-tab="2" onClick={handleClick} className={`${classes.button} ${tab === '2' && classes.active}`}>Contacts</Button>
              </Paper>
              <Divider variant="inset" className={classes.divider}/>
              <Grid>
                {getTab(tab)}
              </Grid>
            </Grid>
          </div>
        </Paper>
      </Container>
    </>
  );
};

export default SupplierPage;
