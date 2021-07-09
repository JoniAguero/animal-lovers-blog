import React from 'react'
 import {
  Button,
  Input,
  Select,
  SimpleGrid,
  Stack
} from "@chakra-ui/react";

export default function Pagination(props) {
    return (
         <SimpleGrid columns={2} className="pagination">
             <Stack direction="row" alignItems="center">
                 <Button onClick={() => props.gotoPage(0)} disabled={!props.canPreviousPage}>
                {'<<'}
                </Button>{' '}
                <Button onClick={() => props.previousPage()} disabled={!props.canPreviousPage}>
                {'<'}
                </Button>{' '}
                <Button onClick={() => props.nextPage()} disabled={!props.canNextPage}>
                {'>'}
                </Button>{' '}
                <Button onClick={() => props.gotoPage(props.pageCount - 1)} disabled={!props.canNextPage}>
                {'>>'}
                </Button>{' '}
                <span>
                Page{' '}
                <strong>
                    {props.pageIndex + 1} of {props.pageOptions.length}
                </strong>{' '}
                </span>
                <span>
                | Go to page:{' '}
                <Input
                    type="number"
                    defaultValue={props.pageIndex + 1}
                    onChange={e => {
                    const page = e.target.value ? Number(e.target.value) - 1 : 0
                    props.gotoPage(page)
                    }}
                    style={{ width: '100px' }}
                />
                </span>{' '}
            </Stack>
            <Stack  direction="row" justifyContent="flex-end" alignItems="center">
                <Select
                value={props.pageSize}
                width="25%"
                onChange={e => {
                    props.setPageSize(Number(e.target.value))
                }}
                >
                {[10, 20, 30, 40, 50].map(pageSize => (
                    <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                    </option>
                ))}
                </Select>
            </Stack>
            
            
      </SimpleGrid>
    )
}
