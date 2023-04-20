import { Box, Container } from '@mui/material'
import React from 'react'
import RoadMap from './RoadMap'
import { data } from '../mock'
import Link from 'next/link'

function RoadMaps() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', backgroundColor: 'FBF8F6', padding: 2}}>
            {
                data.map(single=>{
                    return (
                        <Link style={{textDecoration: "none"}} href="/roadmap/[id]" as={`/roadmap/${single.id}`}>
                            <RoadMap data={single}/>
                        </Link>
                        
                    )
                })
            }
        </Box>
    )
}

export default RoadMaps