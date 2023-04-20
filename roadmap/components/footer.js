import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "rebeccapurple",
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(1),
    marginTop: theme.spacing(5),
    zIndex:2,
    position:''
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="h4" align="center" gutterBottom>
        RoadMap
      </Typography>
      <Typography variant="h5" align="center" component="p">
        Powered by Africa to Silicon Valley (A2SV)
      </Typography>
      <Typography variant="body2" align="center">
        {'© '}
        <Link color="inherit" href="#">
          RoadMap
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </footer>
  );
}

export default Footer;