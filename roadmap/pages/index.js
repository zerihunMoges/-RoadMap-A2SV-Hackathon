import RoadMap from '@/components/RoadMap'
import RoadMaps from '@/components/RoadMaps'
import { Inter } from 'next/font/google'
import { useAuth } from '@/context/AuthContext'
import dynamic from 'next/dynamic'

const TalkJS = dynamic(() => import('@/components/chat'), {
  ssr: false
})

export default function Home() {
  const {logout} = useAuth()

  return (
    <>
         <RoadMaps></RoadMaps>
     
         <TalkJS />
         <button onClick={()=>logout()}>logout</button>
         </>
  )
}
