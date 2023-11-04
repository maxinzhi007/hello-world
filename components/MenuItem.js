import Link from "next/link"
import Image from "next/image"

export default function MenuItem({title, list}) {

    return (
        <div className="item flex flex-col gap-2 mb-4">
                <span className="title font-semibold text-[12px] text-soft-color uppercase hidden lg:block">{title}</span>
                {list.map((item) => {
                    return <ListItem key={item.id} title={item.title} url={item.url} icon={item.icon} />
                })}
            </div>
    )
}

function ListItem({title, url, icon}) {
    
    return (
        <Link className="flex flex-row space-x-2 hover:bg-soft-bg rounded-md p-2" href={url}>
                    <Image className="" src={'/' + icon} alt="" width="16" height="16" />
                    <span className="listItemTitle hidden lg:block">{title}</span>
            </Link>
    )
}