import React, { useEffect, useState } from "react";
import {
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
} from "recharts";
import { Card } from "react-bootstrap";
export default function PensionChart({ pensionData, employemnt }) {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const size = pensionData.length;
  let tempData = [
    {
      name: "Employee Investment",
      fill: "#83a6ed",
      total: 0,
    },

    {
      name: "Employer Investment",
      fill: "#a4de6c",
      total: 0,
    },
    {
      name: "Real Value",
      fill: "#ffc658",
      total: 0,
    },
  ];
  const [data, setData] = useState([]);
  const [pensionCardContent, setPensionCardContent] = useState("");

  useEffect(() => {
    tempData[0]["total"] = pensionData[size - 1]["employeeInvestment"];

    tempData[0]["total_label"] = numberWithCommas(
      pensionData[size - 1]["employeeInvestment"]
    );
    tempData[1]["total"] = pensionData[size - 1]["employerInvestment"];

    tempData[1]["total_label"] = numberWithCommas(
      pensionData[size - 1]["employerInvestment"]
    );
    tempData[2]["total"] = pensionData[size - 1]["returns"];
    tempData[2]["total_label"] = numberWithCommas(
      pensionData[size - 1]["returns"]
    );
    setData(tempData);
  }, [pensionData]);

  useEffect(() => {
    if (employemnt == "1") {
      setPensionCardContent(`By the law in Israel, Pension must be at least 18.5%(12.5% employer
            + 6% employee)`);
    } else {
      setPensionCardContent(
        `Pension must be at least 4.45% of the first 63,306 and then 12.55% of the rest`
      );
    }
  }, [employemnt]);

  return (
    <div style={{ height: "75vh", width: "33%", border: "2px solid orange" }}>
      <Card style={{ width: "100%", height: "33%" }}>
        <Card.Body>
          <Card.Title>Pension</Card.Title>
          <Card.Text>{pensionCardContent}</Card.Text>
        </Card.Body>
      </Card>
      <ResponsiveContainer height={"67%"}>
        <RadialBarChart
          innerRadius='10%'
          outerRadius='80%'
          data={data}
          startAngle={180}
          endAngle={-180}
        >
          <RadialBar
            minAngle={15}
            label={{ fill: "#666", position: "insideStart" }}
            background
            clockWise={true}
            dataKey='total'
          />
          <Legend
            iconSize={5}
            layout='horizontal'
            verticalAlign='bottom'
            align='center'
          />
          <Tooltip
            labelFormatter={(name) => data[name]["name"]}
            formatter={(value, name, props) => {
              return numberWithCommas(value);
            }}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}
