import BarChartBox from "@/components/BarChartBox";
import ChartBox from "@/components/ChartBox";
import TopBox from "@/components/TopBox";
import PieChartBox from "@/components/PieChartBox";
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from "@/src/data";
import BigChartBox from "@/components/BigChartBox";

export default function Home() {
    return (
        <div className="home text-main-color grid gap-3 grid-cols-1 md:grid-cols-2 min-[1200px]:grid-cols-3 min-[1500px]:grid-cols-4 
        grid-flow-dense auto-rows-[140px, auto]">
            <div className="p-2 border-2 border-soft-bg rounded-md box box1 col-span-1 row-span-3">
                <TopBox />
            </div>

            <div className="p-2 border-2 border-soft-bg rounded-md box box2"><ChartBox {...chartBoxUser} /></div>

            <div className="p-2 border-2 border-soft-bg rounded-md box box3"><ChartBox {...chartBoxProduct} /></div>

            <div className="p-2 border-2 border-soft-bg rounded-md box box4 col-span-1 row-span-3">
                <PieChartBox />
            </div>

            <div className="p-2 border-2 border-soft-bg rounded-md box box5"><ChartBox {...chartBoxRevenue} /></div>

            <div className="p-2 border-2 border-soft-bg rounded-md box box6"><ChartBox {...chartBoxConversion} /></div>

            <div className="p-2 border-2 border-soft-bg rounded-md box box7 hidden md:block col-span-2 row-span-2"><BigChartBox /></div>

            <div className="p-2 border-2 border-soft-bg rounded-md box box8"><BarChartBox {...barChartBoxRevenue} /></div>

            <div className="p-2 border-2 border-soft-bg rounded-md box box9"><BarChartBox {...barChartBoxVisit} /></div>

        </div>
    )
}