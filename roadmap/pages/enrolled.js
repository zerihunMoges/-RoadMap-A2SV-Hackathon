import LectureCardd from '@/components/LectureCardd'
import PitstopCard from '@/components/PitstopCard'
import React, { useState } from 'react'
import enrols from "../styles/enrolled.module.css"

const enrolled = () => {
  const [rightSide , setRightSide] = useState([])
  const data = [
    {
      title:"the title of the pitstop",
      duration:380,
      lectures:[
        {
          title:"the lecture title",
          duration:345,
          detail:'This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online Training With Python a;ldkj a;lk jaldkj alsdk ;asldkf;aslkfja;dlfkja;dslkfas;dlfkads;flkds;flkajs;lkdjf;kddddddddddddddd   lkdsfa;sldkfas;dlfka;flkadsflkadf;lakfda;lfksd;lfksd;lfksad;lfkjdaf;lkjdf;ldkjfdlkjfdlkfja;dslkfdf;laksdjf;dlskfja;sdlkfjas  lakd j 3',
          link:"https://google.com"
        },
        {
          title:"the lecture title",
          duration:345,
          detail:'This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online Training With Python a;ldkj a;lk jaldkj alsdk ;asldkf;aslkfja;dlfkja;dslkfas;dlfkads;flkds;flkajs;lkdjf;kddddddddddddddd   lkdsfa;sldkfas;dlfka;flkadsflkadf;lakfda;lfksd;lfksd;lfksad;lfkjdaf;lkjdf;ldkjfdlkjfdlkfja;dslkfdf;laksdjf;dlskfja;sdlkfjas  lakd j 3',
          link:"https://google.com"
        },
        {
          title:"the lecture title",
          duration:345,
          detail:'This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online Training With Python a;ldkj a;lk jaldkj alsdk ;asldkf;aslkfja;dlfkja;dslkfas;dlfkads;flkds;flkajs;lkdjf;kddddddddddddddd   lkdsfa;sldkfas;dlfka;flkadsflkadf;lakfda;lfksd;lfksd;lfksad;lfkjdaf;lkjdf;ldkjfdlkjfdlkfja;dslkfdf;laksdjf;dlskfja;sdlkfjas  lakd j 3',
          link:"https://google.com"
        },
        {
          title:"the lecture title",
          duration:345,
          detail:'This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online Training With Python a;ldkj a;lk jaldkj alsdk ;asldkf;aslkfja;dlfkja;dslkfas;dlfkads;flkds;flkajs;lkdjf;kddddddddddddddd   lkdsfa;sldkfas;dlfka;flkadsflkadf;lakfda;lfksd;lfksd;lfksad;lfkjdaf;lkjdf;ldkjfdlkjfdlkfja;dslkfdf;laksdjf;dlskfja;sdlkfjas  lakd j 3',
          link:"https://google.com"
        },
      ]
    },
    {
      title:"the secodtitle of the pitstop",
      duration:380,
      lectures:[
        {
          title:"the cecondlecture title",
          duration:345,
          detail:'This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online Training With Python a;ldkj a;lk jaldkj alsdk ;asldkf;aslkfja;dlfkja;dslkfas;dlfkads;flkds;flkajs;lkdjf;kddddddddddddddd   lkdsfa;sldkfas;dlfka;flkadsflkadf;lakfda;lfksd;lfksd;lfksad;lfkjdaf;lkjdf;ldkjfdlkjfdlkfja;dslkfdf;laksdjf;dlskfja;sdlkfjas  lakd j 3',
          link:"https://google.com"
        },
        {
          title:"the lecture title",
          duration:345,
          detail:'This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online Training With Python a;ldkj a;lk jaldkj alsdk ;asldkf;aslkfja;dlfkja;dslkfas;dlfkads;flkds;flkajs;lkdjf;kddddddddddddddd   lkdsfa;sldkfas;dlfka;flkadsflkadf;lakfda;lfksd;lfksd;lfksad;lfkjdaf;lkjdf;ldkjfdlkjfdlkfja;dslkfdf;laksdjf;dlskfja;sdlkfjas  lakd j 3',
          link:"https://google.com"
        },
        {
          title:"the lecture title",
          duration:345,
          detail:'This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online Training With Python a;ldkj a;lk jaldkj alsdk ;asldkf;aslkfja;dlfkja;dslkfas;dlfkads;flkds;flkajs;lkdjf;kddddddddddddddd   lkdsfa;sldkfas;dlfka;flkadsflkadf;lakfda;lfksd;lfksd;lfksad;lfkjdaf;lkjdf;ldkjfdlkjfdlkfja;dslkfdf;laksdjf;dlskfja;sdlkfjas  lakd j 3',
          link:"https://google.com"
        },
        {
          title:"the lecture title",
          duration:345,
          detail:'This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online Training With Python a;ldkj a;lk jaldkj alsdk ;asldkf;aslkfja;dlfkja;dslkfas;dlfkads;flkds;flkajs;lkdjf;kddddddddddddddd   lkdsfa;sldkfas;dlfka;flkadsflkadf;lakfda;lfksd;lfksd;lfksad;lfkjdaf;lkjdf;ldkjfdlkjfdlkfja;dslkfdf;laksdjf;dlskfja;sdlkfjas  lakd j 3',
          link:"https://google.com"
        },
      ]
    },
    {
      title:"the title of the pitstop",
      duration:380,
      lectures:[
        {
          title:"the lecture title",
          duration:345,
          detail:'This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online Training With Python a;ldkj a;lk jaldkj alsdk ;asldkf;aslkfja;dlfkja;dslkfas;dlfkads;flkds;flkajs;lkdjf;kddddddddddddddd   lkdsfa;sldkfas;dlfka;flkadsflkadf;lakfda;lfksd;lfksd;lfksad;lfkjdaf;lkjdf;ldkjfdlkjfdlkfja;dslkfdf;laksdjf;dlskfja;sdlkfjas  lakd j 3',
          link:"https://google.com"
        },
        {
          title:"the lecture title",
          duration:345,
          detail:'This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online Training With Python a;ldkj a;lk jaldkj alsdk ;asldkf;aslkfja;dlfkja;dslkfas;dlfkads;flkds;flkajs;lkdjf;kddddddddddddddd   lkdsfa;sldkfas;dlfka;flkadsflkadf;lakfda;lfksd;lfksd;lfksad;lfkjdaf;lkjdf;ldkjfdlkjfdlkfja;dslkfdf;laksdjf;dlskfja;sdlkfjas  lakd j 3',
          link:"https://google.com"
        },
        {
          title:"the lecture title",
          duration:345,
          detail:'This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online Training With Python a;ldkj a;lk jaldkj alsdk ;asldkf;aslkfja;dlfkja;dslkfas;dlfkads;flkds;flkajs;lkdjf;kddddddddddddddd   lkdsfa;sldkfas;dlfka;flkadsflkadf;lakfda;lfksd;lfksd;lfksad;lfkjdaf;lkjdf;ldkjfdlkjfdlkfja;dslkfdf;laksdjf;dlskfja;sdlkfjas  lakd j 3',
          link:"https://google.com"
        },
        {
          title:"the lecture title",
          duration:345,
          detail:'This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online Training With Python a;ldkj a;lk jaldkj alsdk ;asldkf;aslkfja;dlfkja;dslkfas;dlfkads;flkds;flkajs;lkdjf;kddddddddddddddd   lkdsfa;sldkfas;dlfka;flkadsflkadf;lakfda;lfksd;lfksd;lfksad;lfkjdaf;lkjdf;ldkjfdlkjfdlkfja;dslkfdf;laksdjf;dlskfja;sdlkfjas  lakd j 3',
          link:"https://google.com"
        },
      ]
    },
  ]

  return (
    // <div>
    //     {/* <PitstopCard></PitstopCard> */}
    //     {/* <LectureCardd></LectureCardd> */}
    // </div>
    <div className={enrols.enrolledcontainer}>
      <div className={enrols.rightside}>
        <p className={enrols.rightsidetitle}>Curriculum</p>
        {data.map(single =>{
          return (
            <div onClick={()=>setRightSide(single.lectures)}>
              <PitstopCard data = {single}/>
            </div>
            
          )
        })}
        
      </div>
      <div className={enrols.leftside}>
        {console.log(rightSide)}
        { 
          rightSide.map(
            single =>{
              return (<LectureCardd data = {single} />)
            }
          )
        }
       
      </div>
        
    </div>
  )
}

export default enrolled