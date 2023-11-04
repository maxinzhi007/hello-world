import Add from "@/components/Add";
import DataTable from "@/components/DataTable";
import { useState } from "react";
import { products } from "@/src/data";
import Image from "next/image";

export default function Products() {
    const [open, setOpen] = useState(false)

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        { field: 'img', headerName: 'Image', width: 80,
          renderCell: (params) => {
            return <Image src={params.row.img || "/noavatar.png" } alt="" width="30" height="30" style={{objectFit: 'cover', borderRadius: '50%', width: '30px',
                height: '30px'}} />
          }
        },
        {
          field: "title",
          type: "string",
          headerName: "Title",
          width: 250,
        },
        {
          field: "color",
          type: "string",
          headerName: "Color",
          width: 100,
        },
        {
          field: "price",
          type: "string",
          headerName: "Price",
          width: 100,
        },
        {
          field: "producer",
          headerName: "Producer",
          type: "string",
          width: 200,
        },
        {
          field: "createdAt",
          headerName: "Created At",
          width: 100,
          type: "string",
        },
        {
          field: "inStock",
          headerName: "In Stock",
          width: 100,
          type: "boolean",
        },
      ];

    return (
        <div  className="text-main-color border-l-2 p-2 border-l-soft-bg h-full">
            <div className="info flex gap-1 items-center">
                <h1 className="text-4xl p-3">Products</h1>
                <button className="bg-white text-[10px] p-[5px] font-bold text-slate-700 border rounded-sm"
                 onClick={() => setOpen(true)}>
                  Add New Product
                </button>
            </div>
            <DataTable columns={columns} rows={products} slug='product' />
            {open && <Add setOpen={setOpen} slug='product' columns={columns} />}
        </div>
    )
}