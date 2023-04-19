import { Box, Container } from '@mui/material'
import React from 'react'
import RoadMap from './RoadMap'

function RoadMaps() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', backgroundColor: 'FBF8F6', padding: 2}}>
            <RoadMap></RoadMap>
            <RoadMap></RoadMap>
            <RoadMap></RoadMap>
            <RoadMap></RoadMap>
            <RoadMap></RoadMap>
            <RoadMap></RoadMap>
            <RoadMap></RoadMap>
            <RoadMap></RoadMap>
        </Box>
    )
}

export default RoadMaps