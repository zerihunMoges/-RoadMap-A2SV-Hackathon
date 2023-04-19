import { Avatar, Rating } from '@mui/material'
import React from 'react'
import style from "../styles/adminBoard.module.css"

const AdminBoardCard = ({data}) => {
  return (
    <div className={style.adminboardcardcontainer}>
        <div  className={style.admincardleft}>
            <div  className={style.admincardrightimagecontainer}>
                {/* <img  className={style.admincardrightimage} src={roadmap.image} /> */}
                <Avatar 
                alt={data.title}
                src={data.image}
                sx={{ width: 65, height: 65 ,
                    alignSelf: "center", justifySelf: 'center'}} 
                variant="square">
                </Avatar>
            </div>
            <div  className={style.admincardrighttitlecontainer}  >
                <p className={style.admincardrighttitle}>{data.title} </p>
                <p className={style.admincardrightrating}>
                <Rating name="size-small" defaultValue={data.rating}  size="medium" />
                </p>
            </div>

        </div>
        <div className={style.admincardright}>
            <p className={style.admincardrightduration}>{data.duration}min</p>
            <p  className={style.admincardrightenrolledstd}> <span  className={style.admincardrightenrolledstdbold}>{data.enrolled}</span> enrolled students</p>

        </div>

        
      </div>
  )
}

export default AdminBoardCard