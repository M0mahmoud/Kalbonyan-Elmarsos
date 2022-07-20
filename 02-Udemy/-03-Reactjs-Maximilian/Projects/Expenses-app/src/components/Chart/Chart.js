import React from "react";
import ChartBar from "./ChartBar";

import "./styles/Chart.css";

const Chart = (props) => {
  //Max Value
  const datePointsValues = props.datePoints.map(datePoint=>datePoint.value)
  const totalMaximun = Math.max(...datePointsValues)
  return (
    <div className="chart">
      {props.datePoints.map((datePoints) => (
        <ChartBar
          key={datePoints.label}
          value={datePoints.value}
          maxValue={totalMaximun}
          label={datePoints.label}
        />
      ))}
    </div>
  );
};

export default Chart;
