import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Icon } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection:'row',
    alignItems: 'center',
    gap: theme.spacing(8),
    margin: theme.spacing(2),
  },
  icon: {
    backgroundColor: 'white',
    color: purple[500],
    borderRadius: theme.spacing(1),
    padding: theme.spacing(2),
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)'
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

function IconBox({ icon, text1, text2, text3 }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.icon}>
        <Icon>{icon}</Icon>
      </Box>
      <Box className={classes.text}>
        <Typography fontWeight='bold' variant="h6">{text1}</Typography>
        <Typography variant="subtitle2">{text2}</Typography>
        <Typography variant="subtitle2">{text3}</Typography>
      </Box>
    </Box>
  );
}

export default IconBox;
