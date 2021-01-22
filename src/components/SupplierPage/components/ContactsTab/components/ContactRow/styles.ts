import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
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
