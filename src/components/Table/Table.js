import React from "react"
import { useTable, usePagination } from 'react-table'
 import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react"
import Pagination from './Pagination'

export default function TableC(props) {
   const columns = React.useMemo(
     () => [
       {
         Header: 'Name',
         accessor: 'name',
       },
        {
         Header: 'Age',
         accessor: 'age'
       },
       {
         Header: 'Animals',
         accessor: 'animals',
       },
       {
         Header: 'Points',
         accessor: 'points',
       }
     ],
     []
   )
 
   const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
     state: { pageIndex, pageSize },
   } = useTable({ 
     columns, 
     data: props.data
    },
    usePagination
    )
 
   return (
     <>
     <Table {...getTableProps()} variant="striped" colorScheme="teal" width="100%" marginBottom="20px">
       <Thead>
         {headerGroups.map(headerGroup => (
           <Tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
               <Th
                 {...column.getHeaderProps()}
               >
                 {column.render('Header')}
               </Th>
             ))}
           </Tr>
         ))}
       </Thead>
       <Tbody {...getTableBodyProps()}>
         {page.map(row => {
           prepareRow(row)
           return (
             <Tr {...row.getRowProps()}>
               {row.cells.map(cell => {
                 return (
                   <Td
                     {...cell.getCellProps()}
                   >
                     {cell.render('Cell')}
                   </Td>
                 )
               })}
             </Tr>
           )
         })}
       </Tbody>
     </Table>
     <Pagination 
      canPreviousPage={canPreviousPage}
      canNextPage={canNextPage}
      pageOptions={pageOptions}
      pageIndex={pageIndex}
      pageSize={pageSize}
      gotoPage={gotoPage}
      nextPage={nextPage}
      previousPage={previousPage}
      pageCount={pageCount}
      setPageSize={setPageSize} />
     </>
   )
 }