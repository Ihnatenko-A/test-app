import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
  button: {
    padding: 20,
    borderRight: '1px solid rgba(0, 0, 0, 0.12)',
    opacity: 0.5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
  navbar: {
    marginBottom: 50,
  },
  navTitleBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
  },
  navTitle: {
    fontWeight: 'bold',
  }
}));
