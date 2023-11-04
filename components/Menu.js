import Image from "next/image";
import Link from "next/link";
import { menu } from "@/src/data";
import MenuItem from "./MenuItem";

export default function Menu() {
    return (
        <div className="menu bg-main-bg text-main-color w-max lg:w-[200px]text-sm left-1 absolute lg:relative">

            {menu.map((list) => {
                return <MenuItem key={list.id} title={list.title} list={list.listItems} />
            })}

        </div>
    )
}