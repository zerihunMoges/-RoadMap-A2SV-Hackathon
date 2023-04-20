import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IconButton, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, ListSubheader, Rating, Switch } from '@mui/material';
import PitstopCard from './PitstopCard';
import { useRouter } from 'next/router';

function RoadMapDetail({data}) {
  const router = useRouter()
  // const data = [{title:"the title of the pitstop",  duration:380,}, {title:"Real life is a blessing",  duration:380,},{title:"Not if they fucking for Nyash",  duration:380,}]
  return (
    <div style={{marginRight: "10%", marginLeft: "10%"}}>

      <div style={{ display:"flex", flexDirection:"column", gap:"20px", alignItems:'center', paddingTop: 40}}>
        <Typography variant="h4" component="h2" fontWeight="bold" color="text.secondary">
          {data.title}
        </Typography>
        <img style={{ width: 400, objectFit: 'contain'}} src={data.image}></img>
        <div style={{ display: 'flex'}}>
            <Rating name="size-small" defaultValue={2}  size="medium" readOnly /> 
            <Typography sx={{ fontSize: 12, marginLeft: 1, marginTop:0.6 }} color="text.secondary" gutterBottom>
              Based on 5000 users
            </Typography>
          </div>
      </div>
      <hr style={{width: '100%', marginTop:"3rem"}}></hr>

      <div style={{display: 'flex', flexDirection: 'row', gap:"80px", width:'100%'}}>
          <div style={{flexBasis: '60%'}}>

          <Typography variant="h5" component="div" color="text.secondary">
            Description
          </Typography>
          <Typography sx={{ marginTop: 3 }} color="text.secondary">
            {data.description}
          </Typography>
          {
            data.pitStops.map((lecture, idx) => {
              return(<PitstopCard key={idx} data={lecture}/>)
            })
          }

          </div>
          <div style={{flexBasis:'40%'}}>
            <Card sx={{ border: "none", boxShadow: "none" }}>
              <CardContent>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Start your path to a career in project management. In this program, you’ll learn in-demand skills that will have you job-ready in less than six months. No degree or experience is required.
                </Typography>
                
              </CardContent>
              <CardActions>
                <Button variant="contained" color='primary'  size="large" onClick={()=>router.push('/enrolled')}>Enroll</Button>
              </CardActions>
            </Card>
          </div>
      </div>


    </div>
  )
}

export default RoadMapDetail