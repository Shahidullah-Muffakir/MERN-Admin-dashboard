
import {
Box,
Card,
CardActions,
CardContent,
Collapse,
Button,
Typography,
Rating,
useTheme,
useMediaQuery
} from '@mui/material'

import Header from 'components/Header'
import { useGetProductsQuery } from 'state/api'

const Products = () => {
    const {data,isLoading} = useGetProductsQuery()
    console.log("🚀 ~ file: index.js:20 ~ Products ~ data", data)
  return (
    <Box>
      <Header title='PRODUCTS' subtitle='see all your products here'/>
    </Box>
  )
}

export default Products
