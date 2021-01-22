import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: '20px 0'
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
  },
  mobileCard: {
    marginBottom: 8,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  text: {
    marginBottom: 8,
  },
  rowIcon: {
    fontSize: 15,
    opacity: 0.5,
    marginRight: 5,
  }
}));
