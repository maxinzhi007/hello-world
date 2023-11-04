import { Tooltip } from "@mui/material";
import Image from "next/image";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

export default function Single({id, img, title, info, chart, activities}) {

    return (
        <div className="single text-white flex w-full h-full flex-col lg:flex-row gap-y-10 lg:gap-0">
            <div className="view basis-1/2">
                <div className="info">
                    <div className="topInfo flex gap-x-5 items-center">
                        <Image className="rounded-xl" src={img} width={80} height={80} alt="" />
                        <h1 className="text-4xl font-semibold">{title}</h1>
                        <button className="bg-white text-black rounded-md text-[12px]">Update</button>
                    </div>
                    <div className="details">
                      {Object.entries(info).map((item) => {
                       return (<div className="item my-5 capitalize" key={item[0]}>
                            <span className="itemTitle">{item[0]}: </span>
                            <span className="itemValue">{item[1]}</span>
                        </div>)
                        })}
                    </div>
                </div>

                <hr className="h-[0px] w-[90%] my-10 border-gray-300 hidden sm:block" />

                <div className="chart w-[80%] h-[400px] hidden sm:block">
                {chart && <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={chart.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {chart.dataKeys.map((dataKey) => {
            return <Line type="monotone" dataKey={dataKey.name} stroke={dataKey.color} key={dataKey.name} />
          })}
        </LineChart>
      </ResponsiveContainer>}
                </div>
            </div>

            <div className="activities basis-1/2">
                <h1  className="text-4xl font-semibold mb-5">Latest Activities</h1>
                <ul className=" border-l-[1px] border-[#f45b69] ">
                  {activities.map((act, index) => {
                    return (<li key={index} className=" list-none w-[1px] pt-10 relative after:content-[''] after:w-2 after:h-2 after:bg-[#f45b69] after:absolute
                    after:rounded-full after:left-[0%] after:bottom-0 after:-translate-x-[50%]">
                        <div className="w-[480px] p-2 mb-2 bg-[#f45b69] bg-opacity-10">
                            <p>{act.text}</p>
                            <time className="text-[12px]">{act.time}</time>
                        </div>
                    </li>)
                      })}
                </ul>
            </div>
        </div>
    )
};
