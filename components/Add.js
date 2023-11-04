import { useEffect } from "react"
import { useImmer } from "use-immer"

export default function Add({setOpen, slug, columns, dispatch}) {
    const newColumns = columns.filter((c) => c.field !== 'id' && c.field !== 'img')

    // prepare the `Object` to create the State for this form
    function formInfo() {
        let arr = []

        newColumns.map((c) => {
            arr.push(c.field)
        })

        let info = {}

        arr.map((a) => {
            info[a] = ''
        })

        return info
    }

    // create the object state to this form
    const [ info, updateInfo ] = useImmer(formInfo())

    function handleSubmit(e) {
        e.preventDefault()
        if(slug === 'user') {
            dispatch({
                type: 'added',
                ...info
            })
        }
        setOpen(false)
    }

    function handleChange(e, name) {
        updateInfo(draft => {
            draft[name] = e.target.value
        })
    }

    return (
        <div className="add absolute inset-0 w-screen h-screen flex items-center justify-center bg-black/70">
            <div className="modal bg-main-bg rounded-md flex flex-col relative p-10">
                <span className="close cursor-pointer absolute top-0 right-2 text-lg" onClick={() => setOpen(false)}>
                    X
                </span>
                <h1 className="text-soft-color text-2xl font-bold mb-7">Add new {slug}</h1>
                <form className="flex flex-col max-w-[500px] gap-3" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap gap-y-3 basis-3/4 items-center justify-between mb-5">
                    {columns.filter((c) => c.field !== 'id' && c.field !== 'img').map((c) => {
                       return (<div className="w-[230px] flex flex-col gap-y-1 mb-3" key={c.field}>
                            <label className="font-semibold text-md">{c.headerName}</label>
                            <input className="rounded-sm out bg-main-bg border-2 border-slate-400 placeholder:text-slate-500
                             p-1" type={c.type} placeholder={c.field} onChange={(e) => {handleChange(e, c.field)}} value={info[c.field]} />
                        </div>)
                    })
                    }
                    </div>
                  <button className="basis-1/4 bg-white rounded-sm text-main-bg text-lg font-semibold">Send</button>
                </form>
            </div>
        </div>
    )
};
