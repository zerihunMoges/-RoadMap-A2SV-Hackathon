import Link from 'next/link';
import RoadMap from './RoadMap';

export default function SlideShow({cardData}){

    return <div container style={{ overflowX: 'scroll',overflowY: 'hidden',  display: 'flex'}}>
  {cardData.map((single) => (
    <Link style={{textDecoration: "none"}} href="/roadmap/[id]" as={`/roadmap/${single.id}`}>
    <RoadMap data={single}/>
    </Link>
  ))}
</div>

    }