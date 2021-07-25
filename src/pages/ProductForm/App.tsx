import { Button, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container, Avatar} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { Copyright } from '@material-ui/icons';
import React, { useEffect } from 'react';
import {useForm} from 'react-hook-form';

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
  productName: string,
  clientId: number,
  category: string,
  idProduto: number,
}

function Product() {
  const classes = useStyles();
  const { register, setValue, handleSubmit } = useForm();

  useEffect(() => {
    register('productName', {required: true});
    register('clientId', {required: true});
    register('category', {required: true});
    register('idProduto', {required: true});
    
  }, [register]);

  const onSubmit = (data: submitData) => {
    let listProduct = JSON.parse(localStorage.getItem('repositoryProduct') || "[]");
    listProduct.push({
      productName: data.productName,
      clientId: data.clientId,
      category: data.category,
      idProduto: data.idProduto
    })
    localStorage.setItem('repositoryProduct', JSON.stringify(listProduct));
  }
  return (
    <Container maxWidth="xs">
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Cadastrar Produto
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="pname"
              name="productName"
              variant="outlined"
              required
              fullWidth
              id="productName"
              label="Product Name"
              onChange={e => setValue('productName', e.target.value)}
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="clientId"
              type="number"
              label="Product Client ID"
              name="clientId"
              onChange={e => setValue('clientId', e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="category"
              label="Category Product"
              name="category"
              onChange={e => setValue('category', e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="idProduto"
              label="idProduto"
              type="number"
              id="idProduto"
              onChange={e => setValue('idProduto', e.target.value)}
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

export default Product;
