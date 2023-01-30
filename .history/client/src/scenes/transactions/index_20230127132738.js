import React, { useState } from 'react'
import { Box, useThem } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'

import { useGetTransactionsQuery } from 'state/api'

const Transaction = () => {
    const [page, setPage] = useState(0)
    const [pageSize, setPageSize] = useState(20)
    const [sort, setSort] = useState({})
    const [search, setSearch] = useState('')

    const { data, isLoading } = useGetTransactionsQuery({
        page,
        pageSize,
        search,
        sort: JSON.stringfy(sort)
    })
    console.log("🚀 ~ file: index.js:19 ~ Transaction ~ data", data)

    return (
        <div>
hii
        </div>
    )
}

export default Transaction
