import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import { IconButton, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, ListSubheader, Rating, Switch } from '@mui/material';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';

function RoadMapDetail() {
  return (
    <div>
<div style={{display:'flex', flexDirection: 'row', maxHeight: 400}}>
        <div style={{padding: 10, marginTop: 'auto', marginBottom: 'auto'}}>
        <Card sx={{ border: "none", boxShadow: "none" }}>
      <CardContent>
        
        <Typography variant="h5" component="div">
        Google Project Management: Professional Certificate
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Start your path to a career in project management. In this program, you’ll learn in-demand skills that will have you job-ready in less than six months. No degree or experience is required.
        </Typography>
        <div style={{ display: 'flex'}}>
          <Rating name="size-small" defaultValue={2}  size="small" /> 
          <Typography sx={{ fontSize: 14, marginLeft: 2 }} color="text.secondary" gutterBottom>
          Based on 5000 users
        </Typography>
        </div>
      </CardContent>
      <CardActions>
        <Button size="small">Join The Journey</Button>
      </CardActions>
    </Card>
        </div>
        <div style={{width: '50%', paddingTop: 10}}>
        <img style={{ width: 400, height: 500, objectFit: 'contain'}} src='https://img.freepik.com/free-photo/virtual-classroom-study-space_23-2149178591.jpg?w=2000'></img>
        </div>

        </div>

        <hr style={{width: '98%'}}></hr>

        <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{padding: 15, marginTop: 10, width: '60%'}}>

            <Typography variant="h5" component="div">
        Description:
        </Typography>
        <Typography sx={{ mb: 1.5, marginTop: 5 }} color="text.secondary">
        Get started in the in-demand field of project management with a Professional Certificate from Google. Learn how to manage projects using traditional and agile methods, create project documentation, and develop strategic communication skills.
        </Typography>

            <List
      sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}
      
    >
      <ListItem>
        <ListItemIcon>
        <PlayCircleFilledWhiteIcon></PlayCircleFilledWhiteIcon>
        </ListItemIcon>
        <ListItemText id="switch-list-label-wifi" primary="Introduction to Google Project Management" />
        
      </ListItem>
      <hr style={{width: '95%'}}></hr>
      <ListItem>
        <ListItemIcon>
        <PlayCircleFilledWhiteIcon></PlayCircleFilledWhiteIcon>
        </ListItemIcon>
        <ListItemText id="switch-list-label-wifi" primary="Introduction to Google Project Management" />
        
      </ListItem>
      <hr style={{width: '95%'}}></hr>
      <ListItem>
        <ListItemIcon>
        <PlayCircleFilledWhiteIcon></PlayCircleFilledWhiteIcon>
        </ListItemIcon>
        <ListItemText id="switch-list-label-wifi" primary="Introduction to Google Project Management" />
        
      </ListItem>
      <hr style={{width: '95%'}}></hr>
      </List>

            </div>
            <div>
                
            </div>
        </div>
    </div>
  )
}

export default RoadMapDetail