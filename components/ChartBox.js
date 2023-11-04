import Image from "next/image"
import Link from "next/link"
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts"

export default function ChartBox(props) {

    return (
        <div className="chart-box flex flex-col gap-y-2 sm:gap-0 sm:flex-row h-full justify-between">
            <div className="boxInfo p-2 basis-3/5 flex  flex-col justify-around">
                <div className="title flex items-center gap-3">
                    <Image src={props.icon} alt="" width="30" height="30" />
                    <span className="text-sm">{props.title}</span>
                </div>
                <h1 className="text-xl xl:text-4xl font-bold">{props.number}</h1>
                <Link href='/' className="text-sm" style={{color: props.color}}>view all</Link>
            </div>
            <div className="chartInfo basis-2/5 flex flex-col justify-between relative">
            <div className="chart w-full h-full">
            <ResponsiveContainer width="99%" height="100%">
        <LineChart data={props.chartData}>
            <Tooltip
              contentStyle={{background: 'transparent', border: 'none'}}
              labelStyle={{display: 'none'}}
              position={{x: 20, y: 80}}
            />
          <Line type="monotone" dataKey={props.dataKey} stroke={props.color} strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
            </div>
            <div className="texts flex flex-col items-end absolute bottom-0 right-0">
            <span className="percentage text-xl font-bold" style={{color: props.percentage < 0 ? 'tomato' : 'limegreen'}}>{props.percentage}%</span>
            <span className="duration text-[12px]">this month</span>
            </div>
            </div>
        </div>
    )
}