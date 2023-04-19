import React from 'react'
import pagestyle from "../styles/pitstopCard.module.css"
import FolderOpenIcon from '@mui/icons-material/FolderOpen';

const PitstopCard = ({data}) => {
  return (
        <div className={pagestyle.pitstopcardcontainer}>
          <div style={{display:"flex", gap:7}}>
            <FolderOpenIcon sx={{alignSelf: "center", color: "#4A3C98"}} />
            <p className={pagestyle.pitstoptitle}>{data.title}</p>
          </div>
      
        <p className={pagestyle.pitstoptime}>{data.duration}min</p>
        </div>
  )
}

export default PitstopCard