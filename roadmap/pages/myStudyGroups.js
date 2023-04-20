import dynamic from 'next/dynamic'

const TalkJS = dynamic(() => import('@/components/chat'), {
  ssr: false
})

export default function Home() {

  return (
    <>     
         <TalkJS />
         </>
  )
}
