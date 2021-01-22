import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  details: {
    borderRight: '1px solid rgba(0, 0, 0, 0.12)',
    padding: "20px 0"
  },
  detailsHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 30,
  },
  companyDetails: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 20
  },
  companyName: {
    fontWeight: 'bold',
  },
  companyLogo: {
    height: 75,
    width: 'auto',
  },
  socialMedia: {
    display: 'flex',
  },
  detailsBody: {
    display: 'flex',
  },
  titlesColumn: {
    opacity: 0.5
  },
  socialLink: {
    color: 'black'
  },
  icon: {
    marginRight: 10,
    opacity: 0.3,
  },
  text: {
    fontSize: 14,
    marginBottom: 15,
    fontWeight: 'bold'
  },
}));
