import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%'
  },
  header: {
    padding: '20px 0 0 0'
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
