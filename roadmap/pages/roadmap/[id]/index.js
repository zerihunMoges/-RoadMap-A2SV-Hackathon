
import RoadMapDetail from '@/components/RoadMapDetail'
import { data } from '@/mock'
import { useRouter } from 'next/router'
import React from 'react'

function roadmap() {
  const router = useRouter()
  const {id} = router.query
  console.log(id, data);
  const [roadmap] = data.filter((single) => single.id ===parseInt(id))
  console.log(roadmap);

  return (

    <RoadMapDetail data = {roadmap} />
  )
}

export default roadmap