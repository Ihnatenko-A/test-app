import { useState, useEffect, FunctionComponent } from 'react';

import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import InputAdornment from '@material-ui/core/InputAdornment';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles';

import SearchIcon from '@material-ui/icons/Search';

import Card from 'components/Card';

import { getSuppliers } from './utils';
import { ISupplier, IData } from 'interfaces';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    width: '100%'
  },
  heading: {
    fontWeight: 'bold',
    marginBottom: 15
  },
  searchBar: {
    display: 'flex',
    width: '100%',
    padding: 10,
  },
  searchBarContainer: {
    padding: 8
  },
  card: {
    margin: '5px 0',
  },
  cards: {
    display: 'flex',
    flexDirection: 'column',
    padding: '8px',
    boxSizing: 'border-box',
    width: '100%',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
}));


const SuppliersPage:FunctionComponent = () => {
  const classes = useStyles();

  const [searchValue, setSearchValue] = useState('');

  const [data, setData] = useState<IData>({});

  const [suppliers, setSuppliers] = useState<ISupplier[]>([]);

  useEffect(() => {
    getSuppliers().then((res: any) => {
      setData(res)
    });
  }, [])

  useEffect(() => {
    const keys = Object.keys(data);

    const array: ISupplier[] = [];

    keys.forEach((key: string) => {
      if (data[key].company.toLowerCase().trim().includes(searchValue.toLowerCase().trim())) {
        array.push(data[key]);
      }
    });
    setSuppliers(array);

    console.log(array)
  }, [searchValue, data])

  const handleChange = (prop: any) => (event: any) => {
    setSearchValue(event.target.value);
  };


  return (
    <Container maxWidth="lg">
      <div className={classes.root}>
        <Grid container className={classes.searchBarContainer}>
          <Typography variant="h4" className={classes.heading}>
            My Suppliers
          </Typography>
          <Paper elevation={3} className={classes.searchBar}>
            <FormControl fullWidth className={classes.margin} variant="outlined">
              <InputBase
                id="outlined-adornment-amount"
                value={searchValue}
                onChange={handleChange('amount')}
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon/>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Paper>
        </Grid>
        <div className={classes.cards}>
          {suppliers.map((supplier: ISupplier) => (
            <div className={classes.card} key={supplier.company_id}>
              <Card supplier={supplier} />
            </div>
            ))}
        </div>
      </div>
    </Container>
  );
}

export default SuppliersPage;
