import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
    { name: "Mobile", value: 400, color: "#0088FE" },
    { name: "Desktop", value: 300, color: "#00C49F" },
    { name: "Laptop", value: 300, color: "#FFBB28" },
    { name: "Tablet", value: 200, color: "#FF8042" },
  ];

export default function PieChartBox() {
    return (
        <div className="pieChartBox w-100 h-full flex flex-col space-y-10">
          <h1 className="text-xl xl:text-4xl font-bold">
            Leads by source
          </h1>
          <div className="chart flex flex-col justify-around w-full h-full">
          <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip 
                contentStyle={{background:'white', borderRadius: '5px'}}
                />
        <Pie
          data={data}
          innerRadius={"90%"}
          outerRadius={"100%"}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((item) => (
            <Cell key={item.name} fill={item.color} />
          ))}
        </Pie>
      </PieChart>
          </ResponsiveContainer>

          <div className="chartDetails flex justify-between">
            {data.map((item) => {
              return <div className="pointDetail flex flex-col items-center text-sm" key={item.name}>
                <div className="name flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{background: item.color}} />
                  <span className="inline-block">{item.name}</span>
                </div>
                <div className="number">
                  <span>{item.value}</span>
                </div>
              </div>
            })}
          </div>
          </div>
          
         
        </div>
    )
}