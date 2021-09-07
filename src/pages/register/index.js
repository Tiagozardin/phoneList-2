import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Grid, Typography, IconButton, Card, Toolbar,
  TextField, FormControl, InputLabel, Select,
  CardContent, CardActions, Button, Box, MenuItem,
} from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';

import useStyles from './styles';

export default function Register() {
  const classes = useStyles();

  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');

  const handleChangeSelect = (event) => {
    setType(event.target.value);
  };

  const handleChangeInput = (event, input) => {
    if (input === 'description') {
      setDescription(event.target.value);
    } else {
      setValue(event.target.value);
    }
  };

  const handleReset = () => {
    setDescription('');
    setValue('');
  };

  const handleSubmit = () => {
    // Enviar para algum lugar
  };

  return (
    <Grid item>
      <Toolbar>
        <Link to="/">
          <IconButton aria-label="back" component="span">
            <ArrowBack />
          </IconButton>
        </Link>
        <Typography variant="h6">
          Voltar
        </Typography>
      </Toolbar>

      <Grid item container spacing={3} alignItems="center" justify="center">
        <Grid item xs={12}>
          <Typography variant="h4" align="center">Cadastrar um Contato</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>

            <CardContent>
              <Typography gutterBottom className={classes.titleInfo}>
                Utilize o formulário abaixo para cadastrar um contato.
              </Typography>
              <Box p={1}>
                <TextField onChange={(e) => handleChangeInput(e, 'description')} value={description} fullWidth label="Nome" variant="outlined" />
              </Box>
              <Box p={1}>
                <TextField onChange={(e) => handleChangeInput(e, 'valeu')} value={value} type="number" fullWidth label="Telefone" variant="outlined" />
              </Box>
            </CardContent>

            <CardActions className={classes.actions}>

              <Box alignSelf="flex-start">
                <Button variant="outlined" onClick={handleReset} color="secondary">
                  limpar
                </Button>
              </Box>
              <Box alignSelf="flex-end">
                <Button variant="contained" onClick={handleSubmit} color="secondary">
                  cadastrar
                </Button>
              </Box>

            </CardActions>
          </Card>
        </Grid>
      </Grid>

    </Grid>
  );
}
