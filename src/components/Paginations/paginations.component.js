import React from 'react'
import { Pagination } from '@mui/material';

export const Paginations = ({ pages, setPages,totalPages }) => {


  return (
    <Pagination onChange={(_, num) => setPages(num)} count={totalPages > 500 ? 500 : totalPages} color="primary" />
  )
}