import AdminBoardCard from '@/components/AdminBoardCard'
import React from 'react'
import style from "../styles/admin.module.css"
function admin() {
    const data = [
        {
            title: "React Roadmap",
            duration: 3400,
            image: "https://picsum.photos/2/237/200/300",
            rating: 3,
            enrolled: 4600
          },
        {
            title: "Deact Roadmap",
            duration: 3400,
            image: "https://picsum.photos/2/237/200/300",
            rating: 3,
            enrolled: 4600
          },
        {
            title: "React Roadmap",
            duration: 3400,
            image: "https://picsum.photos/2/237/200/300",
            rating: 3,
            enrolled: 4600
          },
    ]
  return (
    <div className={style.admincontainer}>
        <div className={style.adminroadmapbuttoncontainer}>
        <button className={style.adminroadmapbutton}> create Roadmap</button>
        </div>
        
        <div className={style.admincardcontainer}>
            <p>you have {data.length} roadmaps created</p>
            {
                data.map(single =>{
                    return (<AdminBoardCard data = {single}/>)
                })
            }
        </div>
    </div>
  )
}

export default admin