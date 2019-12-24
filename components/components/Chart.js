import React from "react";
import Trend from "react-trend";

const Chart = () => (
  <Trend
    smooth
    autoDraw
    autoDrawDuration={3000}
    autoDrawEasing="ease-out"
    height={50}
    data={[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]}
    gradient={["#00c6ff", "#F0F", "#FF0"]}
    radius={5}
    strokeWidth={5}
    strokeLinecap={"round"}
  />
);

export default Chart;
