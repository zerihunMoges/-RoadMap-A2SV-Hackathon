import { Box, Button, Divider, FormControl, IconButton, Input, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material'

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import React, { useState } from 'react'
import QuillEditor from '@/components/editor'
import 'react-quill/dist/quill.snow.css';
import { AddCircleOutlineRounded, AddCircleRounded, AddOutlined, DeleteOutlined, PlayCircleOutlineRounded } from '@mui/icons-material';
import PitstopCard from './PitstopCard';
import dynamic from "next/dynamic";

const ReactQuill = dynamic(import('react-quill'), { ssr: false })

function CreateRoadMap() {
    const [open, setOpen] = React.useState(false);
    const [openLecture, setOpenLecture] = React.useState(false);
    const [pitStop, setPitStop] = useState({});
    const [pitStops, setPitStops] = useState([]);
    const [lecture, setLecture] = useState({});
    const [lectures, setLectures] = useState([]);
    const [roadMap, setRoadMap] = useState({});

    const handleAddLecture = () => {
        if(lecture){
            setLectures( [...lectures, lecture] )   
            setPitStop({...pitStop, lectures: lectures})
        }
        console.log(lecture)
        
        setLecture({})
        setOpenLecture(false)
    }
    



    const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClickLectureOpen = () => {
        setOpenLecture(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
      const handleLectureClose = () => {
        setLecture({})
        setOpenLecture(false);
      };

      const handleAddPitstop = () => {
        if(pitStop){
            setPitStops([...pitStops, pitStop])
        }

        setPitStop({})
        setOpen(false)
      }
     
  return (
    <div>
        

      <Box sx={{padding: 10, display: 'flex'}}>

      <Box sx={{width: '55%', margin: 2}}>
      <Box
      sx={{
        width: '100%',
       borderRadius: 2,
       backgroundColor: '#F7FAFC',
       padding: 2,
       marginBottom: 2,
       display: 'flex',
       flexDirection: 'column'
      }}
    >

<Box sx={{
        display: 'flex',
        alignItems: 'center',
        
        }}>

<Typography sx={{ fontSize: 15, marginRight: 10}} variant="body1" component="p">
         Title*
        </Typography>

 <TextField onChange={(e) => setRoadMap({...roadMap, title: e.target.value})} fullWidth style={{backgroundColor: 'white'}} id="outlined-basic" label="" variant="outlined" />
        </Box>
         </Box>


         <Box
      sx={{
        width: '100%',
       borderRadius: 2,
       backgroundColor: '#F7FAFC',
       padding: 2,
       marginBottom: 2
      }}
    >

<Box sx={{
        display: 'flex',
        alignItems: 'center',
        
        }}>

<Typography sx={{ fontSize: 15, marginRight: 10}} variant="body1" component="p">
          Upload Image
        </Typography>

        <input onChange={(e) => setRoadMap({...roadMap, image: e.target.value})} type='file' ></input>
        </Box>
         </Box>

      <Box
      sx={{
        width: '100%',
       borderRadius: 2,
       backgroundColor: '#F7FAFC',
       padding: 2
      }}
    >  <ReactQuill onChange={(value) => setRoadMap({...roadMap, description: value})} value={roadMap.description}  style={{backgroundColor: 'white'}} theme="snow" placeholder="Write description" /> </Box>
        
      

      

        <Button sx={{
        marginTop: 3,
       color: 'gray',
       borderColor: 'gray'
      }} variant="outlined" startIcon={<AddCircleOutlineRounded />} onClick={handleClickOpen}>
  Add Pit Stop
</Button>
     

<Dialog    fullWidth
  maxWidth="sm" open={open} onClose={handleClose}>
    <DialogTitle>Pit Stop</DialogTitle>
      <Box
      sx={{
       
       backgroundColor: '#F7FAFC',
 
      }}
    >
        

      
        <DialogContent >

        <Box sx={{
            display: 'flex',
        
        }}>
              
        <Box sx={{
        display: 'flex',
        alignItems: 'start',
        padding: 2
        }}>

<Typography sx={{ fontSize: 15, marginRight: 2}} variant="body1" component="p">
         Title
        </Typography>

 <TextField onChange={(e) => setPitStop({...pitStop, title: e.target.value})} fullWidth style={{backgroundColor: 'white'}} id="outlined-basic" label="" variant="outlined" />
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box sx={{display: 'flex', flexDirection: 'column'}}>


        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin:2 }}>
      {lectures.map((lecture, index) => {
        const labelId = `checkbox-list-label-${index}`;

        return (
          <ListItem
            key={lecture}
            secondaryAction={
              <IconButton onClick={() => {
                setLectures(lectures.filter( (lecture, i) => index != i ) )
              }} edge="end" aria-label="comments">
                <DeleteOutlined />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} dense>
              <ListItemIcon>
                <PlayCircleOutlineRounded></PlayCircleOutlineRounded>
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${lecture.title}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
        </Box>


        </Box> 

        <Button sx={{
        marginTop: 3,
       color: 'gray',
       borderColor: 'gray'
      }} variant="outlined" startIcon={<AddCircleOutlineRounded />} onClick={handleClickLectureOpen}>
  Add Lecture
</Button>


        </DialogContent>
        
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddPitstop}>Done</Button>
        </DialogActions>
        </Box>
      </Dialog>

      <Dialog   fullWidth
  maxWidth="sm" open={openLecture} onClose={handleLectureClose}>
      <Box
      sx={{
       
       backgroundColor: '#F7FAFC',
 
      }}
    >
        <DialogTitle>Lecture</DialogTitle>

      
        <DialogContent >
        <Box sx={{
        display: 'flex',
        alignItems: 'center',
        padding: 2
        }}>

<Typography sx={{ fontSize: 15, marginRight: 10}} variant="body1" component="p">
         Topic
        </Typography>

 <TextField onChange={(e) => setLecture({...lecture, title: e.target.value})} fullWidth style={{backgroundColor: 'white'}} id="outlined-basic" label="" variant="outlined" />
        </Box>
       
        <Box sx={{
        display: 'flex',
        alignItems: 'center',
        padding: 2
        }}>

<Typography sx={{ fontSize: 15, marginRight: 10}} variant="body1" component="p">
         Link
        </Typography>

 <TextField onChange={(e) => setLecture({...lecture, link: e.target.value})} fullWidth style={{backgroundColor: 'white'}} id="outlined-basic" label="" variant="outlined" />
        </Box>

        <Box sx={{
        display: 'flex',
        alignItems: 'center',
        padding: 2
        }}>

<Typography sx={{ fontSize: 15, marginRight: 10}} variant="body1" component="p">
         Duration
        </Typography>

 <TextField type='number' onChange={(e) => setLecture({...lecture, duration: e.target.value})} fullWidth style={{backgroundColor: 'white'}} placeholder='duration in minutes' id="outlined-basic" label="" variant="outlined" />
        </Box>

        <Box sx={{
        display: 'flex',
        alignItems: 'center',
        padding: 2
        }}>

 <ReactQuill onChange={(value) => setLecture({...lecture, description: value})} style={{backgroundColor: 'white'}} theme="snow" value={lecture.description} placeholder="Write description" />
        </Box>
      
        </DialogContent>
        
        <DialogActions>
          <Button onClick={handleLectureClose}>Cancel</Button>
          <Button onClick={handleAddLecture}>Done</Button>
        </DialogActions>
        </Box>
      </Dialog>
      </Box>

      <Divider orientation="vertical" flexItem />

      <Box sx={{display: 'flex', flexDirection: 'column', width: '45%'}}>

      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin:2 }}>
      {pitStops.map((pitstop, index) => {
        const labelId = `checkbox-list-label-${index}`;

        return (

            <Box
            sx={{
              width: '100%',
             borderRadius: 2,
             backgroundColor: '#F7FAFC',
             padding: 2,
             marginBottom: 2
            }}
          > 
          <ListItem
            key={lecture}
            secondaryAction={
              <IconButton onClick={() => {
                setPitStops(pitStops.filter( (p, i) => index != i ) )
              }} edge="end" aria-label="comments">
                <DeleteOutlined />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} dense>
              <ListItemIcon>
                <PlayCircleOutlineRounded></PlayCircleOutlineRounded>
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${pitstop.title}`} />
            </ListItemButton>
          </ListItem>
          </Box>
        );
      })}
    </List>
        
      </Box>











   

        </Box>
    </div>
  )
}

export default CreateRoadMap