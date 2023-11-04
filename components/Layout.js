import Footer from "./Footer";
import Menu from "./Menu";
import Navbar from "./Navbar";


export default function Layout({children}) {

    return (
        <div className="flex flex-col bg-main-bg selection:bg-slate-300 overflow-x-hidden">
            <Navbar/>
            <main className="flex flex-row">
                <Menu />
                <div className="w-full  py-[5px] px-[30px]">
                {children}
                </div>
            </main>
            <Footer />
        </div>
    )
}