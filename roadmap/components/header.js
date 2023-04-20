import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, Typography } from '@material-ui/core';
import { Toolbar } from '@mui/material';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
  },
  logo: {
    marginRight: theme.spacing(1),
    textShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)',
    justifyContent: 'center'
    
  },
  title: {
    flexGrow: 1,
    fontWeight: 'bold',
  
  },
  road: {
    color: '#663399',
    fontSize: '30px',
    textShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)',
  },
  map: {
    color: '#000000',
    fontSize: '27px',
    textShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)',
  },
}));

function Navbar() {
  const classes = useStyles();
  const router = useRouter()

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.logo}>
          <Button onClick={()=>router.push('/')}><span className={classes.road}>Road</span><span className={classes.map}>Map</span></Button>
        </Typography>

      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
