import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
    },
    header: {
      padding: '20px 0'
    },
    heading: {
      fontWeight: 'bold',
    },
    divider: {
      marginLeft: 0,
    },
    body: {
      padding: '20px 0'
    },
    button: {
      textTransform: 'capitalize',
    },
    icon: {
      marginRight: 10,
    },
    form: {
      width: '100%',
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }),
);
