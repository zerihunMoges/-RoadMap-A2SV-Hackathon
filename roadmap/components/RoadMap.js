import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { IconButton, ListItem, ListItemAvatar, ListItemText, Rating } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import TimelapseIcon from '@mui/icons-material/Timelapse';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function RoadMap() {

    
    return (

   
        <Card sx={{ 
    margin: 2,
    marginTop: 15,
    
    borderRadius: 2, // 16px
    transition: '0.3s',
    boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
    position: 'relative',
    maxWidth: 300,
    
    overflow: 'initial',
    background: '#ffffff',
    
    alignItems: 'start' ,
        padding: 2,
    
  }}>
            <Avatar
  sx={{ width: '98%',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: -10,
  marginBottom: 2,
  height: '60%',

  borderTopLeftRadius: "20%",
  borderTopRightRadius: "3%",
  backgroundColor: '#fff',
  position: 'relative',
  objectFit: 'cover',

 
 }}
  alt="Remy Sharp"
  src='https://img.freepik.com/free-photo/virtual-classroom-study-space_23-2149178591.jpg?w=2000'
  variant="square"

/>
            
                <Typography variant="h6" component="div">
                    UX Design & User Experience in Design Course
                </Typography>
                <ListItem sx={{paddingLeft:0}}>
                  <ListItemAvatar>
                  <Avatar sx={{width:36, height: 36}} alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                  </ListItemAvatar>
                
                  <ListItemText 
                    primary="Africa To silicon Valley"
         
                  />
                </ListItem>

                <CardActions disableSpacing sx={{
    display: 'flex',
    justifyContent: 'space-between',
    padding: 0

  }}>
               <> <IconButton aria-label="add to favorites">
          <VisibilityIcon />
        </IconButton>
        <Typography sx={{ fontSize: 13}} variant="body2" component="p">
          3k travelers
        </Typography></>
        
       <> <IconButton aria-label="add to favorites">
          <PlayCircleFilledWhiteIcon />
        </IconButton>
        <Typography sx={{ fontSize: 13}} variant="body2" component="p">
          36 parts
        </Typography></>

       <> <IconButton aria-label="add to favorites">
          <TimelapseIcon />
        </IconButton>
        <Typography sx={{ fontSize: 13}} variant="body2" component="p">
         3 hrs
        </Typography></>
        
      </CardActions>
      <CardContent> <Rating name="size-small" defaultValue={2}  size="small" />
      </CardContent>
        </Card>

    
    );
}

