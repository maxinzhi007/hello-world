import { topDealUsers } from "@/src/data"
import Image from "next/image"

export default function TopBox() {
    return (
        <div className="top-box">
            <h1 className="mb-7 text-xl xl:text-4xl font-bold">Top Deals</h1>
            <div className="list">
                {topDealUsers.map((user) => {
                    return (
                        <div key={user.id} className="listItem flex items-center justify-between mb-7">
                            <div className="user flex gap-5">
                                <Image width={50} height={50} src={user.img} alt=""  className="w-10 h-10 rounded-full object-cover block"/>
                                <div className="userText flex flex-col justify-center">
                                    <span className="text-[14px] font-semibold">{user.username}</span>
                                    <span className="text-[12px] hidden min-[1500px]:block ">{user.email}</span>
                                </div>
                            </div>
                            <span className="font-bold">${user.amount}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}