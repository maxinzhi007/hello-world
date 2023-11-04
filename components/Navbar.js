import Image from "next/image";

export default function Navbar() {
    return <div className="bg-main-bg text-main-color w-full p-2 flex justify-between" >
        <div className="logo flex items-center font-semibold space-x-2">
            <Image src='/logo.svg' alt="logo" width="35" height="35" />
            <span className="text-l">Ma-admin</span>
        </div>

        <div className="icons flex content-center space-x-5">
            <Image src="/search.svg" alt="" width="22" height="22" className="hidden md:block" />
            <Image src="/app.svg" alt="" width="22" height="22" className="hidden md:block"  />
            <Image src="/expand.svg" alt="" width="22" height="22" className="hidden md:block" />
            <div className="notification flex items-center relative">
                <Image src="/notifications.svg" alt="" width="22" height="22"/>
                <p className="bg-[red] w-4 h-4 absolute rounded-full top-[2px] -right-[4px] flex items-center justify-center">1</p>
            </div>
            <div className="user flex items-center space-x-3">
                <Image className="rounded-full" alt="" src="/mage.jpg" width="40" height="40" />
                <p>Nay Lin Tun</p>
            </div>
            <Image src="/settings.svg" alt="" width="22" height="22" />
        </div>
    </div>
}