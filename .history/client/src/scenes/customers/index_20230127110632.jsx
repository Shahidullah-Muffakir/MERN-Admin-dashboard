import React from 'react'
import {useGetCustomersQuery} from 'state/api'
const Customers = () => {
  const {data} = useGetCustomersQuery()
  console.log("🚀 ~ file: index.jsx:5 ~ Customers ~ data", data)
  return (
    <div>
      
    </div>
  )
}

export default Customers
