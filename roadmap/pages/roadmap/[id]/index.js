
import RoadMapDetail from '@/components/RoadMapDetail'
import { useAuth } from '@/context/AuthContext'
import { data } from '@/mock'
import { useRouter } from 'next/router'
import React from 'react'

function roadmap() {
  const {roadMap} = useAuth()
  // const data = roadMap
  const router = useRouter()
  const {id} = router.query
  const [roadmap] = data.filter((single) => single.id ===parseInt(id))

  return (

    <RoadMapDetail data = {roadmap} />
  )
}

export default roadmap