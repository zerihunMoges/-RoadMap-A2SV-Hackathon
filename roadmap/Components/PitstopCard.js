import React from 'react'
import pagestyle from "../styles/pitstopCard.module.css"
const PitstopCard = ({data}) => {
  return (
        <div className={pagestyle.pitstopcardcontainer}>
        <p className={pagestyle.pitstoptitle}>{data.title}</p>
        <p className={pagestyle.pitstoptime}>{data.duration}min</p>
        </div>
  )
}

export default PitstopCard