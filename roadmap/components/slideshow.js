import RoadMap from './RoadMap';

export default function SlideShow({cardData}){

    return <div container style={{ overflowX: 'scroll',overflowY: 'hidden',  display: 'flex'}}>
  {cardData.map((card, index) => (
    <RoadMap key={index}></RoadMap>
  ))}
</div>

    }