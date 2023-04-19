import { Grid, Box, Card, CardContent } from '@material-ui/core';
import RoadMap from './RoadMap';

export default function SlideShow({cardData}){

    return <div container style={{ overflowX: 'auto',overflowY: 'hidden',  display: 'flex' , width: "170%"}}>
  {cardData.map((card, index) => (
    <RoadMap key={index}></RoadMap>
  ))}
</div>

    }