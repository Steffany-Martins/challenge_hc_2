import { Button, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container, Avatar} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { Copyright } from '@material-ui/icons';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    padding: 10,
  },
}));
interface submitData {
  clientName: string,
  clientLast: string,
  Address: string,
  idClient: number,
}

function Client() {
  const classes = useStyles();
  const { register, setValue, handleSubmit } = useForm();

  useEffect(() => {
    register('clientName', {required: true});
    register('clientLast', {required: true});
    register('Address', {required: true});
    register('idClient', {required: true}); 
  }, [register]);

  const onSubmit = (data: submitData) => {
    let listClient = JSON.parse(localStorage.getItem('repositoryClient') || "[]");
    listClient.push({
      clientName: data.clientName,
      clientLast: data.clientLast,
      Address: data.Address,
      idClient: data.idClient
    })
    localStorage.setItem('repositoryClient', JSON.stringify(listClient));
  }
  return (
    <Container maxWidth="xs">
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Cadastrar Cliente
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="cname"
              name="clientName"
              variant="outlined"
              required
              fullWidth
              id="clientName"
              label="Client Name"
              onChange={e => setValue('clientName', e.target.value)}
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="clientLast"
              label="Last Name"
              name="clientLast"
              onChange={e => setValue('clientLast', e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="Address"
              label="Address Client"
              name="Address"
              onChange={e => setValue('Address', e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="idClient"
              label="idClient"
              type="number"
              onChange={e => setValue('idClient', e.target.value)}
              id="idClient"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="Aceito os termos de uso."
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Cadastrar
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="/" variant="body2">
             Quer voltar ao início?
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
    <Box mt={1}>
      <Typography component="p">
      <Copyright />
         Steffany Martins Soares
      </Typography>
    </Box>
  </Container>
  )
}
export default Client;

