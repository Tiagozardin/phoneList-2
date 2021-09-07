import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Grid, Typography, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DataTable from '../../components/data-table';

import useStyles from './styles';

export default function Home() {
  const history = useHistory();

  const classes = useStyles();

  const [listLocal, setlistLocal] = useState([]);

  const handleClick = () => {
    history.push('/register');
  };

  return (
    <Grid item>
      <Grid item container spacing={2}>
        <Grid item xs={12} md={12}>
          <DataTable title="Lista Telefones" data={listLocal} />
        </Grid>
      </Grid>

      <Fab color="primary" aria-label="add" onClick={() => handleClick()}>
        <AddIcon />
      </Fab>
    </Grid>
  );
}
