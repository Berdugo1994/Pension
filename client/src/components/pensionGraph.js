import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export default function PensionGraph({ pensionData }) {
  return (
    <div style={{ height: "75vh", width: "100%" }}>
      <ResponsiveContainer height={"100%"} width={"100%"}>
        <LineChart
          data={pensionData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='date' />
          <YAxis />
          <Tooltip
            formatter={(value, name, props) => {
              return numberWithCommas(value);
            }}
          />
          <Legend />
          <Line
            type='monotone'
            dataKey='returns'
            stroke='#8884d8'
            activeDot={{ r: 8 }}
            name='Real Value'
          />
          <Line
            name='Investment'
            type='monotone'
            dataKey='totalInvestment'
            stroke='#82ca9d'
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
