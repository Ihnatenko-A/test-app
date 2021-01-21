import React, { FunctionComponent, useReducer } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container'; 
import IconButton from '@material-ui/core/IconButton';

import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme: Theme) =>
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

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  position: '',
  phone: '',
  location: '',
}

const reducer = (state: any, action: any) => {
  switch(action.type) {
    case 'input':
      return {
        ...state,
        [action.name]: action.payload,
      }
  }
}

const CreateContactModal:FunctionComponent<{isOpened?: boolean}> = ({isOpened = false}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(isOpened);
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = () => {
    console.log(state)
  }

  const handleInput = (event: any) => {
    dispatch({
      type: 'input',
      name: event.target.name,
      payload: event.target.value,
    })
  }


  return (
    <>
      <Button className={classes.button} onClick={handleOpen}>
        <AddCircleOutlineOutlinedIcon className={classes.icon}/>
        Add Contact
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Paper className={classes.paper}>
            <Grid className={classes.header}>
              <Container>
                <Grid container justify="space-between">
                  <Typography variant="h5" className={classes.heading}>
                    Create Vendor Contact
                  </Typography>
                  <IconButton onClick={handleClose}>
                    <CloseIcon/>
                  </IconButton>
                </Grid>
              </Container>
            </Grid>
            <Divider variant="inset" className={classes.divider}/>
            <Grid className={classes.body}>
              <Container maxWidth="xs">

                <form className={classes.form} noValidate>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        name="firstName"
                        fullWidth
                        id="firstName"
                        label="First Name"
                        onChange={handleInput}
                        value={state.firstName}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        onChange={handleInput}
                        value={state.lastName}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        onChange={handleInput}
                        value={state.email}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        name="position"
                        fullWidth
                        id="position"
                        label="Position"
                        onChange={handleInput}
                        value={state.position}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        id="phone"
                        label="Phone"
                        name="phone"
                        onChange={handleInput}
                        value={state.phone}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        name="location"
                        label="Location"
                        id="location"
                        onChange={handleInput}
                        value={state.location}
                      />
                    </Grid>
                  
                    <Grid item sm={6}>
                      <Button
                        fullWidth
                        variant="outlined"
                        className={classes.submit}
                        onClick={handleClose}
                      >
                        Cancel
                      </Button>
                    </Grid>
                    <Grid item sm={6}>
                      <Button
                        onClick={onSubmit}
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                      >
                        Save
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Container>

            </Grid>
          </Paper>
        </Fade>
      </Modal>
    </>
  );
}

export default CreateContactModal;
