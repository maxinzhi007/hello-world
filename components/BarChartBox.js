import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";

export default function BarChartBox(props) {
    return (
        <div className="barChartBox w-full h-full">
            <h1 className="text-xl font-semibold mb-2">{props.title}</h1>
            <div className="chart">
            <ResponsiveContainer width="99%" height={150}>
        <BarChart data={props.chartData}>
          <Tooltip 
            contentStyle={{background: '#2a3447', borderRadius: '5px'}}
            labelStyle={{ display: 'none' }} 
            cursor={false}
            />
          <Bar dataKey={props.dataKey} fill={props.color} />
        </BarChart>
      </ResponsiveContainer>
            </div>
        </div>
    )
}