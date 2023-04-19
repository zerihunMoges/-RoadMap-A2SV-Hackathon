import React from 'react'
import lecurestyle from "../styles/lectureCardd.module.css"
import {HiOutlineClock} from "react-icons/hi"

const LectureCardd = ({data}) => {
  return (
    <div className={lecurestyle.lecturecardcontainer}>
        <div className={lecurestyle.titleholder}>
            <p className={lecurestyle.lecturetitle}>{data.title}</p>
            <div className={lecurestyle.lecturetimeholder} >
            <HiOutlineClock size = "1.5rem" className={lecurestyle.lecturetimeicon}></HiOutlineClock>
            <p className={lecurestyle.lecturetime}> <span>{data.duration}</span>min</p>

            </div>
            
        </div>
        <p className={lecurestyle.lecturedescription}>
            {data.detail}
        </p>
        <div className={lecurestyle.lecturebuttoncontainer}>
        <a href={data.link} target='blank'>
        <button className={lecurestyle.lecturelinkbutton}>visit page</button>
            
        </a>
        
        </div>
    </div>
  )
}

export default LectureCardd