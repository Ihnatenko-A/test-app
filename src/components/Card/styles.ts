import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 80,
    height: 80
  },
  cardLinks: {
    alignItems: 'center',
  },
  media: {
    padding: '20px 0',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  heading: {
    display: 'flex',
  },
  socialMedia: {
    display: 'flex',
    marginLeft: 10,
  },
  socialLink: {
    color: 'black'
  },
  location: {
    display: 'flex',
    alignItems: 'center',
  },
  description: {
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    overflow: 'hidden',
  },
  details: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 8
  },
  detail: {
    display: 'flex',
    alignItems: 'center',
    marginRight: 25
  },
  icon: {
    marginRight: 10,
    opacity: 0.3,
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
  }
});
