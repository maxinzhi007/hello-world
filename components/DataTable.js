import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function DataTable({dispatch, columns, rows, slug}) {
      useEffect(() => {
        setTimeout(() => {
            const grid = document.querySelector('div.MuiDataGrid-toolbarContainer')
            grid.style.flexDirection = 'row-reverse'
        }, 1)        
      }, [])

      function handleDelete(id) {
        console.log(id + ' has been deleted!')
      }

      const actionColumn = {
        field: 'action',
        headerName: 'Action',
        width: 200,
        renderCell: (params) => {
          return (
            <div className="action flex gap-5">
              <Link href={`/${slug}/${params.row.id}`}>
                <Image src={'/view.svg'} alt="" width='20' height='20' />
              </Link>
              <div className="delete cursor-pointer" onClick={() => { handleDelete(params.row.id) }}>
                <Image src={'/delete.svg'} alt="" width='20' height='20' onClick={() => dispatch({type: 'deleted', id: params.row.id})} />
              </div>
            </div>
          )
        }
      }
      

    return (
      <div className="dataTable">
        <DataGrid
        width={"90%"}
        className=" bg-white"
        rows={rows}
        columns={[...columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{toolbar: GridToolbar}}
        slotProps={{
            toolbar: {
                showQuickFilter: true,
                quickFilterProps: {debounceMs: 500},
            }
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
      </div>
    )
};
