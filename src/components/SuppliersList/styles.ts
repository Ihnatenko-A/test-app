import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    width: '100%',
    paddingTop: 60,
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
