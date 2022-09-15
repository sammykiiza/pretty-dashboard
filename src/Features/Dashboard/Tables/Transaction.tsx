import React from 'react'
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const rows: GridRowsProp = [
    { id: 1, col1: 'Received', col2: '12ETH', col3: 'Pending' },
    { id: 2, col1: 'Sent', col2: '23BTC', col3: 'Completed' },
    { id: 3, col1: 'Exchange', col2: '13DASH', col3: 'Requested' },
];

const columns: GridColDef[] = [
    { field: 'col1', headerName: 'Type', minWidth: 100, flex: 1, headerAlign: 'center', align: 'center' },
    { field: 'col2', headerName: 'Amount', minWidth: 100, flex: 1, headerAlign: 'center', align: 'center' },
    { field: 'col3', headerName: 'Status', minWidth: 100, flex: 1, headerAlign: 'center', align: 'center', 
    renderCell: (cellValues) => {
        return (
            <div className={(cellValues.row.col3 === 'Pending'? 'bg-slate-100' : 
            cellValues.row.col3 === 'Completed'? 'bg-green-100' : 'bg-gray-100') + ' px-3 py-1 rounded-full cursor-pointer'}>
                {cellValues.row.col3 === 'Pending' &&
                <span className='text-purple-700'>{cellValues.row.col3}</span>
                }
                {cellValues.row.col3 === 'Completed' &&
                <span className='text-green-700'>{cellValues.row.col3}</span>
                }
                {cellValues.row.col3 === 'Requested' &&
                <span className='text-gray-700'>{cellValues.row.col3}</span>
                }
            </div>
        )
    } },
];

function Transaction() {
    return (
        <div style={{ height: 214, width: 480 }} className='drop-shadow-md'>
            <DataGrid
                sx={{
                    backgroundColor: 'white',
                    borderRadius: 2,
                    alignContent: 'content-distribution',
                    fontSize: 12,
                    ".MuiDataGrid-columnSeparator": {
                        display: "none"
                      }
                }}
                rows={rows}
                columns={columns}
                hideFooter={true}
            />
        </div>
    )
}

export default Transaction