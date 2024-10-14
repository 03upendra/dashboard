"use client";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

const data = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 401, pv: 2500, amt: 2500 },
  { name: "Page C", uv: 402, pv: 2600, amt: 2600 },
  { name: "Page D", uv: 403, pv: 2700, amt: 2700 },
  { name: "Page E", uv: 404, pv: 2800, amt: 2800 },
];

export default function OverviewChart() {
  return (
    <LineChart width={600} height={250} data={data} className="my-auto">
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
    </LineChart>
  );
}
