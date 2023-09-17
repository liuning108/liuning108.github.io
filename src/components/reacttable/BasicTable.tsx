'use client'
import {useTable} from "react-table";
import {COLUMNS} from "@/components/reacttable/columns";
import MOCK_DATA from './MOCK_DATA.json'
import {useMemo} from "react";

export  const BasicTable = () => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])


    // @ts-ignore
    const tableInstance = useTable({
        columns,
        data
    })
    const {
           getTableProps,
           getTableBodyProps,
           headerGroups,
           rows,
           prepareRow
    } = tableInstance
    console.log('getTableProps()',getTableProps())
    console.log('getTableBodyProps()',getTableBodyProps())

    console.log('headerGroups',headerGroups)

    return (
        <table {...getTableProps()}>
            <thead>
            {
                headerGroups.map((headerGroup)=>(
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map(column=>(
                              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                ))
                        }
                    </tr>
                ))
            }

            </thead>
            <tbody {...getTableBodyProps()}>
            {
                rows.map(row=>{
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps}>
                            {
                                row.cells.map(cell=>{
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })
                            }
                        </tr>
                    )
                })
            }

            </tbody>

        </table>
    )

}

