import { useState, useEffect, FunctionComponent } from 'react';

import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import InputAdornment from '@material-ui/core/InputAdornment';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'

import SearchIcon from '@material-ui/icons/Search';

import Card from 'components/Card';

import { useStyles } from './styles';
import { ISupplier, IData } from 'interfaces';

const SuppliersList:FunctionComponent<{data: IData, setActiveSupplier: any, activeSupplier: string}> = ({data, setActiveSupplier, activeSupplier}) => {
  const classes = useStyles();

  const [searchValue, setSearchValue] = useState('');

  const [suppliers, setSuppliers] = useState<ISupplier[]>([]);

  useEffect(() => {
    const suppliersIds = Object.keys(data);

    const filteredSuppliers: ISupplier[] = [];

    suppliersIds.forEach((id: string) => {
      if (data[id].company.toLowerCase().trim().includes(searchValue.toLowerCase().trim())) {
        filteredSuppliers.push(data[id]);
      }
    });
    setSuppliers(filteredSuppliers);

    if (activeSupplier) {
      setActiveSupplier('')
    }

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
};

export default SuppliersList;
