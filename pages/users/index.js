import Add from "@/components/Add";
import DataTable from "@/components/DataTable";
import Image from "next/image";
import { useState } from "react";
import { useUserState } from "@/components/handleReducer";

export default function Users() {
    
    const [open, setOpen] = useState(false)
    // console.log(useUserState())
    // use the `userRows` in the React state version.
    const {userRowsState, dispatch} = useUserState()

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'img', headerName: 'Avatar', width: 80,
          renderCell: (params) => {
            return <Image src={params.row.img || "/noavatar.png" } alt="" width="30" height="30" style={{objectFit: 'cover', borderRadius: '50%', width: '30px',
                height: '30px'}} />
          }
        },
      
        {
          field: 'firstName',
          headerName: 'First name',
          width: 110,
          editable: true,
          type: 'string',
        },
        {
          field: 'lastName',
          headerName: 'Last name',
          width: 110,
          editable: true,
          type: 'string',
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 200,
          editable: true,
          type: 'string',
        },
        {
          field: 'phone',
          headerName: 'Phone',
          width: 150,
          editable: true,
          type: 'string',
        },
        {
          field: 'createdAt',
          headerName: 'Created-At',
          width: 100,
          type: 'string',
        },
        {
          field: 'verified',
          headerName: 'Verified',
          width: 150,
          type: 'boolean'
        }
      ];

    return (
        <div  className="text-main-color border-l-2 p-2 border-l-soft-bg">
            <div className="info flex gap-1 items-center">
                <h1 className="text-4xl p-3">Users</h1>
                <button className="bg-white text-[10px] p-[5px] font-bold text-slate-700 border rounded-sm"
                 onClick={() => setOpen(true)}>
                  Add New User
                </button>
            </div>
            <DataTable dispatch={dispatch} columns={columns} rows={userRowsState} slug='user' />
            {open ? <Add key={'users'} dispatch={dispatch} setOpen={setOpen} slug='user' columns={columns} /> : ''}
        </div>
    )
}