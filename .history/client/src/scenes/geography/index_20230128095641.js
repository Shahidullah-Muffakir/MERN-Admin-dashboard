import React from 'react'
import {Box,useTheme} from '@mui/material'
import { ResponsiveChoropleth } from '@nivo/geo'

import { geoData } from 'state/geoData'
import { useGetGeographtyQuery } from 'state/api'

const Geography = () => {
    const theme=useTheme()
    const {data, isLoading}  = useGetGeographtyQuery()
    console.log("🚀 ~ file: index.js:11 ~ Geography ~ data", data)
    
  return (
    <div>
      
    </div>
  )
}

export default Geography
