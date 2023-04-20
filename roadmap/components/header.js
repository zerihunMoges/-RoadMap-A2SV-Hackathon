import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, Typography } from '@material-ui/core';
import { Toolbar } from '@mui/material';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';


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
  link: {
    textDecoration: "none",
    color: "#4A3C98"

  }
}));

function Navbar() {
  const classes = useStyles();
  const router = useRouter()
  const {user, logout} = useAuth()
  console.log(user);
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar style={{display:"flex", justifyContent:"space-between"}}>
        <Typography variant="h6" className={classes.logo}>
          <Button onClick={()=>router.push('/')}><span className={classes.road}>Road</span><span className={classes.map}>Map</span></Button>
        </Typography>

        
        <div style={{display:"flex", gap:40, justifyItems:"center", paddingRight:150}}>
          {user &&<Link className={classes.link} href="/enrolledList">My RoadMaps</Link>}
          {user && <Link className={classes.link} href="/myStudyGroups">My Study Group</Link>}

          <Link className={classes.link} href="/roadmaps">RoadMaps</Link>
          {user && <Link className={classes.link} href="/admin">Dashboard</Link>}
          
          {!user ? <Link className={classes.link} href="/login">Login</Link> : <Link className={classes.link} onClick={()=>{logout()}} href="/">Logout</Link>
          }
        </div>

      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
